const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(books);
  } else if (req.method === 'POST') {
    const newBook = req.body;
    books.push({ id: books.length + 1, ...newBook });
    res.status(201).json(newBook);
  }
}
```

This is a basic React application for library management. It displays a list of books and allows users to add new books. The data is stored in a simple in-memory array, but in a real-world application, you would want to use a database to store the data.