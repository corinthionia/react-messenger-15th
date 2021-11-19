import { BsChatLeft, BsPerson, BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      <Link to={'/'}>
        <BsPerson />
      </Link>
      <Link to={'/chatList'}>
        <BsChatLeft />
      </Link>
      <Link to={'/setting'}>
        <BsGear />
      </Link>
    </>
  );
};

export default NavigationBar;
