import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Questions } from "./components/questions_page/questions_page.js"
import { Response } from "./components/response_page/responsePage";
import {NewQuestions} from "./components/newQuestions.tsx";
import {NewResponse} from "./components/newResponse";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/questions-page'/>
          <Route exact path="/questions-page" component={ Questions } />
          <Route path="/response-page" component={ Response } />
          <Route path="/new_questions-page" component={ NewQuestions } />
          <Route path="/new_response-page" component={ NewResponse } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
