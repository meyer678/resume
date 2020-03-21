import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import Header from './components/header';

// import About
// import Skills
// import Education
// import Experience
// import Footer

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/*
          <About />
          <Skills />
          <Education />
          <Experience />
          <Footer />
        */}
      </div>
    );
  }
}

export default App;