# React / Webpack / Redux / Heroku Starter Kit 

Originaly adopted from Leonardo Couto: http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html 

*Using React 15.4.2, Express 4.13.4, Redux 5.0.3, and Webpack 2.2.1*

Heroku deployable app for React/Redux/Webpack web apps.

Running on development mode:
```
npm start
```

Running to production mode:
```
npm run build
npm start
```

<strong>Before you deploy, make sure you generated your bundle through</strong> `npm run build`.

*If sass is not updating remove the "bundle.js" in the "public" folder and 
```
npm run build
npm start
```
