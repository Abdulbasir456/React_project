
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './chatBox.css';

const ChatBox = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskQuestion = async () => {
    if (question.trim() === '') return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
      });

      const data = await response.json();
      setChatHistory([...chatHistory, { question, response: data.response }]);
    } catch (error) {
      console.error('Error fetching response from server:', error);
      setChatHistory([...chatHistory, { question, response: 'Error fetching response from AI.' }]);
    } finally {
      setQuestion('');
      setLoading(false);
    }
  };

  return (
    <div className="ai-container">
      <header className="ai-header">
        <nav className="navbar">
          <ul>
            <li><Link to="/">ChatBox</Link></li>
            <li><Link to="/ai">AI</Link></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <h1>Artificial Intelligence</h1>
        {menuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/ai" onClick={toggleMenu}>AI</Link></li>
            </ul>
          </div>
        )}
      </header>
      <main className="ai-main">
        <section className="ai-intro">
          <h2>What is AI?</h2>
          <p>AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.</p>
        </section>
        <section className="ai-chatbox">
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-message">
                <p><strong>User:</strong> {chat.question}</p>
                <p><strong>AI:</strong> {chat.response}</p>
              </div>
            ))}
            {loading && <p>Loading...</p>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={question}
              onChange={handleInputChange}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === 'Enter' ? handleAskQuestion() : null}
            />
            <button onClick={handleAskQuestion}>Ask</button>
          </div>
        </section>
      </main>
      <footer className="ai-footer">
        <p>&copy; 2024 My Website</p>
        <nav className="footer-nav">
          <ul>
            <li><Link to="/">ChatBox</Link></li>
            <li><Link to="/ai">AI</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default ChatBox;