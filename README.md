# Template SDK Monorepo

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>   
</div>

## How to use this repository

> :warning: This is an advanced setup process. For most cases we reccomend using the single sdk per github repository approach. Please see this [repo](https://github.com/speakeasy-sdks/template-sdk) for the corresponding template.

**👀** This template repository is designed to bootstrap a monorepo version of a [Speakeasy managed SDK repository](https://speakeasyapi.dev/docs/create-client-sdks/) using Github's repository clone feature. Once this repository is setup it will automatically keep your SDKs up to date and published to a package manager.

## What is a SDK monorepo ?

A SDK monorepo is a single github repository that houses multiple SDKs. Each SDK corresponds to a single OpenAPI specification. This is a style of SDK popularised by AWS that enables discovery of all available SDKs in one repo but requires download of individual SDKs corresponding to API/business groups.

Each SDK is housed in its own subfolders and have independent github workflows that manage re-generation and release of code. In this example we have two SDKs: Accounting and Lending that can be found in their own sub folders. The general structure is as follows:

```yaml
.github/workflows/ #This is standards github notation for storing workflow files
 - accounting_generate.yaml #This file controls generation of the accounting SDK
 - accounting_release.yaml #This file controls release and publishing of the accounting SDK
 - lending_generate.yaml #This file controls generation of the lending SDK
 - lending_release.yaml #This file controls release and publishing of the lending SDK
 accounting # This folder houses the accounting SDK
 - gen.yaml # Generation config for the accounting SDK
 lending # This folder houses the lending SDK
 - gen.yaml # Generation config for the lending SDK
```

This structure can be extrapoloated to N number of SDKs.

### Creating a Monorepo of SDKs

1. To get started, simply clone the repository by clicking on the "Use template" button and give it a name. You may also copy all the files over manually. 
   
![Screenshot 2023-10-20 at 07 09 51](https://github.com/speakeasy-sdks/template-sdk-monorepo/assets/68016351/3c35d14b-d8a9-4cbb-a864-0cbd173ea258)

2. Configure the Speakeasy workflows to generate the SDKs. Go to the [generation workflow file](https://github.com/speakeasy-sdks/template-sdk-monorepo/blob/main/.github/workflows) for each of the sub sdks and configure the `language`, `mode` and `location` of your openapi document. For complete documentation on all the available generation configurations, see [here](https://speakeasyapi.dev/docs/create-client-sdks/advanced-setup/github-setup/). You will also need to add a `SPEAKEASY_API_KEY` as a repository secret. If you don't already have a key you can get one by making a workspace on Speakeasy [here](https://app.speakeasyapi.dev/workspaces/cl6augut900003b6b06012z1s) and creating a key in the API keys tab.

3. Configure the Speakeasy workflows to publish the SDKs. Go to the [release and publishing workflow file](https://github.com/speakeasy-sdks/template-sdk-monorepo/blob/main/.github/workflows) for each of the sub sdks and configure any relevant package manager credentials as repository secrets. For complete documentation on all the available publishing configurations, see [here](https://speakeasyapi.dev/docs/package-publishing/).

4. Configure the generation by editing the `gen.yaml` file in the root of each SDK repo. This file controls the generator and determines various attributes of the SDK like `packageName`, `sdkClassName`, inlining of parameters, and other ergonomics. More docs available [here](https://www.speakeasyapi.dev/docs/customize-sdks#the-genyaml-file-configuration)

5. Finally go to the Actions tab, choose the generation workflow and click "Force Generate". This will trigger a new generation of your SDK using the configuration you provided above. Depending on whether you configured `pr` or `direct` mode above your updated SDK will appear in PR or in the main branch.

![Screenshot 2023-09-06 at 10 01 46](https://github.com/speakeasy-sdks/template-sdk/assets/68016351/35828982-c6de-4a5c-84f5-ae2b4224cece)

🚀 You should have a working SDK for your API 🙂 . To check out all the features of the SDK please see our docs [site](https://speakeasyapi.dev/docs/create-client-sdks/).

### Local development

Once you have the SDK setup you may want to iterate on the SDK. Speakeasy supports OpenAPI vendor extensions that can be added to your spec to customize the SDK ergonomics (method names, namespacing resources etc.) and functionality (adding retries, pagination, multiple server support etc)

To get started install the Speakeasy CLI.

In your terminal, run:

```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```
Once you annonate your spec with an extension you will want to run `speakeasy validate` to check the spec for correctness and `speakeasy generate` to recreate the SDK locally. More documentation on OpenAPI extensions [here](https://speakeasyapi.dev/docs/customize-sdks/namespaces/). Here's an example of adding a multiple server support to the spec so that your SDK supports production and sandbox versions of your API. 

```yaml
info:
  title: Example
  version: 0.0.1
servers:
  - url: https://prod.example.com # Used as the default URL by the SDK
    description: Our production environment
    x-speakeasy-server-id: prod
  - url: https://sandbox.example.com
    description: Our sandbox environment
    x-speakeasy-server-id: sandbox
```

Once you're finished iterating and happy with the output push only the latest version of spec into the repo and regenerate the SDK using step 5 above.
