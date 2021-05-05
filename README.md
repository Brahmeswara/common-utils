# common-utils
This repo contains the common uitilies of the docudata appliction as below


## logger
This is lightweight and simple logger based on console.log. 

TO DO: extend this to provide a remote logging capability
    
## lambda-wrapper
This utility code used middy as middleware engine to manage the boiler plate code as part 
of the api development work. This makes the code clean and re-usable.

This is packaged as npm package. Package name is @docudata/common-utils

Note, Package name is @docudata/commonutils and is not deployed in npm repo instead this is deployed in AWS codeArtifact. You have access to git code repo if you need to look at the code.

## Development Setup

This package depends on the [common-libs repo] (https://github.com/Brahmeswara/common-libs.git)
and requires one time dev setip.

```
1. cd <base directory>
2. npm clone -b main https://github.com/Brahmeswara/common-libs.git
3. cd common-libs
4. npm run build-dev
5. npm link
6. cd .. 
7. git clone -b main https://github.com/Brahmeswara/common-utils.git
8. cd common-utils
9. npm link common-libs
```

## Building Local

`npm run build:dev`  

## Publishing Package

`npm publish`

**Note: ** I used AWS CodeArtifact to publish npm packages which are only available to team at docudata. All of the source code is made available if someone wants to use. 




