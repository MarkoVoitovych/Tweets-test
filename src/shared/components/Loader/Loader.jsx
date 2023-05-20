import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={50}
      width={50}
      color="#4fa94d"
      visible={true}
      ariaLabel="oval-loading"
      strokeWidth={7}
    />
  );
};

export default Loader;
