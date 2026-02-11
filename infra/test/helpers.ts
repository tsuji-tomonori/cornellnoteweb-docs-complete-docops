import * as cdk from "aws-cdk-lib";

export const expectedTags = {
  Project: "cornellnoteweb",
  Environment: "Development",
  Owner: "PlatformTeam",
  CostCenter: "CC1234",
  ManagedBy: "CDK",
};

export function expectedTagList() {
  return Object.entries(expectedTags).map(([Key, Value]) => ({ Key, Value }));
}

export function createTestApp() {
  return new cdk.App({
    context: {
      appAssetPath: "..",
      siteAssetPath: "../quartz/public",
      tagProject: expectedTags.Project,
      tagEnvironment: expectedTags.Environment,
      tagOwner: expectedTags.Owner,
      tagCostCenter: expectedTags.CostCenter,
      tagManagedBy: expectedTags.ManagedBy,
    },
  });
}

export const env = {
  account: "111111111111",
  region: "ap-northeast-1",
};
