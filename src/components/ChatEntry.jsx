import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({id, sender, body, timeStamp, liked, onToggleLike}) => {
  const sideClass = sender === 'Vladimir' ? 'local' : 'remote';
  return (
    // <div className="chat-entry local">
    <div className={`chat-entry ${sideClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className="entry-body">{body}</p>
        <TimeStamp time={timeStamp} />
        <button className="like" onClick={()=> onToggleLike(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;
