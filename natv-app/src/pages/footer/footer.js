import React from 'react';

class footerBlock extends React.Component {
    render () {
        return(
            <>
                <footer>
                        <div className="row">
                            <div className="col-4" style={{ width: '407px' }}>
                                <p>©️2017. Сервис предоставляется ОсОО "НаТВ"</p>
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
                                        <a href>О проекте</a>
                                    </li>
                                    <li>
                                        <a href>Способы оплаты</a>
                                    </li>
                                    <li>
                                        <a href>Для юридических лиц</a>
                                    </li>
                                    <li>
                                        <a href>Вопрос-ответ</a>
                                    </li>
                                    <li>
                                        <a href>Видеоинструкция по размещению</a>
                                    </li>
                                    <li>
                                        <a href>Договор публичной оферты</a>
                                    </li>
                                    <li>
                                        <a href>Правила заполнения текста</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4" style={{ width: '393px' }}>
                                <p>
                                    По вопросам сотрудничества:
                                    <a href>info@natv.kg </a>
                                    <br />
                                    0 550 44 06 56, звонки пн-пт с 10:00 до 16:00
                                </p>
                            </div>
                        </div>
                    </footer>
            </>
        )
    }
}

export default footerBlock;