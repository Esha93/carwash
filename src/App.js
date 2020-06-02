import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'
import Packages from './containers/Packages/Packages';
import Login from './containers/Login/Login';
import Signup from './containers/Login/Signup/Signup';
import ContactData from './containers/ContactData/ContactData';
import './App.css';

class App extends React.Component {
  imgClickHandler = () => {
    this.history.push('/');
  }

  render() {
    return (
      <>
        <Layout logoclicked={this.imgClickHandler}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/packages"  component={Packages} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/cart" exact component={ContactData} />

          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
