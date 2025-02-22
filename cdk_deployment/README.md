# 🚀 Automated Deployment of AWS-Shop App using AWS CDK

This project automates the deployment of the **AWS-Shop** application using **AWS CDK**. It sets up an **S3 Bucket** for website hosting and a **CloudFront Distribution** for caching and global delivery.

---

## 🔥 Task 3 Outputs:

**ProductService** production link was added:
[ProductServiceLink](https://6krhhlmu2l.execute-api.eu-west-1.amazonaws.com/prod)

---

## 🔥 Task 2 Outputs:

### **Links After Automated Deployment**

After setting up an **automated deployment pipeline** using **AWS CDK**, the resources were updated.

- **S3 Bucket URL (New Format):**  
  [cdkdeploymentstack-task2helgasappbucketd0e9805f-morwylcweqha.s3.eu-west-1.amazonaws.com/index.html](https://cdkdeploymentstack-task2helgasappbucketd0e9805f-morwylcweqha.s3.eu-west-1.amazonaws.com/index.html)

- **CloudFront Distribution URL:**  
  [d2qer9nz6tkkfj.cloudfront.net](https://d2qer9nz6tkkfj.cloudfront.net)

---

## 📌 Deployment Guide

### 🔹 **1. Build and Deploy**

Run the following commands to deploy the application:

```sh
npm run build    # Build the app
npm run deploy   # Deploy to AWS
```

### 🔹 **2. Invalidate CloudFront Cache**

After deploying new changes, CloudFront might still cache the previous version of your website. To ensure updates are immediately visible, run:

```sh
npm run invalidate
```

This command invalidates cached files, forcing CloudFront to serve the latest version from S3.

### 🔹 **3. Destroy AWS Resources (Cleanup)**

To remove all AWS resources (S3 Bucket, CloudFront, and related infrastructure) when no longer needed, run:

```sh
npm run destroy
```

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
