import styles from './index.less';

const HomePage = () => {
  return (
    <div id = {styles.rooter}>
      <div id = {styles.header}>
        <a href='#' className={styles.aTag}>首页</a>
        <a href='#' className={styles.aTag}>前端学习</a>
        <a href='#' className={styles.aTag}>关于我</a>
      </div>
      <div id = {styles.flexBox}>
        
      </div>
      <div id = {styles.footer}></div>
    </div>
  );
}
export default HomePage;