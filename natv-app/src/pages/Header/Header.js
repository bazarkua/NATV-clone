import React from 'react';
import i18n from "../../i18n";
import './Header.css';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.handlerChangeFirst = this.handlerChangeFirst.bind(this);
        this.handlerChangeSecond = this.handlerChangeSecond.bind(this);
        this.changeLanguagess = this.changeLanguagess.bind(this);
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
    changeLanguagess(ln){
        return () => {
            i18n.changeLanguage(ln);
        }
        
    }
    render() {
        const {t} = this.props
        return (
            <>
                <nav className="topMenu">
                    <Link to="/lineAd" className={`col-6 ${this.state.status}`} onClick={this.handlerChangeFirst}>
                        {t('lineAD.header-block.header-block__link_1')}
                    </Link>
                    <Link to="/bannerAd" className={`col-6 ${this.state.status2}`} onClick={this.handlerChangeSecond}>
                        {t('lineAD.header-block.header-block__link_2')}
                    </Link>
                </nav>
                <header>
                    <div className="row m-3 p-3 d-flex">
                        <div className="col-lg-7 col-md-6 col-sm-4 col-xs-12">
                            <a href="/index.html"><img w src="https://natv.kg/static/user/ima/logo.png" alt="NaTv logo" /></a>
                        </div>
                        <div className={`col-lg-5 col-md-6 col-sm-4 col-xs-12 secondblock`}>
                            <div className="langs">
                                <button className="activeLang" onClick={this.changeLanguagess("ru")}>ru</button>
                                <button className="NotActiveLang" onClick={this.changeLanguagess("kg")}>kg</button>
                            </div>
                            <div className="showInfo">
                                <h1>{t('lineAD.header-block.header-block__info_block')}</h1>
                            </div>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}

export default withTranslation()(Header);