#redux-turtles-routes

A.  This is an app that combines and modifies three tutorials:

1) Beginner's Guide to React Router by Nader Dabit
     link:  https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.kqiojxwpe
2) React JS/Redux Tutorial (#1-#11) by Bucky Roberts
     link: youtube = https://www.youtube.com/watch?v=DiLVAXlVYR0
3) "react-router-redux" plugin by Tim Dorr
     link:  https://github.com/reactjs/react-router-redux

B.  Requirements

B1.  Basic knowledge of React.js, Node.js, functional programming in JavaScript, ES5, Webpack, CSS and html.  

B2.  Development Environment:  NodeJS Package Manager (npm) 

An important note:  The three tutorials written above require some basic experience in coding so some total beginners may find some degree of frustration in making the code execute properly the first time around even by diligently following the steps provided.  That is, many free online tutorial creators assume some “basic knowledge” and therefore ignore some steps or assume that their readers will have understood the folder structure, how certain commands work or will have done some further reading on the development environment, among others.  This is oftentimes an inevitable consequence as each author is approaching the subject from a certain angle and ignore some steps to—-believe it or not—-actually simplify his/her presentation!  Now, I am not an expert in ReactJS nor Redux; however, with some patience and inspiration, I have managed to make the code work while attempting to understand how Redux manages React states via a consolidated ‘store’ from where React renders views via Redux reducers.  

You may want to work on a tutorial that already has the React, Redux, and Routing parts already combined.  My approach however, will enable you to see each individual parts separately and how they operate when combined.  Feel free to clone this repository if you wish.
Note that cloning instructions will be omitted here.  You can easily google that…

C.  Guide to understanding how Redux manages complexity and how React fits with it.

C1.  Redux Basic [Cyclical] Structure:  Store, Actions, Components, Containers, Reducers, Store, ...  You will also see this structure on how the folders in the app directory are organized.

C2.  Redux manages ‘states’ and passes these states to React as ‘props’.  In other words, in the React-Redux combination, Redux completely removes the management of states from React!

C3.  Changes in states:  All states are stored in one single consolidated store and changes are only initiated via Actions (JavaScript functions) with the use of Redux-React ‘dispatches’ and updated by via Reducers (also JavaScript functions).

C4.  React uses a virtual DOM, and only those DOMs that are updated are rendered speeding up loading times.

The advantage of the Redux-React combination only manifests itself when applications reach a certain level of complexity and size; i.e. when there is a strong tendency for ‘spaghetti code’ to creep in and slowing down loading times respectively.  In other words, by managing changes in states from a single ‘store’, tracking where the changes and which states are effected become so much easier.  In addition, with the use of React virtual DOMs, only those states that change are updated without rerendering the whole DOM!

D. Package Json 

D1.  Dependencies

I have included a considerable number of dependencies in this app as a working template and so you may remove some of them as you see fit.  You might as well leave some of them as they are since their presence should not affect the code as long as they are not imported inside the app.  In any case, to download the dependencies, run

‘$npm install’

and all the dependencies in the package.json file will be downloaded inside the ‘node_modules’ folder which will automatically be created by npm.

D2.  Scripts: “wbp”, “go” and “dev”

If you wish to run the code using only the browser, use the following command in your terminal inside your working directory:

‘$npm run wbp'

(webpack will take some seconds to complete execution) then 

‘$open src/js/bundle.js’  <== this route is declared inside the webpack.config.js file

If you wish to run the code using a background server, use the following:

‘$npm run dev’

then in your browser, type

‘localhost: 8089’  <== you can change the port number inside webpack.config.js

E.  Webpack.config.js

E1.  Entry File

If you choose ‘./dev/js’, the entry file defaults to ‘/dev/js/index.js’, the code will execute without the routing.  Now, if you choose ‘./routes/‘, the entry file defaults to ‘./routes/index.js’ the code will execute the react-redux app with routing.  Here you will see how I combined two separate codes from two different authors into one!

E2.  Output File

Take some careful attention how webpack.config.js is written and configured; otherwise, this will cause you hours or even days of head-scratching trying to figure out why your code wouldn’t work.  For example, if you decide to use your browser to run the code, the output path and filename will determine where the compiled bundle.js file will go.  This is where you will have to open the browser from.  Now, if you choose to run a server in the background, the output file will be found after ‘localhost: portnumber/…bundle.js’ in your browser window.  In other words, be very mindful of your folder or directory tree structure so imports, as another example, are actually pointing to the right places.

Happy coding!



