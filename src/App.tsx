import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import Friends from './pages/Friends';
import Setting from './pages/Setting';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/chat/:userId" element={<ChatRoom />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
