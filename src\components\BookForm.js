import React from 'react';

const BookForm = ({ newBook, handleSubmit, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;