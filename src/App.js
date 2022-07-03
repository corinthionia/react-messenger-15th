import { useEffect } from 'react';
import { Routes, Route } from 'react-router';

import Friends from './pages/Friends';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import Setting from './pages/Setting';
import { setScreenSize } from './utils/SetScreenSize';

function App() {
  useEffect(() => {
    // setScreenSize();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom/:userId" element={<ChatRoom />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
