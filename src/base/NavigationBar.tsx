import { Link } from 'react-router-dom';
import { BsChatLeft, BsPerson, BsGear } from 'react-icons/bs';

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
