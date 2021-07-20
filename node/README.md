npm :
    * npm is a Package Manager for node JS;
    * npm includes Command Line Client, it is used to download and install packages;
    * All npm are defined in files called 'package.json';
    * Package.json contents are written in JSON format.

 -g : 
    * -g flag signifying to install npm module system wide(globally);
    * Without -g , the module would be install locally inside the current directory.

Dependencies: 
    * When a piece of software relies on another one;
    * Program module relies on the other module.
    * (In our main.js module we need to use express to run it,so we include 'express module'. In this our main.js module is depended on 'express module' ).

Dev-Dependencies : 
    * Dev-Dependencies are modules which required while developing, dependencies are required at run time;
    * Whie=le deploying application dependencies has to be installed or app will not work;
    * We can have both Dependencies and Dev-Dependencies in our app;
    * --save will add the package in dependencies and --save-dev add the package in dev-dependencies.

Example: 
    const express = require('express);
    const app = express();
    const port = 3000;

require:
    * It allows to include modules in our app;
    * We can include inbuilt modules and local modules;

    require('express) => The require function that was passed 'express' returns module.export from express module;

    app = express()   => The app object conventionaly denotes the express application;
                         which is created it by calling the top-level express() function.


express(update): 
    * npm install express@latest -g 
    * It will update the excisting express gloally;

express(Old version):
    * npm install express@4.16.1
    * It will  change the current version to the specified old version;
    * Lowest version won't work (ex: npm install express@2.1.1).
 
Yarn:
    * Yarn is a package manager for our code;
    *