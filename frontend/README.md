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
