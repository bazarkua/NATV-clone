import logo from './logo.svg';
import './App.css';
import AdLine from './pages/line-advertisement/line-advertisement.js';
import Header from './pages/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import bannerAd from './pages/banner-Advertisement/banner-advertisement';

// import {BrowserRouter, Route} from "react-router-dom';

function App() {
  return (
    <>
    <div className="backGround">
      <div class="container">
        <BrowserRouter>
        
        <Route exact path='/lineAd' component={AdLine}/>
        <Route exact path='/bannerAd' component={bannerAd}/>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
