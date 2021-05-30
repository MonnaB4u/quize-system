import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import MainHome from './components/MainHome/MainHome';
import Notification from './components/MainHome/Notification/Notification';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginMain from './components/LogIn/LoginMain';


export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <PrivateRoute exact path="/"> <MainHome></MainHome>  </PrivateRoute>
      <PrivateRoute exact path="/home"> <MainHome></MainHome>  </PrivateRoute>
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/notification"> <Notification></Notification> </Route>
      <Route path="/login"> <LoginMain></LoginMain> </Route>
     
</Switch>
    </Router>
      </UserContext.Provider>
  );
}

export default App;