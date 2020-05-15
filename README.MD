## Clone
Open VsCode
Open Terminal (Ctrl + `)
Create Dev/Learn Folder and Cd to that folder
    mkdir dev && cd dev 
    mkdir learn && cd learn


## Repoistory action
Clone code: https://bitbucket.org/fr8in/js-example/src/master/
git clone https://jayendranp@bitbucket.org/fr8in/js-example.git

Master -> dev
Master -> prod

1) Create new local branch from master
    a) clink on branch name
2) Commit local branch
3) Push local branch to remote
4) Everything fine - Lets merge to dev
5) Create pull request in prod


## Yarn , NPM (Node Package Manager)
Yarn - Package manager
Most prorams uses reusabale packages - express, loadash

1) Package.json 
    which package what version dev or prod dependency
    - Node_modules will have all packages
    - We do not commit node_modules
    - Yarn -> Yarn reads package.json and downloads all dependency and links thos dependecny

Open that folder js-example in vs code
Install: Node , Yarn
Then run
1) yarn
2) node index.js / array.js / functions.js