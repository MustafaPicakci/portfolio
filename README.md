# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

Clone this repo and edit these : 
_______________________________________________________________________________
* portfolio/deploy.sh

    git push -f {YOUR REPO  ADDRESS} master:gh-pages

* portfolio/.env 

    VUE_APP_USERNAME={YOUR GITHUB USERNAME}
This variable is used to present your projects in your github account to visitors.

* portfolio/src/utils/data
    You should replace the contents of the 4 javascript files under this directory with your own information.

Tip:
If you have windows operating system, you can run npm run deploy script with git bash.

cd -
### Compiles and minifies for production
```
npm run deploy


