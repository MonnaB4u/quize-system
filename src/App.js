import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import MainHome from './components/MainHome/MainHome';
import Notification from './components/MainHome/Notification/Notification';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';



export const UserContext = createContext();



function App() {

  const [loggedInUsers, setLoggedInUsers] = useState({});

  return (
    <UserContext.Provider value={[loggedInUsers, setLoggedInUsers]}>
    <Router>
      <Switch>
      {/* <PrivateRoute exact path="/"> <MainHome></MainHome>  </PrivateRoute>
      <PrivateRoute exact path="/home"> <MainHome></MainHome>  </PrivateRoute> */}
      <Route exact path="/">  <MainHome></MainHome></Route>
      <Route path="/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/notification"> <Notification></Notification> </Route>
      <Route path="/login"> <Login></Login> </Route>

</Switch>
    </Router>
      </UserContext.Provider>
  );
}

export default App;
