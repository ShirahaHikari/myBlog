import styles from './index.less';

const HomePage = () => {
  return (
    <div>
      <div id = {styles.header}>
        <a>首页</a>
        <a>前端学习</a>
        <a>关于我</a>
      </div>
    </div>
  );
}
export default HomePage;