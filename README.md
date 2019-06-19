# Landing Page

This is the landing for a SaaS application e.g. cloud for health services. It is build based on the frontend pages of 
* Website based on AntDesign: [yoque](https://www.yuque.com/), [500px](https://web.500px.com/) 
* Interesting Industries: [American Well](https://www.americanwell.com/), [Vivy](https://www.vivy.com/) and [23andme](https://www.23andme.com/en-int/), [Benevolent.ai](https://benevolent.ai/), [solv](https://www.solvhealth.com/), [Oscar](https://www.hioscar.com/ny), [suki](https://www.suki.ai/), [98point6](https://www.98point6.com/), [omanda](https://www.omadahealth.com/), [Gesundheitscloud](https://www.gesundheitscloud.de/en/), [HealthDataSpace](https://pro.healthdataspace.org/gesundheitsnetzwerk/)
* Cloud Examples: [Google - because material is similar to antd](https://cloud.google.com/), [AWS](https://aws.amazon.com/) and [Ali](https://www.alibabacloud.com/)


* [Customized create react app](https://ant.design/docs/react/use-with-create-react-app) to support less as a css pre processor.

## Steps

1. Build the landing page
   * using React based on this [tutorial](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8268500?start=0)
   * Build it using AWS Amplify using these tutorials [egghead](https://egghead.io/lessons/react-install-configure-the-aws-amplify-cli) / [linkin learning](https://www.linkedin.com/learning/aws-for-developers-aws-amplify/build-apps-with-aws-using-amplify-cli?u=2108001)  .
   * https://medium.com/@FizzyInTheHall/native-development-with-aws-amplify-f9bec8fdafe2
2. Build the CI/CD: http://blog.logicwind.com/auto-deploy-spa-with-aws-s3-and-cloudfront-using-gitlab-ci-cd/ / https://forestry.io/blog/automate-deploy-w-circle-ci/ / https://blog.rangle.io/frontend-app-in-aws-with-terraform/ 
   1. https://medium.com/buildit/a-b-testing-on-aws-cloudfront-with-lambda-edge-a22dd82e9d12 
   2. automatic testing for UIs: unit? ui?
   3. canery
   4. a/b testing / tracking 
      1. https://practicoanalytics.com/mixpanel-guide/
      2. segment.io / s3 / mixpanel (google analytics?)
      3. https://medium.com/dazn-tech/https-medium-com-lucamezzalira-geo-routing-a-b-testing-and-dynamic-configuration-with-lambda-at-edge-c96999c26fe2
      4. https://www.youtube.com/watch?v=Ogt1YqABpAE
   5. release
3. Build Tracking - for AB Testing: 
   * https://hackernoon.com/adding-amazon-pinpoint-analytics-to-your-next-mobile-javascript-application-24ad49557a6f
   * https://aws-amplify.github.io/docs/js/analytics
   * 

## Architectural Decision Records

<!-- adrlog -->

- [ADR-0001](0001-record-architecture-decisions.md) - Record architecture decisions
- [ADR-0002](0002-use-the-stack-from-react-the-complete-guide-to-keep-up-to-date-with-react.md) - Use the stack from `React the complete guide` to keep up to date with React
- [ADR-0003](0003-use-javascript-over-typescript.md) - Use Javascript over Typescript
- [ADR-0004](0004-use-client-side-rendering-create-react-app.md) - Use Client Side Rendering (Create React App)
- [ADR-0005](0005-use-storybook-to-build-self-contained-components-but-not-for-uis.md) - Use Storybook to build self contained components, but not for UIs

<!-- adrlogstop -->

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

-----

# Devops Concept

We follow [DevOps Best Practices](https://denseidel.github.io/docs/basics/devsecops.html). 

## Concept

### Components

- Frontend: complete staging + a/b testing (client)
- Functions: complete staging + canary (automated testing)
- IDP: single instance, with a special tag in the jwt for test users (one one the identification possibilities of arteficial testing).

### Staging

#### Development

Development is done locally in a seperate branch:
*  for UIs, and tested against production with a test user using end to end tests (cypress). 
*  For Functions they are also developed locally and tested with unit tests. 
*  IDP is not deployed locally but always remote using test users.

#### Deploy to Preview

After a pull request is created: 
* the asset is build tested
* if ok, deployed to a branch specific preview environment
* the link is then commented in the PR: https://developer.github.com/v3/pulls/comments/#create-a-comment
* the the pipeline either waits for manual aproval or deploys to production.


#### Production (+ Canary)

The deployment to production always happens with canary releases check metrics if the deployment is correct. After that they are gradually roled out.

* Frontend: The assets is uploaded to the canary, and the config switches to serve the canary & the a/b config starts with 1% new feature, then the key metrics frontend errors and other kpis like click throughs are observed and the config is update more to the new feature.
* Functionsn: The asset is deployed as a new version, and the canary deployment works with code deploy. 
* IDP: Only one deployment including test users.



## Tools

As a tool we use **Azure Pipelines** the Pipeline `azure-pipeline.yaml` does the following to implement the following [best practices](https://www.youtube.com/watch?v=Jnl29J3RJQ4): 
  - Build: It builds the artefact `npm run build` and test them with `cypress` and `jest`. 
  - If _BuildIsSucessful()_ `DeployToPreview`:
    - Deploy the artefact to a url/entpoint that includes the branch name and integrates against the the production environment but adds a `synthetic monitoring` flag to the calls (e.g.) do this with a [pulumi setup](https://pulumi.io/reference/cd-azure-devops.html).
  - If _VerificationIsOk()_:
    - `PromoteToProd`:
      - This means as a canary either as _A/B_ for frontends or as canary for backends. Then look at the error rates and role back or continue.
      - Use again a seperate pulumi setup.


### Pulumi

We use [pulumi](https://pulumi.io/quickstart/aws/tutorial-s3-website.html) as our infrastructure as code automation: 

Install pulumi
```
brew install pulumi
```

Configure [AWS Credentials](https://pulumi.io/quickstart/aws/setup.html):

```
export AWS_PROFILE=master
```

----




# Overview of the SaaS Platform Architecture

## Platform Services

* Tenent and Identity Onboarding: Registration (Initial User Data, Tenant Data (tier, products, ...))
  * Signup Screen
  * https://github.com/aws-samples/aws-saas-factory-bootcamp/blob/master/Lab1.md
  * https://github.com/ge8/DoCaaS/tree/master/demos
  * https://github.com/ge8/docaas-summit
* Tenant Management
* User Management
* Tenant Provisioning
* Billing

## Application Services

* Your Application Services composed of functions

# saas-platform-template

_This project allows you to bootstrap saas architectures within minutes - meaning you will have your saas platform template running and can adapt form there while seeing how [best practices](https://www.youtube.com/watch?v=O3L-dSyqA7g) can be implemented._

Describe what this project does. Keep this language human and friendly, so avoid internal references, acronyms and if you 
have dependencies, provide a direct link to these.

When describing features of your project, remember to explain why these are a benefit and advantage to the user:

```
This project allows you to scale X (feature) in a fast and predictable way (benefit) - meaning you will use fewer resources and can be confident in your X environment (Advantage).
```

Think about your project as a product, consider who your audience is, and how your decisions affect the number of potential users, below is a handy checklist of things to consider before open sourcing any code. 

- **Avoid internal dependencies** Obviously projects that require internal specific infrastructure, configuration or process have very limited use to anyone outside internal. 
- **Avoid narrow usecases** Does this solve a internal-only problem or does it have broarder application - is there things you could change to make it a more general product
- **Have a Product vision** Do you know where you want to take this product? - then be open about it so future contributors are aware. Being opinionated is great and it helps set expectations and the direction for the project
- **Take ownership** Are you are benevolent dictator or open to anything? - consider how you will interact with future contrbutors who expect you to be an active maintainer
- **Safe defaults** How do people get up and running - are there alot of ceremony involved or can you provide a simple out of the box experience so it is easy for users to evaluate your project


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
If possible, provide a quick exemple of how to get this running with minimal effort, so anyone curious can get up and running as fast as possible 
```

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our process for submitting pull requests to us.

### Develop

Explain how this project was build and give the technical background to contribute.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/denseidel/saas-platform-template/tags). 

## Authors

See the list of [contributors](CONTRIBUTORS) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to [@zalando-incubator/new-project](https://github.com/zalando-incubator/new-project) for the project template
* Thanks to [@PurpleBooth](https://github.com/PurpleBooth) for the original readme
* Thanks to the [@zalando/Nakadi](https://github.com/zalando/nakadi) project for Contribution file
* Thanks to [@SteveMao](https://github.com/stevemao) for [Issue templates](https://github.com/stevemao/github-issue-templates)
