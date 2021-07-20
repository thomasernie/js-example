1) Why npm?
=> npm is a node package manager for the Node JavaScript platform. 
   It installs/downloads a package and it's dependencies.
   It is used to publish, discover, install, and develop node programs.
   "npm install -g"               -> used to install the latest version of npm and its dependencies globally.
   "npm init"                  -> to initailize a javascript or node js project.
   "npm scripts"               -> to display the commands used.
   "package.json"              -> it holds the important data about the particular project before publishing.
   ".json"                     -> stores simple data structures and objects in JavaScript Object Notation (JSON) format
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
       "npm install --save [package-name]"      -> installs the package and updates the dependencies in the package.json file  
       "npm install --save-dev [package-name]"  -> installs the package and updates the dependencies in the development environment       (devdependencies)
       "npm install --save [package-name]"      -> installs the package but does not update the dependencies.

3) Why Yarn?
=> 