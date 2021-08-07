1) Why npm?
=> npm is a node package manager for the Node JavaScript platform. 
   It installs/downloads a package and it's dependencies.
   It is used to publish, discover, install, and develop node programs.
   "npm install -g"               -> used to install the latest version of npm and its dependencies globally.
   "npm init"                  -> to initailize a javascript or node js project.
   "npm scripts"               -> to display the commands used.
   "package.json"              -> it holds the important data about the particular project before publishing.
   ".json"                     -> stores simple data structures and objects in JavaScript Object Notation (JSON) format and send it to server
   "package-lock.json"         -> default packages
   "npm install --production"  -> installing npm for production environment. 
   "npm install --development" -> installing npm for developing environment.
   "npm ci"                    -> it is used install the packages which is similar to npm instal / ci - continuous integration
   "npm audit"                 -> gives information to the user if there is any updates needed.
   "npm audit fix"             -> helps in updating the affected vulnerabilities automatically.
   "npm publish" / "npm ls"    -> to publish the packages installed 
   "npm list -g"               -> to know where the npm is installed globally in the system
   npm dependencies are the other packaeges which helps to work the existing pakages.

2) why npm -g , save-dev?
=> "npm -g" -> is used in installing a flag globally.
   other ways to install -  npm install <packagename> , npm install <packagename> --save , npm install <package_name> --save-dev
       "npm install --save [package-name]"      -> installs the package and updates the dependencies in the package.json file/existing file. 
       "npm install --save-dev [package-name]"  -> installs the package and updates the dependencies in the development environment       (devdependencies).

3) Why Yarn?
=> Yarn is also considered as a package manager for the code. 
   It allows us to use the code developed by other developers worldwide in our code.
   "npm install -g yarn"      -> helps to install the yarn package globally.
   "cd. ."                    -> helps in moving to the parent directory
   "yarn set version latest"  -> gets updated to the latest version of yarn release.
   "yarn set version from sources" / "yarn set version from sources --branch 121" -> used to fetch the latest commits made to yarn from git
   "yarn help"                -> displays list of commands used in yarn
   "yarn init"                -> initialising yarn to a particular folder/file.
   "yarn add"                 -> adding packages to the project
   "yarn up"                  -> updating a package/dependencies.
   "yarn remove"              -> removes a particular package installed.

4) Express js? How to upgrade to new express js?
=> Express is a server side or back end web framework for Node.js - A framework acts like a library(pre-defined modules a program can use),   that provides a base for an application.
   It responds to http requests.

   It is used in designing and building web applications quickly and easily.
   using express we can develop API
   npm install -g express             -> install express framework globally
   npm install express --save         -> install express in node_module directory and create a directory named express inside the node_module
   npm install express --no-save      -> To install Express temporarily and not add it to the dependencies list.
   npx kill-port 8080                 -> to kill the process currently using a port on localhost
   npm install cookie-parser --save   -> it is node.js middleware for handling JSON,Raw,text and url form of data.
   middleware                         -> it is a software which acts as a bridge between a Operating system and a network/web applications.


5) How to use old express?
=> To use older express versions, use the command npm install express -d (-d because the package of the installed items will be saved in dev dependencies)
   To install a specific version of express, use the command npm install express@2.x.x - 2.x.x is the specified version to be installed.


6) How to maintain external dependencies?
=> External dependencies are the updations made to the current dependencies. 
   when we download or update to the latest versions of express or any other packages, the updated dependencies will also add on to the current dependencies.