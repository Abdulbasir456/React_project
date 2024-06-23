
/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/chatBox.css';

const Practice = () => {
  //const [menuOpen, setMenuOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const toggleMenu = () => {
    //setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskQuestion = async () => {
    if (question.trim() === '') return;

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/ai/ask', { question });
      const data = response.data;

      await axios.post('http://localhost:5000/api/chat/save', {
        userId: user._id,
        question,
        response: data.response,
      });

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
            {user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><span onClick={() => { localStorage.removeItem('userInfo'); setUser(null); }}>Logout</span></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
          
        </nav>
        <h1>Artificial Intelligence</h1>
        
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

export default Practice;
*/

