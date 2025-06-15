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

  const totalLikes = messages.filter((msg) => msg.liked).length;

  const senders = [...new Set(messages.map(msg => msg.sender))];

  return (
    <div id="App">
      <header>
        <h1>Chat between {senders.join(' and ')}</h1>
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
