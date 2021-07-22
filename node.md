1. why NPM?
     NPM(Node package manager).It is a tool used by javascript developers.this is a open source package
     it contains js libraries and dependencies.we can move ours or other application to other computer.
     we need not send all the dependencies but we can mention dependencies to a file called package.json
     To create package.json in command line type = npm 'init' 
     it will add a file package.json 
     when we open that file
     {
  "name": "test",
  "version": "1.0.0",
  "description": "studying npm",
  "main": "sum1.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fr8-in/js-example.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/fr8-in/js-example/issues"
  },
  "homepage": "https://github.com/fr8-in/js-example#readme",
  "dependencies": {
    "nodemon": "^2.0.12"
  },
  "devDependencies": {}
}
   

   like this we can install packages in the command line itsself.


    # DEPENDENCIES:
          DEPENDENCIES is a piece of a software which we create or a module that is given 
          in package.json.it is a third party package . in simple words ,whatever packages that we are 
          downloading is dependencies. it is that we are depend on that package to develop ours.


Why npm -g?
          npm -g (global).it is a command used in command line to install the current package as a global package .so that we can use it any time and we no need to install the package every time .

what is -save--dev?
          # save and save dev command is used to download different dependencies.it will download and install
          from this npm servers.when we normally install the packages it manually installs as dependency.
          if we specifically add  -D or save dev ,it is installed as a developmentdependencies(dev dependencies).

          # these dev dependencies only has the packages that are not needed for the production.they are for testing packages.

 what is yarn why we are using it?
          # YARN(yet another resourse negotiator) is also a package manager.npm is needed to install yarn where npm is installed with node automatically.it was developed by facebook and now its a open source code.while it was developed its main intension was to fix performance and security.yarn is literally fast compared to npm             
                           