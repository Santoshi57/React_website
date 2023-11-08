import React, {Component} from 'react';
import PageWrapper from './Components/PageWrapper';
import Home from './Components/Pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import Home from './Components/Pages/Home';
import About from './Components/Pages/Ab out';


class App extends Component{
render() {
  return (
    <Router>
      <PageWrapper>

         <Route
           path="/"
           component={Home}
         />


         <Route
           path="/about"
          component={About}
     />




    </PageWrapper>
    </Router>
    
    
  );
}
}

export default App;
