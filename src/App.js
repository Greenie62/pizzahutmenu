import React from 'react';
import './App.css';
import BottomOptions from "./components/BottomOptions"
import MainPromo from "./components/MainPromo"
import Deals from "./components/Deals"
import Menu from "./components/Menu"
import SignUp from "./components/SignUp"
import TopMenu from "./components/TopMenu"
import Footer from "./components/Footer"

function App() {
  return (
    <div style={{position:"relative"}} className="App">
<TopMenu/>
<div className='content-column'>
<MainPromo/>
<Deals/>
<Menu/>
<SignUp/>
</div>
<BottomOptions/>
<Footer/>
    </div>
  );
}

export default App;
