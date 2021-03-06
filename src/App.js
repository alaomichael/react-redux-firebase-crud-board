import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePost from "./components/posts/CreatePost";
import UpdatePost from "./components/posts/UpdatePost";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

/**
 *
 * The order in <Switch> is super important if a path has "/post/:id" places
 * below than "/post" or "/", then it will not work
 *
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/post" component={Dashboard} />
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/create" component={CreatePost} />
            <Route path="/update/:id" component={UpdatePost} />
          </Switch>
        <Alert stack={{ limit: 3 }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
