import Template from '../base/Template';
import NavigationBar from '../base/NavigationBar';

import FriendsList from '../components/friends/FriendsList';
import FriendsHeader from '../components/friends/FriendsHeader';

const Friends = () => {
  return (
    <Template
      header={<FriendsHeader />}
      content={<FriendsList />}
      backgroundColor={'#ffffff'}
      bottom={<NavigationBar />}
    />
  );
};

export default Friends;
