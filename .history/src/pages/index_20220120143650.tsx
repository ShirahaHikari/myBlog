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
          <Carousel effect='fade' autoplay>
            <div>
              <a href="study"><img id={styles.autoPicture} src= {require('../imgs/study.jpg')} title='学习园地'></img></a>
            </div>
            <div>
              <img id={styles.autoPicture} src={require('../imgs/nature.jpg')} alt="" />
            </div>
            <div>
              <img id = {styles.autoPicture} src={require('../imgs/game.jpg')} alt="" />
            </div>
          </Carousel>
        </div>
        <div id={styles.rightFlexChild}>
          <div id={styles.pageRight}>
            <h3>关于shiraha的个人博客</h3>
          </div>
        </div>
      </div>
      <div id={styles.footer}></div>
    </div>
  );
}
export default HomePage;