import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App () {
  return (
    <div>
      <Header />
        <h1>Welcome to my portfolio</h1>
       <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
