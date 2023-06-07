import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      className="
      h-[50vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <HashLoader color="#0000FF" />
    </div>
  );
};

export default Loader;
