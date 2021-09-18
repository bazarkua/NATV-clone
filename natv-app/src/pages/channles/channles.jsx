import React from "react";
import styles from '../global-css/Advertisement.module.css';

class ReadyChannles extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className={styles.imagePlace}>
              <img
                width="50px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/REN_TV_logo_2017.svg/200px-REN_TV_logo_2017.svg.png"
                alt="Ren Tv"
              />
            </div>
            <p className={styles.title}>РЕН ТВ</p>
          </div>
          <div className="col-md-4">
            <div>
              <input type="text" className={`form-control`} />
            </div>
          </div>
          <div className="col-md-2">
            <p>
              <span>0</span>.0 сом
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default ReadyChannles;
