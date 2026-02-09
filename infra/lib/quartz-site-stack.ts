import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";

export class QuartzSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const keyPrefix = "obsidian";
    const originPath = `/${keyPrefix}`;
    const siteAssetPath =
      (this.node.tryGetContext("siteAssetPath") as string | undefined) ??
      path.join(__dirname, "../../quartz/public");

    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: false,
    });

    const origin = origins.S3BucketOrigin.withOriginAccessControl(siteBucket, {
      originPath,
    });

    const rewriteFn = new cloudfront.Function(this, "PrettyUrlRewriteFn", {
      runtime: cloudfront.FunctionRuntime.JS_2_0,
      code: cloudfront.FunctionCode.fromFile({
        filePath: path.join(__dirname, "../functions/pretty-url-rewrite.js"),
      }),
    });

    const distro = new cloudfront.Distribution(this, "Distro", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [
          {
            function: rewriteFn,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
    });


    new s3deploy.BucketDeployment(this, "DeployQuartzPublic", {
      sources: [s3deploy.Source.asset(siteAssetPath)],
      destinationBucket: siteBucket,
      destinationKeyPrefix: keyPrefix,
      distribution: distro,
      distributionPaths: ["/*"],
    });

    new cdk.CfnOutput(this, "CloudFrontDomainName", {
      value: distro.domainName,
    });
  }
}
