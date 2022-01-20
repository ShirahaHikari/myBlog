import styles from './index.less';
import { Carousel } from 'antd'
import { WechatOutlined } from '@ant-design/icons';
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
            <h3 id = {styles.pageTitle}>关于shiraha的个人博客</h3>
          </div>
          <div>
            <p id={styles.para}>shiraha博客为本人临时起意做的，由于要准备毕业设计，因此只有闲鱼时刻才有机会制作</p>
            <p id={styles.para}>此博客记录平时学习的一些前端与计算机知识，但仅限于以本人较能理解的说法去记录，因此并不能以此作为权威性参考</p>
          </div>
          <div id={styles.pageRight}>
            <h3 id = {styles.pageTitle}>联系方式</h3>
          </div>
          <a href="#"><WechatOutlined height='10em' width='10em'/></a>
        </div>  
      </div>
      <div id={styles.footer}></div>
    </div>
  );
}
export default HomePage;