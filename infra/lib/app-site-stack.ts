import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

export class AppSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const tagProject =
      (this.node.tryGetContext("tagProject") as string | undefined) ?? "cornellnoteweb";
    const tagEnvironment =
      (this.node.tryGetContext("tagEnvironment") as string | undefined) ?? "Development";
    const tagOwner =
      (this.node.tryGetContext("tagOwner") as string | undefined) ?? "PlatformTeam";
    const tagCostCenter =
      (this.node.tryGetContext("tagCostCenter") as string | undefined) ?? "CC1234";
    const tagManagedBy =
      (this.node.tryGetContext("tagManagedBy") as string | undefined) ?? "CDK";

    cdk.Tags.of(this).add("Project", tagProject);
    cdk.Tags.of(this).add("Environment", tagEnvironment);
    cdk.Tags.of(this).add("Owner", tagOwner);
    cdk.Tags.of(this).add("CostCenter", tagCostCenter);
    cdk.Tags.of(this).add("ManagedBy", tagManagedBy);

    const appAssetPath =
      (this.node.tryGetContext("appAssetPath") as string | undefined) ?? "..";

    const webFn = new lambda.DockerImageFunction(this, "SpringSsrFn", {
      code: lambda.DockerImageCode.fromImageAsset(appAssetPath),
      architecture: lambda.Architecture.ARM_64,
      memorySize: 2048,
      timeout: cdk.Duration.seconds(30),
      environment: {
        AWS_LWA_PORT: "3000",
      },
    });

    const fnUrl = webFn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.AWS_IAM,
    });

    const api = new apigateway.LambdaRestApi(this, "SpringApi", {
      handler: webFn,
      proxy: true,
      deployOptions: {
        stageName: "prod",
      },
    });

    const appOrigin = origins.FunctionUrlOrigin.withOriginAccessControl(fnUrl);
    const apiOrigin = new origins.RestApiOrigin(api);

    const distro = new cloudfront.Distribution(this, "AppDistribution", {
      defaultBehavior: {
        origin: appOrigin,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
        originRequestPolicy:
          cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
        responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.SECURITY_HEADERS,
        compress: true,
      },
    });

    distro.addBehavior("/api/*", apiOrigin, {
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
      originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
      allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.SECURITY_HEADERS,
      compress: true,
    });

    new cdk.CfnOutput(this, "AppCloudFrontDomainName", {
      value: distro.distributionDomainName,
    });

    new cdk.CfnOutput(this, "AppFunctionUrl", {
      value: fnUrl.url,
    });

    new cdk.CfnOutput(this, "ApiGatewayUrl", {
      value: api.url,
    });
  }
}
