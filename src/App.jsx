import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import AddNote from "./containers/AddNote";
import NoteList from "./containers/NoteList";
import NoteDetails from "./containers/NoteDetails";
import ChangeLanguage from "./components/ChangeLanguage";
import "./index.scss";

const App = () => (
  <Router>
    <section className="hero is-widescreen is-fullheight has-background-light">
      <div className="hero-header">
        <div className="columns is-mobile is-marginless">
          <div className="column left">
            <figure className="image">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: 210, height: 120 }}
                />
              </Link>
            </figure>
          </div>
          <div className="column right">
            <ChangeLanguage/>
          </div>
        </div>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">Notes App</h1>
          <Switch>
            <Route exact path="/">
              <AddNote />
              <NoteList />
            </Route>
            <Route
              path="/note/:id"
              render={props => <NoteDetails {...props} />}
            />
          </Switch>
        </div>
      </div>
    </section>
  </Router>
);

export default App;
