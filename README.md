# Getting Started with Phoenix-React

Welcome to the ReactJS version of the original Phoenix theme. This document will guide you on how the Phoenix-React theme is organized, the basics of customization, and how to compile it from the source code if needed.

## Running in Local Environment

This project is scaffolded using Create React App.

- Install Node.js if you do not already have it installed on your machine.
- Open the “phoenix-react-{version}” directory with your cmd or terminal and run npm i
- This command will download all the necessary dependencies for phoenix in the node_modules directory.
- Run npm start. A local web server will start at http://localhost:3000.

## Creating a Production Build

After you've done your customization and are ready to build, follow these steps:

- Edit homepage in your package.json file to change asset files relative paths. For more information, visit Create React App Doc.
- Then Run npm run build command in your project directory to make the Production build.

This will create an optimized production build by compiling, merging, and minifying all the source files as necessary and will put them in the build/ folder.

To run the production build locally, run the following commands:

```shell
 npm install -g serve
 serve -s build
```

### Design File

Get the figma design file here:
[https://www.figma.com/file/iACQcwBein0huanVBqFaAj/Phoenix-React-v1.0.0-(Distributed)](<https://www.figma.com/file/iACQcwBein0huanVBqFaAj/Phoenix-React-v1.0.0-(Distributed)
