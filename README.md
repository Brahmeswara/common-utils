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


## Building Local

`npm run build:dev`  

## Publishing Package

`npm publish`

**Note: ** I used AWS CodeArtifact to publish npm packages which are only available to team at docudata. All of the source code is made available if someone wants to use. 




