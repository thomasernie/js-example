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
4.
      