/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/dashboard.css';



const Dashboard = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get('http://localhost:5000/api/chat/history');
      setChatHistory(data);
    };

    fetchChats();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <p><strong>User:</strong> {chat.user.username}</p>
            <p><strong>Question:</strong> {chat.question}</p>
            <p><strong>AI:</strong> {chat.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/dashboard.css'; // Ensure this path is correct based on your project structure

const Dashboard = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get('http://localhost:5000/api/chat/history');
      setChatHistory(data);
    };

    fetchChats();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="header">
        Admin Dashboard
      </header>
      <aside className="sidebar">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
      </aside>
      <main className="main-content">
        <h1>Chat History</h1>
        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-message">
              <p><strong>User:</strong> {chat.user.username}</p>
              <p><strong>Question:</strong> {chat.question}</p>
              <p><strong>AI:</strong> {chat.response}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        &copy; 2024 My Website
      </footer>
    </div>
  );
};

export default Dashboard;

