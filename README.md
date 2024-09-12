# Template SDK Monorepo

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>   
</div>

## How to use this repository

> :warning: This is an advanced setup process. For most cases we reccomend using the single sdk per github repository approach. Please see this [repo](https://github.com/speakeasy-sdks/template-sdk) for the corresponding template.

**👀** This template repository is designed to bootstrap a monorepo of SDKs following this [guide](https://github.com/speakeasy-sdks/template-sdk-monorepo?tab=readme-ov-file) and using Github's repository clone feature. Once this repository is setup it will automatically keep your SDKs up to date and published to a package manager.

## What is a SDK monorepo ?

A SDK monorepo is a single github repository that houses multiple SDKs. Each SDK corresponds to a single OpenAPI specification. This is a style of SDK popularised by AWS that enables discovery of all available SDKs in one repo but requires download of individual SDKs corresponding to API/business groups.

Each SDK is housed in its own subfolders and have independent github workflows that manage re-generation and release of code. In this example we have two SDKs: Accounting and Lending that can be found in their own sub folders. The general structure is as follows:

```yaml
.github/workflows/ #This is standards github notation for storing workflow files on Github
 - sdk_generation.yaml # This controls execution of the speakeasy generation workflow file. Automatically created by speakeasy
.speakeasy/workflows
 - workflow.yaml # This is the speakeasy workflow file that indicates what sources to use and targets to generate
 accounting # This folder houses the accounting SDK
 - gen.yaml # Generation config for the accounting SDK
 lending # This folder houses the lending SDK
 - gen.yaml # Generation config for the lending SDK
```

This structure can be extrapoloated to N number of SDKs.

### Creating a Monorepo of SDKs

To create this repo for yourself you can either clone and fork the repository or follow the interactive commands with `speakeasy quickstart`, `speakeasy configure sources` and `speaekasy configure targets` to achieve a similar outcome.

Once you have the repo setup you run `speakeasy run` to (re)generate the SDK: 

![CleanShot 2024-04-01 at 09 34 13@2x](https://github.com/speakeasy-sdks/template-sdk-monorepo/assets/68016351/a1c59329-77f7-4fbd-b928-f2ab89d6b37a)

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

Once you're finished iterating and happy with the output push only the latest version of spec into the repo and regenerate the SDK using `speakeasy run`.
