import { Oval } from 'react-loader-spinner';

import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Oval
        height={50}
        width={50}
        color="#4fa94d"
        visible={true}
        ariaLabel="oval-loading"
        strokeWidth={7}
      />
    </div>
  );
};

export default Loader;
