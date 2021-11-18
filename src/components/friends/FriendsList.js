import users from '../../assets/data/users.json';
import me from '../../assets/data/me.json';

import List from '../../base/List';

const FriendsList = () => {
  return (
    <>
      <List user={me} text={me.statusMsg} />
      {users.map((user) => (
        <List user={user} text={user.statusMsg} key={user.id} />
      ))}
    </>
  );
};

export default FriendsList;
