#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { WebsiteStack } from "../lib/cdk_deployment-stack";

const app = new cdk.App();
new WebsiteStack(app, "CdkDeploymentStack", {
  // This will use the account and region from your AWS CLI configuration
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
