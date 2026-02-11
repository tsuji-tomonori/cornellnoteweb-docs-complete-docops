import { Match, Template } from "aws-cdk-lib/assertions";
import { AppSiteStack } from "../lib/app-site-stack";
import { createTestApp, env, expectedTagList } from "./helpers";

function sanitizeTemplateForSnapshot(templateJson: Record<string, unknown>) {
  const template = JSON.parse(JSON.stringify(templateJson)) as {
    Resources?: Record<string, { Type?: string; Properties?: Record<string, unknown> }>;
  };

  if (template.Resources) {
    for (const resource of Object.values(template.Resources)) {
      if (resource.Type === "AWS::Lambda::Function") {
        const properties = resource.Properties;
        const code = properties?.Code as Record<string, unknown> | undefined;
        const imageUri = code?.ImageUri as Record<string, unknown> | undefined;
        if (imageUri && typeof imageUri["Fn::Sub"] === "string") {
          imageUri["Fn::Sub"] = "<CONTAINER_IMAGE_URI>";
        }
      }
    }
  }

  return template;
}

describe("AppSiteStack", () => {
  test("matches snapshot", () => {
    const app = createTestApp();
    const stack = new AppSiteStack(app, "AppSiteStack", { env });
    const template = Template.fromStack(stack);

    expect(sanitizeTemplateForSnapshot(template.toJSON())).toMatchSnapshot();
  });

  test("creates intended resources", () => {
    const app = createTestApp();
    const stack = new AppSiteStack(app, "AppSiteStack", { env });
    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::CloudFront::Distribution", 1);
    template.resourceCountIs("AWS::Lambda::Function", 1);
    template.resourceCountIs("AWS::Lambda::Url", 1);
    template.resourceCountIs("AWS::ApiGateway::RestApi", 1);

    template.hasResourceProperties("AWS::Lambda::Url", {
      AuthType: "AWS_IAM",
    });

    template.hasResourceProperties("AWS::CloudFront::Distribution", {
      DistributionConfig: Match.objectLike({
        CacheBehaviors: Match.arrayWith([
          Match.objectLike({
            PathPattern: "/api/*",
          }),
        ]),
      }),
    });
  });

  test("applies required tags", () => {
    const app = createTestApp();
    const stack = new AppSiteStack(app, "AppSiteStack", { env });
    const template = Template.fromStack(stack);

    for (const tag of expectedTagList()) {
      template.hasResourceProperties("AWS::Lambda::Function", {
        Tags: Match.arrayWith([tag]),
      });

      template.hasResourceProperties("AWS::ApiGateway::RestApi", {
        Tags: Match.arrayWith([tag]),
      });
    }
  });
});
