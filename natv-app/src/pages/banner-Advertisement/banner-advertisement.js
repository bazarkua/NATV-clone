import React from 'react';
import { withTranslation } from 'react-i18next';
import styles from '../global-css/Advertisement.module.css';
import Header from '../Header/Header';


class bannerAd extends React.Component {
    render() {
        const { t } = this.props
        return (
            <>
            
                <main className="p-3">
                    <div className="row m-3 p-3 d-flex">
                        <div className={`${styles.textarea} col-lg-7 col-md-6 col-sm-4 col-xs-12`}>
                            <div className={styles.header_textarea}>
                                <h3>ЗАГРУЗИТЕ ГРАФИЧЕСКИЙ ФАЙЛ
                                </h3>
                            </div>
                            <input className="col-md-12 form-control" type="file" />
                            <div className={`row ${styles.preview}`}>
                                <div className="col-5">
                                    <p>Предпросмотр</p>
                                </div>
                                <p className="col-7">У вас есть возможность при несоответствии размеров файла подкорректировать его, перемещая в области «предпросмотра»
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.rules} col-lg-5 col-md-6 col-sm-4 col-xs-12`}>
                        <h4>{t("lineAD.rule-block.rule-block__h4")}</h4>
                                <p>{t("lineAD.rule-block.rule-block__p")}!</p>
                                <hr />
                                <ul type="none">
                                    <li>
                                        {t("lineAD.rule-block.rule-block__li_1")};
                                    </li>
                                    <li>
                                        {t("lineAD.rule-block.rule-block__li_2")};
                                    </li>
                                    <li>
                                        {t("lineAD.rule-block.rule-block__li_3")};
                                    </li>
                                    <li>
                                        {t("lineAD.rule-block.rule-block__li_4")};
                                    </li>
                                    <li>
                                        <a href="https://natv.kg/ru/sposobyoplaty">
                                        {t("lineAD.rule-block.rule-block__payment")}:
                                        </a>
                                    </li>
                                </ul>
                            <span>
                                <img src="https://natv.kg/files/media/1/1326.jpg?1510923094325" alt="" />
                                <img src="https://natv.kg/files/media/1/1327.jpg?1510923098156" alt="" />
                                <img src="https://natv.kg/files/media/1/1328.jpg?1510923101212" alt="#" />
                                <img src="https://natv.kg/files/media/1/1330.jpg?1510923105669" alt="#" />
                                <img src="https://natv.kg/files/media/1/1325.jpg?1510923112765" alt="#" />
                                <img src="https://natv.kg/files/media/1/1329.jpg?1510923117988" alt="#" />
                                <img src="https://natv.kg/files/media/1/1323.jpg?1510923122060" alt="#" />
                                <img src="https://natv.kg/files/%D0%9F%D0%BE%D1%87%D1%82%D0%B0.jpg?1512388633472" alt="#" />
                                <img src="https://natv.kg/files/%D0%AD%D0%BB%D1%81%D0%BE%D0%BC.jpg?1512388642377" alt="#" />
                                <img src="https://natv.kg/files/%D0%BA%D0%B0%D1%81%D1%81%D0%B0-24.jpg?1512388648609" alt="#" />
                                <img src="https://natv.kg/files/%D0%A3%D0%BC%D0%B0%D0%B9.jpg?1518082610652" alt="#" />
                                <img src="https://natv.kg/files/MegaPay1.jpg?1519283158089" alt="#" />
                                <img src="https://natv.kg/files/pay24-logo.png" alt="#" style={{ width: '93px', height: '33px' }} />
                            </span>
                        </div>
                    </div>
                    <div className={`${styles.blockNums} m-3`}>
                            <div className={styles.numsBlock}>
                                <div className={`${styles.number} m-2`}>1</div>
                                <div>
                                    <p>{t("lineAD.rule-block.rule-block__square_1")}</p>
                                </div>
                            </div>
                            <div className={styles.numsBlock}>
                                <div className={styles.number}>2</div>
                                <div>
                                    <p>{t("lineAD.rule-block.rule-block__square_2")}</p>
                                </div>
                            </div>
                            <div className={styles.numsBlock}>
                                <div className={styles.number}>3</div>
                                <div>
                                    <p>{t("lineAD.rule-block.rule-block__square_3")}!</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block_news}>
                            <h1>{t('lineAD.channle-block.channle-block__choose')}</h1>
                            <div className={styles.secondBlock}>
                                <h4 className="col-md-6">{t('lineAD.channle-block.channle-block__choose_channle')}</h4>
                                <h4 className="col-md-4">{t('lineAD.channle-block.channle-block__date')}</h4>
                                <h4 className="col-md-2">{t('lineAD.channle-block.channle-block__cost')}</h4>
                            </div>
                            <hr className={styles.start_hr} />
                            <div className={`${styles.news} p-3`}>
                                <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className={styles.imagePlace}>
                                            <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/REN_TV_logo_2017.svg/200px-REN_TV_logo_2017.svg.png" alt="Ren Tv" />
                                        </div>
                                        <p className={styles.title}>РЕН ТВ</p>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <input type="text" className={`form-control`} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <p><span>0</span>.0 сом</p>
                                    </div>
                                </div>
                            </div>
                            <hr className={styles.end_hr} />
                            <div className={styles.totalSum}>
                                <h2>{t('lineAD.channle-block.channle-block__total')}: <span>0</span> сом</h2>
                            </div>
                        </div>
                        <div className={`${styles.infoClients} p-3 d-flex justify-content-between row`}>
                            <div className="col-md-4">
                                <h4>{t('lineAD.form-block.form-block__num.title')}</h4>
                                <input type="text" className="form-control" placeholder={t('lineAD.form-block.form-block__num.placeholder')} />
                            </div>
                            <div className="col-md-4">
                                <h4>{t('lineAD.form-block.form-block__email.title')}</h4>
                                <input type="email" className="form-control" placeholder={t('lineAD.form-block.form-block__email.placeholder')} />
                            </div>
                            <div className="col-md-4">
                                <h4>{t('lineAD.form-block.form-block__name.title')}</h4>
                                <input type="text" className="form-control" placeholder={t('lineAD.form-block.form-block__name.placeholder')} />
                            </div>
                            <div className={`${styles.instruction} p-3`}>
                                <p>*{t('lineAD.form-block.form-block__rule.title_1')}.
                                </p>
                                <p>*{t('lineAD.form-block.form-block__rule.title_2')}!</p>
                            </div>
                            <div className={`${styles.reCapture} p-3`}>
                                <div className="col-md-4"><p>{t('lineAD.form-block.form-block__button.title')}!
                                </p></div>
                                <div className="col-md-4" />
                                <div className="col-md-4"><button>{t('lineAD.form-block.form-block__button.button-title')}</button></div>
                            </div>
                            <hr />
                        </div>
                </main>

            </>
        )
    }
}

export default withTranslation()(bannerAd);