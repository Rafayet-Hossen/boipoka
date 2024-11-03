import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
      <div>
        <h1 className="text-center text-4xl font-bold mb-10">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 container mx-auto mr-28">
          {books.map((book) => (
            <Book book={book} key={book.bookId}></Book>
          ))}
        </div>
      </div>
    );
};

export default Books;