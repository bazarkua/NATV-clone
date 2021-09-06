import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.handlerChangeFirst = this.handlerChangeFirst.bind(this);
        this.handlerChangeSecond = this.handlerChangeSecond.bind(this);
        this.state = {
            status: 'active',
            status2: 'notActive'
        }
    }

    handlerChangeFirst(){
        this.setState({status: 'active'});
        this.setState({status2: 'notActive'});
    }
    handlerChangeSecond(){
        this.setState({status: 'notActive'});
        this.setState({status2: 'active'});
    }
    render() {
        return (
            <>
                <nav className="topMenu">
                    <Link to="/lineAd" className={`col-6 ${this.state.status}`} onClick={this.handlerChangeFirst}>
                        Размещение строчной рекламы
                    </Link>
                    <Link to="/bannerAd" className={`col-6 ${this.state.status2}`} onClick={this.handlerChangeSecond}>
                        Размещение баннерной рекламы
                    </Link>
                </nav>
                <header>
                    <div className="row m-3 p-3 d-flex">
                        <div className="col-lg-7 col-md-6 col-sm-4 col-xs-12">
                            <a href="/index.html"><img w src="https://natv.kg/static/user/ima/logo.png" alt="NaTv logo" /></a>
                        </div>
                        <div className={`col-lg-5 col-md-6 col-sm-4 col-xs-12 secondblock`}>
                            <div className="langs">
                                <div className="activeLang">ru</div>
                                <div className="NotActiveLang">kg</div>
                            </div>
                            <div className="showInfo">
                                <h1>РАЗМЕЩЕНИЕ БЕГУЩЕЙ СТРОКИ НА ТЕЛЕВИЗИОННЫХ КАНАЛАХ КЫРГЫЗСТАНА</h1>
                            </div>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}

export default Header;