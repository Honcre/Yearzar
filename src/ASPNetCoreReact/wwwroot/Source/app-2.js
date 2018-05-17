//JS modules are a way to share code using explicit dependencies, webpack make it happen
require('./lib');//explicit dependencies
document.getElementById("fillthis").innerHTML = getText();

//“bundle” all your Javascript modules into a single file, so that you can add a reference to that file alone in your HTML!
//This is where the Webpack tool comes in.

//npm init - y  create a initial package.json file. 
//The package.json file holds metadata information and is used to give information to npm about a project’s(module)dependencies

//npm install webpack --save-dev
//The “ — save - dev” option adds a “dev dependency” to the package.json file, instead of a run - time dependency.
//This indicates that the Webpack package is only useful during development.
//That would make sense, as once we have created the “bundles” as we require, we would use them directly in production.
//The package.json file should look similar to this:



//Now that we have installed Webpack, let us use it to create our first bundle! 
//Note that we have installed Webpack “locally” (meaning within the project folder) and not globally(as we did node).So, 
//we would not be able to simply type “webpack” on the command prompt.