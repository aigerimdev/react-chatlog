import './App.css';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messagesData}/>
      </main>
    </div>
  );
};

export default App;
