import styles from './index.less';
import { Carousel } from 'antd'

const HomePage = () => {
  return (
    <div id={styles.rooter}>
      <div id={styles.header}>
        <a href='#' className={styles.aTag}>首页</a>
        <a href='#' className={styles.aTag}>前端学习</a>
        <a href='#' className={styles.aTag}>关于我</a>
      </div>
      <div id={styles.flexBox}>
        <div id={styles.leftFlexChild}>
          <Carousel effect='fade' >
            <div>
              <img className={styles.autoPicture} src= 'https://img0.baidu.com/it/u=678970897,4074978595&fm=26&fmt=auto'></img>
            </div>
            <div>
              <h3 className={styles.autoPicture}>2</h3>
            </div>
            <div>
              <h3 className={styles.autoPicture}>3</h3>
            </div>
            <div>
              <h3 className={styles.autoPicture}>4</h3>
            </div>
          </Carousel>
        </div>
        <div id={styles.rightFlexChild}></div>
      </div>
      <div id={styles.footer}></div>
    </div>
  );
}
export default HomePage;