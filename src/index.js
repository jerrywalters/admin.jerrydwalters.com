import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { configureStore } from './store'

// db and auth
import { isAuthenticated, requireAuth } from './firebaseAuth'

// load up components for routes
import App from './components/App/App'
import SignIn from './components/SignIn/SignIn'
import FailedAuth from './components/SignIn/FailedAuth'
import Admin from './components/Admin/Admin'
import ConversationListContainer from './components/Conversation/ConversationListContainer'
import ConversationContainer from './components/Conversation/ConversationContainer'

const store = configureStore();
const mountApp = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='signin' />
        <Route path='signin' component={SignIn} onEnter={isAuthenticated} />
        <Route path='authentication-failed' component={FailedAuth} />
        <Route path='admin' component={Admin} onEnter={requireAuth}>
          <IndexRedirect to='conversations' />
          <Route path='conversations' component={ConversationListContainer} onEnter={requireAuth} />
          <Route path='conversations/:id' component={ConversationContainer} onEnter={requireAuth} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  mountApp
);

export default store;
