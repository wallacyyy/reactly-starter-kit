import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux"
import { compose, applyMiddleware, createStore } from 'redux';
import logger from "redux-logger"
import thunk from "redux-thunk"
import reducers from "./reducers"
import Main from "./components/Main" //Must be Captialized
import './styles/app.scss'

let enhancer = compose(
  applyMiddleware(
  	thunk, logger()
  )
)
const store = createStore(
  reducers,
  enhancer,
);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main')
);

