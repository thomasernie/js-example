1.Why npm?
    =>npm is a node package manager
    =>npm is free to use
    You can download all npm public software packages without any registration or logon.

    Command Line Client
               npm includes a CLI (Command Line Client) that can be used to download and install software:

    Windows Example
               C:\>npm install <package>

    Mac OS Example
               >npm install <package>

    Installing npm
               -npm is installed with Node.js

              - This means that you have to install Node.js to get npm installed on your computer.

              - Download Node.js from the official Node.js web site: https://nodejs.org
 2.npm -g
        => -g is a flag signifying that you want to install that particular npm module system wide (globally). 
        => Install it globally if you’re going to run it on the command line. If you need both, then install it in both places, or use npm link. 
        => The -g directive tells npm to install the package in the global shared node_modules folder (usually where node is).             
   save-dev?
        => --save-dev (only used in the development, not in production)

         =>Do not mix --save-dev with collaboration development, if someone cloned your package code from a source version control system like github then NPM will surely install all devDependencies i.e package installed using --save-dev also.

3.why yarn?
    
        => Yarn(Yet Another Resource Negotiator) is a new package manager for node.js.
                 
   =>It is distributed under the BSD license( Berkeley Software Distribution ,it is a free software licenses, imposing minimal restrictions on the use and distribution of covered software). At the time of writing this post, the current Yarn version is 0.17.10.

    =>When considering npm and Yarn, the main reason why developers choose to transition to Yarn is its stability. 
          
   => In the case of npm, when we need to deploy the project on different machines, the versions of installed packages can be different. 
              
    =>that was the reason Yarn appeared in the first place. 
    The first thing to do is to install Yarn globally on your system using npm (Yarn is available as a NPM package itself).
npm install -g yarn

4.how to maintain external dependancy?
   dependencies=>Specify any other modules that a given module (represented by the package) modules which are required at runtime  
 
   => Do I really need this dependency? => the first place we should look for information is in its own documentation.

   =>Use of micro-dependencies => Once we are clear that we need a unit to cover the needs of our project, we have to find the right one.

   =>Market analysis => We must do a little fieldwork and look for alternatives—the npm ecosystem is very large and we can find different
   libraries that practically do the same. But which one to choose?

   =>Use of preventive tools..=> Visual Studio Code that allows us to visualize in a very easy and fast way how many vulnerabilities our software has from the file package.json, and even from each file that contains a library import.
   Currently, in a Node.js project we can inject dependencies through require and import, adding them as a whole or partially, if allowed

5.How to upgrade to new express js?
  express.js=>Creates an Express application. The express() function is a top-level function exported by the express module.

                   const express = require('express')
                   const app = express()
            => It is a back end web application framework for Node.js, released as free and open-source software 
            
            =>It is designed for building web applications and APIs.
   upgrade new express js =>   
          update =>includes bug fixes, and other small improvements, while a software 
          upgrade =>changes the version of a software.
     
      It is used in designing and building web applications quickly and easily. using express we can develop API npm install -g express -> install express framework globally npm install express --save -> install express in node_module directory and create a directory named express inside the node_module npm install express --no-save -> To install Express temporarily and not add it to the dependencies list.

    Example: const express = require('express); const app = express(); const port = 3000;

       require=>It allows to include modules in our app;
         We can include inbuilt modules and local modules;

        require('express) => The require function that was passed 'express' returns module.export from express module;

        app = express()   => The app object conventionaly denotes the express application;
                     which is created it by calling the top-level express() function.
express(update): npm install express@latest -g => It will update the excisting express globally;

6. How to use old express?

express(Old version):  npm install express@4.16.1 => It will change the current version to the specified old version; * Lowest version won't work (ex: npm install express@2.1.1).