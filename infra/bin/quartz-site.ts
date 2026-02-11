#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AppSiteStack } from "../lib/app-site-stack";
import { QuartzSiteStack } from "../lib/quartz-site-stack";

const app = new cdk.App();
const enableAppStack =
  (app.node.tryGetContext("enableAppStack") as string | undefined) === "true";

new QuartzSiteStack(app, "QuartzSiteStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

if (enableAppStack) {
  new AppSiteStack(app, "AppSiteStack", {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
  });
}
