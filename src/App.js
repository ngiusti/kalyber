import React from 'react';
import './styles/base.scss'
import './App.css';
import Nav from './components/nav/nav'
import Header from './components/header/header'
import About from './sections/about/about'
import Work from './sections/work/work'
import Contact from './sections/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
        <Header/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
