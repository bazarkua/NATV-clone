import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <>
                <nav className={styles.topMenu}>
                    <Link to="/lineAd" className={`col-6 ${this.props.status}`}>
                        Размещение строчной рекламы
                    </Link>
                    <Link to="/bannerAd" className={`col-6 ${this.props.status}`}>
                        Размещение баннерной рекламы
                    </Link>
                </nav>
                <header>
                    <div className="row m-3 p-3 d-flex">
                        <div className="col-lg-7 col-md-6 col-sm-4 col-xs-12">
                            <a href="/index.html"><img w src="https://natv.kg/static/user/ima/logo.png" alt="NaTv logo" /></a>
                        </div>
                        <div className={`col-lg-5 col-md-6 col-sm-4 col-xs-12 ${styles.secondblock}`}>
                            <div className={styles.langs}>
                                <div className={styles.activeLang}>ru</div>
                                <div className={styles.NotActiveLang}>kg</div>
                            </div>
                            <div className={styles.showInfo}>
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