import { Match, Template } from "aws-cdk-lib/assertions";
import { QuartzSiteStack } from "../lib/quartz-site-stack";
import { createTestApp, env, expectedTagList } from "./helpers";

describe("QuartzSiteStack", () => {
  test("matches snapshot", () => {
    const app = createTestApp();
    const stack = new QuartzSiteStack(app, "QuartzSiteStack", { env });
    const template = Template.fromStack(stack);

    expect(template.toJSON()).toMatchSnapshot();
  });

  test("creates intended resources", () => {
    const app = createTestApp();
    const stack = new QuartzSiteStack(app, "QuartzSiteStack", { env });
    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::S3::Bucket", 1);
    template.resourceCountIs("AWS::CloudFront::Distribution", 1);
    template.resourceCountIs("AWS::CloudFront::Function", 1);
    template.resourceCountIs("Custom::CDKBucketDeployment", 1);

    template.hasResourceProperties("AWS::S3::Bucket", {
      BucketEncryption: Match.objectLike({
        ServerSideEncryptionConfiguration: Match.arrayWith([
          Match.objectLike({
            ServerSideEncryptionByDefault: Match.objectLike({
              SSEAlgorithm: "AES256",
            }),
          }),
        ]),
      }),
      PublicAccessBlockConfiguration: Match.objectLike({
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      }),
    });
  });

  test("applies required tags", () => {
    const app = createTestApp();
    const stack = new QuartzSiteStack(app, "QuartzSiteStack", { env });
    const template = Template.fromStack(stack);

    for (const tag of expectedTagList()) {
      template.hasResourceProperties("AWS::S3::Bucket", {
        Tags: Match.arrayWith([tag]),
      });
    }
  });
});
