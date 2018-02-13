import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './store/Reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
