import React, { useState } from 'react';

const Communication = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', content: 'Hello, team!' },
    { id: 2, sender: 'Bob', content: 'Don’t forget about the meeting at 3 PM.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="communication">
      <h1>Communication</h1>
      <p>Send and view messages:</p>
      <div className="message-board">
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>
              <strong>{msg.sender}:</strong> {msg.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Communication;
