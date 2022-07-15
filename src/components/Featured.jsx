import React from "react";
import Book from "./Book";
import BestBooks from "./ui/BestBooks";
import { books } from '../data.js'

const Featured = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter(book => book.rating === 5)
                        .slice(0, 4)
                        .map(book => 
                        <Book
                        key={book.id} 
                        book={book}
                        rating={book.rating} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
