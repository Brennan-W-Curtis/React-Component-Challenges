import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <nav className="navbar">
            <h1>Reading List Application</h1>
            <p>Currently you have { books.length } books to complete.</p>
        </nav>
    );
}

export default Navbar;