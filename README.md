# DevOps Presentation for 5 Jul - mid_backend package
## Using Dixant's respository of codes and packaging them and publish it to npm registry
## Steps for setting it up
- Register an account at https://www.npmjs.com/
- Generate a token, choose read and publish
- Copy the token and go to Github settings - Secrets
- Name it say as NPM_AUTH_TOKEN
- You will need this code for setting up the workflow
- Go to Actions, set up a new workflow
- I chose a suggested "Publish Node.js Package"
- Deleted npm test because in package.json my script was "test": "echo \"Error: no test specified\" && exit 1", which will disrupt the workflow
- Input NODE_AUTH_TOKEN: ${{ secrets.NPM_AUTH_TOKEN }} in the workflow
- on:  push:    paths:     'package.json' 
### A workflow is triggered on change to the file 'package.json'
### Once I commit a change, it will trigger a workflow to build and then publish
