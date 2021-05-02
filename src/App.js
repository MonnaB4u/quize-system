import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import MainHome from './components/MainHome/MainHome';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Route path="/" exact component={MainHome} />
      <Route path="/home" component={MainHome} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/admin"> <Admin></Admin> </Route>
    </Router>
  );
}

export default App;