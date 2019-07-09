import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter, Route } from 'react-router-dom'

import reducers from './reducers';

import Login from './components/Login'
import Content from './components/Content'

// Apply Thunk middleware
const middleware = applyMiddleware(thunk);
// Create enhancer
// const enhancer = compose(middleware, (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// Create store
const store = createStore(reducers, middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/content/" component={Content} />
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App
