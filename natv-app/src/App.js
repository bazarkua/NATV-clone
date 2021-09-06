import logo from './logo.svg';
import './App.css';
import AdLine from './pages/line-advertisement/line-advertisement.js';
import Header from './pages/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import bannerAd from './pages/banner-Advertisement/banner-advertisement';
import FooterBlock from './pages/footer/footer';

// import {BrowserRouter, Route} from "react-router-dom';

function App() {
  return (
    <>
    <div className="backGround">
      <div class="container">
        {/* <AdLine/> */}
        
        <BrowserRouter>
        <Header/>
        <Route exact path='/lineAd' component={AdLine}/>
        <Route exact path='/bannerAd' component={bannerAd}/>
        <FooterBlock/>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
