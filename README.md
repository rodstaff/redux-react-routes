#redux-react-routes

The purpose of this simple app is to understand how Redux builds a framework around React so that as the size and intricacy of the app increases, it becomes much easier to manage and debug the code by managing a single source of state called a 'store'.  Please note that this app is not intended as a step-by-step tutorial, rather as a template.  Although looking very innocently simple, this app can actually be used as a building block to create much bigger apps with more complexity!  This is my personal purpose.  For the sake of brevity, moreover, I have only chosen certain topics that most occupied me when I building this demo app hoping that the reader may get something out of it.

##A.  Requirements

###A1.  Basic Knowledge Required
React.js, Node.js, functional programming in JavaScript, ES5, Webpack, CSS and html.  

###A2.  Development Environment 
NodeJS Package Manager (npm) 

##B.  Guide to understanding how Redux manages complexity and how React fits with it.

###B1.  Redux Basic [One-Way Loop] Structure  
Store -> Actions -> Components -> Containers -> Reducers -> Store -> ...  This dynamic framework is actually reflected by how the folders and files in the app directory are organized and prevents 'spaghetti code' from occurring when the complexity and size of the app increases.

###B2.  Redux States
In the React-Redux combination, Redux completely takes the management of states from React.  In other words, the former stores and updates all ‘states’ but passes them to the latter as ‘props’.

###B3.  Changes in states 
All states are stored in one single consolidated store and changes are only initiated via Actions (JavaScript functions) with the use of Redux-React ‘dispatches’ and updated by via Reducers (also JavaScript functions).

###B4.  React uses a virtual DOM
Only those DOMs that are updated are rendered speeding up loading times.

The advantage of the Redux-React combination only manifests itself when applications reach a certain level of complexity and size; i.e. when there is a strong tendency for ‘spaghetti code’ to creep in and slowing down loading times respectively.  In other words, by managing changes in states from a single store, tracking where the changes and which states are effected become so much easier.  In addition, with the use of React virtual DOMs, only those states that change are updated without rerendering the whole DOM!

##C. Package Json 

###C1.  Dependencies

I have included a considerable number of dependencies in this app as a working template and so you may remove some of them as you see fit.  You might as well leave some of them as they are since their presence should not affect the code as long as they are not imported inside the app.  In any case, to download the dependencies, run
```
$npm install
```
and all the dependencies in the package.json file will be downloaded inside the ‘node_modules’ folder which will automatically be created by npm.

###C2.  Scripts: “wbp” and “dev”

If you wish to run the code using only the browser, use the following command in your terminal inside your working directory:
```
$npm run wbp
```
(webpack will take some seconds to complete execution) then 
```
$open ./src/js/bundle.js  
```
this route is declared inside the webpack.config.js file

If you wish to run the code using a background server, use the following:
```
$npm run dev
```
then in your browser, type
```
localhost: 8089
```
you can change the port number inside webpack.config.js

##D.  Webpack.config.js

###D1.  Entry File

If you choose ‘./dev/js’, the entry file defaults to ‘/dev/js/index.js’ and the code will execute without the routing.  Now, if you choose ‘./routes/‘, the entry file defaults to ‘./routes/index.js’ and the code will execute the react-redux app with routing.  Here you will see how I combined two separate codes into one!

###D2.  Output File

Take some careful attention how webpack.config.js is written and configured; otherwise, this will cause you hours or even days of head-scratching trying to figure out why your code wouldn’t work.  For example, if you decide to use your browser to run the code, the output path and filename will determine where the compiled bundle.js file will go.  This is where you will have to open the browser from.  Now, if you choose to run a server in the background, the output file will be found after ‘localhost: <portnumber>/…bundle.js’ in your browser window.  In other words, be very mindful of your folder or directory tree structure so that imports, as another example, are actually pointing to the right places.  For reference, please see a portion of webpack.config.js below:
```
module.exports = {
  entry: './dev/js', 
//  entry: './routes', 
  output: {
    path: 'src/js',
    filename: 'bundle.js'  
  },
  devServer: {
    inline: true,   
    publicPath: '/',    
    port: 8089
  },
  ```
##E.  This app uses three tutorials below as reference

1) [Beginner's Guide to React Router by Nader Dabit]
    (https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.kqiojxwpe)

2) [React JS/Redux Tutorial (#1-#11) by Bucky Roberts]
    (https://www.youtube.com/watch?v=DiLVAXlVYR0)

3) ["react-router-redux" plugin by Tim Dorr]
    (https://github.com/reactjs/react-router-redux)

4) [Deploying your React app to Heroku with Webpack](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html)

##F.  Notes on the tutorials above
Any tutorial requires some basic experience in coding so a complete beginner may find some degree of frustration in making the code execute properly the first time around even by diligently following the steps provided.  That is, many free online tutorial creators assume some “basic knowledge” and therefore may ignore some steps or assume that their readers will have understood the folder structure, how certain commands work or will have done some further reading on the development environment, among others.  This is oftentimes an inevitable consequence as each author is approaching the subject from a certain angle and ignore some steps to—-believe it or not—-actually simplify his/her presentation!  Now, you may find your code not working for so many reasons some of which are implied above.  However, with some patience, persistence and inspiration, make it a priority to make your code work first.  In other words, making sure that the development environment is working and the code is running as it is suppose to and that will most certainly make it much easier to understand how React fits in the Redux framework.  

You may alternatively want to begin working on a tutorial that already has the React, Redux, and Routing parts already combined.  However, it is probably best to do a simple React tutorial at first then proceed to do the ones listed above.  This will enable you to see each individual parts separately and how they operate when combined.  Feel free to clone this repository if you wish.  Note that cloning instructions will be omitted here.  You can easily google that yourself...

##G.  Acknowledgement
Special thanks to Karim Butt of GlossGenius for inspiring me to take the first-step in this React-Redux journey and also for his feedback.

###Happy coding!

