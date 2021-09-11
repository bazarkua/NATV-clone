import React from 'react';
import { withTranslation } from 'react-i18next';

class footerBlock extends React.Component {
    render () {
        const { t } = this.props
        return(
            <>
                <footer>
                        <div className="row">
                            <div className="col-4" style={{ width: '407px' }}>
                                <p>{t('lineAD.footer-block.title')}</p>
                                <a href="index.html">
                                    <span id="img">
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
                                        <img src="https://natv.kg/files/60vis.gif?1530269634436" alt="#" />
                                        <img src="https://natv.kg/files/master60.gif?1530269641348" alt="#" />
                                        <img src="https://natv.kg/files/pay24-logo.png" alt="#" style={{ width: '93px', height: '33px' }} />
                                    </span>
                                </a>
                            </div>
                            <div className="col-4">
                                <ul type="none">
                                    <li>
                                        <a href>{t('lineAD.footer-block.link_1')}</a>
                                    </li>
                                    <li>
                                        <a href>{t('lineAD.footer-block.link_2')}</a>
                                    </li>
                                    <li>
                                        <a href>{t('lineAD.footer-block.link_3')}</a>
                                    </li>
                                    <li>
                                        <a href>{t('lineAD.footer-block.link_4')}</a>
                                    </li>
                                    <li>
                                        <a href>{t('lineAD.footer-block.link_5')}</a>
                                    </li>
                                    <li>
                                        <a href>{t('lineAD.footer-block.link_6')}</a>
                                    </li>
                                    <li>
                                        <a href>{t('lineAD.footer-block.link_7')}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4" style={{ width: '393px' }}>
                                <p>
                                {t('lineAD.footer-block.question')}:  
                                    <a href="#"> {t('lineAD.footer-block.link_question')}</a>
                                    <br />
                                    {t('lineAD.footer-block.num_date')}
                                </p>
                            </div>
                        </div>
                    </footer>
            </>
        )
    }
}

export default withTranslation()(footerBlock);