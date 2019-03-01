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