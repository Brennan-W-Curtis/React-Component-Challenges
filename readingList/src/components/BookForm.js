import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ id, setId ] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: "ADD_BOOK", book: {
            title, author, id
        }});
        setTitle("");
        setAuthor("");
        setId("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Please enter a book title." value={title}
                onChange={event => setTitle(event.target.value)} required
            />
            <input type="text" placeholder="Please enter the book's author." value={author}
                onChange={event => setAuthor(event.target.value)} required
            />
            <input type="text" placeholder="Please enter the book's id." value={id}
                onChange={event => setId(event.target.value)} required
            />
            <input type="submit" value="Add Book" />
        </form>
    );
}

export default BookForm;