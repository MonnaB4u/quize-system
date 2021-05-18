import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import MainHome from './components/MainHome/MainHome';
import Notification from './components/MainHome/Notification/Notification';
// import Admin from './components/Admin/Admin';
// import FeedBack from './components/Admin/FeedBack/FeedBack';
// import UploadQuize from './components/Admin/UploadQuize/UploadQuize';
// import FeedBackMain from './components/Admin/FeedBack/FeedBackMain/FeedBackMain';




function App() {
  return (
    <Router>
      <Route path="/" exact component={MainHome} />
      <Route path="/home" component={MainHome} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/notification"> <Notification></Notification> </Route>
      {/* <Route path="/admin"> <Admin></Admin> </Route> */}
      {/* <Route path="/givefeedback"> <FeedBackMain></FeedBackMain> </Route>
      <Route path="/uploadquize"> <UploadQuize></UploadQuize> </Route> */}

    </Router>
  );
}

export default App;