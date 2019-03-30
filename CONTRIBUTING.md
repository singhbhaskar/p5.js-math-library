# How to Contribute

This project is still a work in progress, but we encourage everyone to join, propose ideas and help in the development!

## Getting Started

If you want to help develop this library, here are the steps to get started:

1. Fork the repository to your account, and then clone it your computer:
  ```bash
  git clone https://github.com/YOURGITHUBHANDLE/p5.js-math-library.git
  ```

2. Install dependencies:

  ```bash
  cd p5.js-math-library
  npm install
  ```

3. This project is developed using [Webpack](https://webpack.js.org/). Webpack is a module bundler that "bundles" different files into one file. This file is usually called a library.

  Under the `/src` folder there are sub-folders for all `p5.math` modules. Before building the library, you can check to see everything is working:

  - Run this command from the root of the project:
    ```bash
    npm run start
    ```

    That should output something similar to this:

    ```bash
    ℹ ｢wds｣: Project is running at http://localhost:8080/
    ℹ ｢wds｣: webpack output is served from /
    ℹ ｢wds｣: Content not from webpack is served from /Users/nick/code/p5.js-math-library/dist
    ℹ ｢wdm｣: wait until bundle finished: /
    ℹ ｢wdm｣: wait until bundle finished: /p5.math.js
    ⚠ ｢wdm｣: Hash: 1666e6ce7bd9042d127f
    Version: webpack 4.1.1
    Time: 13699ms
    Built at: 3/20/2019 6:44:09 PM
         Asset       Size  Chunks                    Chunk Names
    p5.math.js   1.71 MiB    main  [emitted]  [big]  main
    index.html  180 bytes          [emitted]         
    Entrypoint main [big] = p5.math.js
    [./node_modules/babel-polyfill/lib/index.js] 833 bytes {main} [built]
    [./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js] 23.9 KiB {main} [built]
    [./node_modules/core-js/fn/regexp/escape.js] 108 bytes {main} [built]
    [./node_modules/core-js/shim.js] 8.03 KiB {main} [built]
    [./node_modules/url/url.js] 22.8 KiB {main} [built]
    [./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 7.75 KiB {main} [built]
    [./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.58 KiB {main} [built]
    [./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.05 KiB {main} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {main} [built]
    [./node_modules/webpack/hot/emitter.js] (webpack)/hot/emitter.js 77 bytes {main} [built]
    [./package.json] 2.45 KiB {main} [built]
       [0] multi (webpack)-dev-server/client?http://localhost:8080 babel-polyfill ./src/index.js 52 bytes {main} [built]
    [./src/complex/index.js] 1.67 KiB {main} [built] [1 warning]
    [./src/index.js] 589 bytes {main} [built]
    [./src/matrix/index.js] 643 bytes {main} [built] [1 warning]
        + 345 hidden modules
    ℹ ｢wdm｣: Compiled with warnings.
    ```

    If you see this message, it means the project is actively being built by Webpack's `webpack-dev-server`. Any changes you make to any file in the `/src` folder will automatically rebuild the `p5.math.min.js` library as long as the server continues to run.

4. Develop!

  Create a new folder called `/experiments` in the project's root folder. Create an `index.html` file inside `/experiments` and add the following:

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Test</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js"></script>
    <script src="http://localhost:8080/p5.math.min.js"></script>
  </head>
  <body>

    <script>

    </script>

  </body>
  </html>
  ```

  This is just a simple `html` file that has a reference to the `p5.math` library.

  Next, open the `/src/index.js` file and add this after the last line:

  ```javascript
  console.log('Hello Test Development!');
  ```

  If you now go to `http://localhost:8080/` and open the console, you should see `Hello Test Development!`. As you make changes, you will simply need to reload the `index.html` page to see them.

5. Once you have finished testing, you can build the library. Just close the `webpack-dev-server` and run

  ```bash
  npm run build
  ```

  That should output something very similar to the `webpack-dev-server` from step 3 but you'll notice at the end is this line:

  ```bash
  > webpack --config webpack.prod.babel.js
  > Done in 15.13s.
  ```

  If you see this, it means the library was successfully built and minified.

## Running Unit Tests

  ```bash
  npm run test
  ```

## Additional Resources

- [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
- [How to Write an Open Source JavaScript Library](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)
