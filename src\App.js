import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({});

  useEffect(() => {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => setBooks([...books, data]));
    setNewBook({});
  };

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <h1>Library Management</h1>
      <BookList books={books} />
      <BookForm
        newBook={newBook}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;