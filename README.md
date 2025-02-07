# CI/CD on Github Actions - Learning Project

This repository is focused on learning and implementing GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD) using a simple Next.js application.

## Features

- Automated testing (unit and E2E)
- Check for formatting, linting (ESLint) and type erors (Typescript)
- App version control and changelog management (changeset files)
- Upload artifacts (build & test results)
- Production and Staging deployment workflows
- Deploy (and destroy) pull request branch environment
- [Slack](https://slack.com/) notifications (on pull request, test failure and deployments)
- Feature flags

## Technologies Used

- GitHub Actions
- AWS Elastic Beanstalk (for deployment)
- Flagsmith (for feature flagging)
- [Next.js](https://nextjs.org/)
- [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/) (for unit and end-to-end tests respectively)
- [Prettier](https://prettier.io/) (for code formatting)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A GitHub repository with Actions enabled
- AWS CLI configured with necessary permissions
- Elastic Beanstalk CLI installed

## Getting started

This repo uses a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

2. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Available Scripts

You can run the following scripts for various development tasks:

- `npm run build` - Builds the Next.js application for production.
- `npm run lint` - Runs ESLint to check for code quality issues.
- `npm run typecheck` - Runs TypeScript compiler to check for type errors.
- `npm run format` - Checks for formatting issues using Prettier.
- `npm run format:fix` - Automatically formats the code using Prettier.
- `npm run test` - Runs Jest tests and generates a coverage report.
- `npm run test:e2e` - Runs Playwright tests for end-to-end testing.

## GitHub Actions Workflows

This repository includes some GitHub Actions workflows to automate the build, test, and deployment process.

### CI Workflow

Runs formatting, type error checking, linting and (both unit and end-to-end) tests on every pull request.

PUT_IMAGE_HERE

_Continuous Integration workflow plan_

### CD Workflow - Staging and Production environments

Deploys the application to the appropriate environment based on the branch and workflow trigger. Additionally, it manages the creation of version pull requests and releases, ensuring a structured deployment process.

PUT_IMAGE_HERE

_Continuous Delivery workflow plan - Staging and Production environments_

### CD Workflow - PR branch environment

Deploys the application to a temporary environment based on the pull request branch when a user comments /deploy on the pull request. Automatically manages environment cleanup by destroying the deployment when the pull request is merged or closed.

PUT_IMAGE_HERE

_Continuous Delivery workflow plan - PR branch environment_
