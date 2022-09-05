# <img src="./content/assets/symply-logo.png" width="110px" height="auto"></img> Website

For every commit that is commited to `dev` or `production` branch, it will be deployed automatically deployed to the following links.

- production: https://symply.io
- dev: https://symply.netlify.app/

---

## Getting started

### 1. Requirements 

To get started, make sure that your local machine fulfill these requirements:

- Node.js

To get up and running with Gatsby, you’ll need to have Node.js version **12.13**. To check the existing Node.js version, run

```
node -v
```

If Node.js does not exist on your system, follow these following [steps](https://www.gatsbyjs.com/docs/tutorial/part-0/#nodejs).

- Gatsby CLI

For this project, you should be on **v3** or newer. To check the existing Gatsby CLI version, run

```
gatsby -v
```

If Gatsby CLI does not exist on your system, run the following command.

```
npm install -g gatsby-cli
```

- Yarn (optinonal, but recommended)

### 2. Install Dependencise

Before running the website on development, install all the existing dependencies in `package.json` by either using NPM

```
npm install
```

or Yarn package.

```
yarn
```

### 3. Run Development App Locally

To run the development app locally, run the following command.

```
yarn develop
```

Congratulations! 🎉 You successfully run the Symply website!!!

### 4. Build the Production App Locally

To run the production build version of the app, run the following command.

```
yarn production
```

---

## Basic Workflow

When working on a task on the Symply Website, make sure to follow the following steps **precisely**.

1. Build a new branch for every task based on `production`, either from ClickUp, GitHub, or Locally
2. Push all the commits dedicated to the task exculisvely to the newly created branch
3. After finishing the task, move the task status in ClickUp from `IN PROGRESS` to `REVIEW`
4. Make a new PR from the newly created branch to `dev` and assign other people to review the PR
5. If any comments or request changes on the PR, resolve it as soon as possible
6. Once the PR is approved, the task is done and will be deployed by other responsible party

---

## Solving Dependency Issue With Sharp

If you run into a dependency issue with `sharp` you can run the following commands.

```
rm -rf /Users/{username}/.npm/\_libvips

brew install vips

rm -rf node_modules

yarn
```

---

## License

[MIT](https://github.com/baseline-software/symply.io/blob/Website-Pricing-Page-Revamp/LICENSE)
