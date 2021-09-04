import React from 'react';
import styles from '../global-css/Advertisement.module.css';
import Header from '../Header/Header';

class lineAD extends React.Component {
    render() {
        return (
            <>
            <Header status="active"/>
                <div>
                    <main className="p-3">
                        <div className="row m-3 p-3 d-flex">
                            <div className={`${styles.textarea} col-lg-7 col-md-6 col-sm-4 col-xs-12`}>
                                <div className={styles.header_textarea}>
                                    <h3>ВВЕДИТЕ ТЕКСТ ОБЪЯВЛЕНИЯ</h3>
                                    <p>Символов: <span>0</span></p>
                                </div>
                                <textarea name id placeholder="Мебель. Отличное качество и выгодная цена. Звоните 0555123456" rows={10} defaultValue={""} />
                            </div>
                            <div className={`${styles.rules} col-lg-5 col-md-6 col-sm-4 col-xs-12`}>
                                <h4>Правила заполнения текста</h4>
                                <p>Уважаемый Рекламодатель!</p>
                                <hr />
                                <ul type="none">
                                    <li>
                                        При заполнении объявления после каждого слова должен обязательно стоять пробел;
                                    </li>
                                    <li>Размещенный текст не должен побуждать граждан к насилию, агрессии и опасным действиям, создающим угрозу
                                        жизни и здоровью, а также призывающему к беспорядку;
                                    </li>
                                    <li>Рекламодатель самостоятельно несет ответственность за соответствие рекламы действующему законодательству
                                        Кыргызской Республики о рекламе;
                                    </li>
                                    <li>Если рекламируемый товар/услуга подлежат лицензированию укажите номера лицензий и наименование органов,
                                        выдавшего их и/или укажите «товар сертифицирован», если рекламируемый товар подлежит обязательной
                                        сертификации;
                                    </li>
                                    <li><a href="https://natv.kg/ru/sposobyoplaty">Оплатить можно любым удобным способом:</a></li>
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
                                    <p>Введите текст вашего объявления</p>
                                </div>
                            </div>
                            <div className={styles.numsBlock}>
                                <div className={styles.number}>2</div>
                                <div>
                                    <p>Выберите телеканалы и даты, и нажмите "Разместить объявление"</p>
                                </div>
                            </div>
                            <div className={styles.numsBlock}>
                                <div className={styles.number}>3</div>
                                <div>
                                    <p>Оплатите объявление!</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block_news}>
                            <h1>Выбор каналов</h1>
                            <div className={styles.secondBlock}>
                                <h4 className="col-md-6">Выберите каналы</h4>
                                <h4 className="col-md-4">УКАЖИТЕ ДАТЫ</h4>
                                <h4 className="col-md-2">стоимость</h4>
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
                                <h2>Общая сумма: <span>0</span> сом</h2>
                            </div>
                        </div>
                        <div className={`${styles.infoClients} p-3 d-flex justify-content-between row`}>
                            <div className="col-md-4">
                                <h4>КОНТАКТНЫЙ НОМЕР</h4>
                                <input type="text" className="form-control" placeholder="Пример: 0555123456" />
                            </div>
                            <div className="col-md-4">
                                <h4>E-MAIL</h4>
                                <input type="email" className="form-control" placeholder="primer@mail.com" />
                            </div>
                            <div className="col-md-4">
                                <h4>УКАЖИТЕ ФАМИЛИЮ И ИМЯ</h4>
                                <input type="text" className="form-control" placeholder="Ф.И.О./ название организации" />
                            </div>
                            <div className={`${styles.instruction} p-3`}>
                                <p>*Поля не обязательны для заполнения. Укажите номер телефона и мы отправим Вам код для оплаты SMS сообщением.
                                </p>
                                <p>*Оплатите любым удобным способом!</p>
                            </div>
                            <div className={`${styles.reCapture} p-3`}>
                                <div className="col-md-4"><p>Вам остался один шаг – нажмите разместить и получите код для оплаты!
                                </p></div>
                                <div className="col-md-4" />
                                <div className="col-md-4"><button>Разместить Обьявление</button></div>
                            </div>
                            <hr />
                        </div>
                    </main>
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
                </div>
            </>
        )
    }
}

export default lineAD;