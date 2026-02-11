import * as cdk from "aws-cdk-lib";
import { Annotations } from "aws-cdk-lib/assertions";
import { AwsSolutionsChecks } from "cdk-nag";
import { AppSiteStack } from "../lib/app-site-stack";
import { QuartzSiteStack } from "../lib/quartz-site-stack";
import { createTestApp, env } from "./helpers";

function collectNagFindings(stack: cdk.Stack) {
  const errors = Annotations.fromStack(stack).findError("*", /AwsSolutions-/);
  const warnings = Annotations.fromStack(stack).findWarning("*", /AwsSolutions-/);

  return {
    errors: errors.map((entry) => entry.entry.data).sort(),
    warnings: warnings.map((entry) => entry.entry.data).sort(),
  };
}

describe("cdk-nag", () => {
  test("captures AwsSolutions findings for both stacks", () => {
    const app = createTestApp();
    cdk.Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));

    const quartzStack = new QuartzSiteStack(app, "QuartzSiteStack", { env });
    const appStack = new AppSiteStack(app, "AppSiteStack", { env });

    app.synth();

    const findings = {
      QuartzSiteStack: collectNagFindings(quartzStack),
      AppSiteStack: collectNagFindings(appStack),
    };

    expect(findings).toMatchSnapshot();
  });
});
