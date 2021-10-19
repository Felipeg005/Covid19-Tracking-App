import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Nav from './components/Nav';
import Home from './pages/Home';
import DetailsPage from './pages/Details';

function App() {
  return (
    <Provider store={store}>
      <Router>
        < Nav />
        <Switch>
          <Route path="/Covid19-Tracking-App-React-Redux-Capstone" exact component={Home}></Route>
          <Route path="/Covid19-Tracking-App-React-Redux-Capstone/details" component={DetailsPage}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
