# Gulp Injector
## Compiles HTML and CSS into a single file for upload to Demandware

The magic is happening in `gulpfile.js` where the relevant task is `inject`.

The task is part of the larger Yeoman generator, `webapp`. This generator scaffolds the development environment I use daily. It does the SASS compilation, linting, live reloading and a lot of other tasks without hassle.

For details surrounding Yeoman look to [Yeoman.io](https://yeoman.io/).



### Dependencies
After installing yo, the majority of dependencies are installed when running `npm install -g generator-webapp`.

One key, additional dependency is `gulp-inject` which can be installed with `npm install --save-dev gulp-inject`.

One last requirement is the existance of target.html. Add this file from this repo, making sure to include the comments which specify the targets where the code will be injected.

*Todo: Customize the generator for this personal use specifically.*



### Use
- With the dependencies in place, replace the generator's gulpfile with the one in this repo.
- In the gulpfile Look to `./app/SourceHtmlToPullFrom.html` on line 133. Replace this file name with your working file's name.
- To complile the HTML and CSS, run the command `gulp inject`. All the code will be inserted in target.html.

One thing to note: the CSS sourcemap specified at the bottom of `.tmp/styles/main.css` is stripped out with this task. inject simply stripps out the last line in the CSS file before inserting it into target.html.