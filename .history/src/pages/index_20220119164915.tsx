import styles from './index.less';

const HomePage = () => {
  return (
    <div>
      <div id = {styles.header}>
        <a href='#' className={styles.aTag}>首页</a>
        <a href='#' className={styles.aTag}>前端学习</a>
        <a href='#' className={styles.aTag}>关于我</a>
      </div>
    </div>
  );
}
export default HomePage;