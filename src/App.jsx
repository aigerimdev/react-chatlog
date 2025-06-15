import { useState } from 'react';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState(messagesData);

  const toggleLike = (id) => {
    const updatedMessages = messages.map((msg) => {
      if (msg.id === id) {
        return { ...msg, liked: !msg.liked };
      } else {
        return msg;
      }
    });
    setMessages(updatedMessages);
  };
  //calculate total likes count
  const totalLikes = messages.filter((msg) => msg.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p className="likes-count">
          {totalLikes} ❤️{totalLikes === 1 ? '' : 's'}
        </p>
      </header>
      <main>

        <ChatLog entries={messages} onToggleLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
