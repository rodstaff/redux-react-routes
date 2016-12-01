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

Please take a look at the package.json file for the script command arguments.  Using these scripts, you can basically do development with the browser or with a background server.  If you wish to run the code using only the browser, use the following command in your terminal inside your working directory:
```
$npm run wbp
```
(webpack will take some seconds to create the bundle.js file) then 
```
$open index.html  
```
Now, if, however, you wish to run the code using a background server, use the following:
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
###Happy coding!

