import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"
import { books } from './books';
import Book from './Book';
function Booklist()
{return(
  <section className='booklist'>
  {books.map((book, index)=> {
    return <Book key={book.id} book={book}></Book>
  })}

  </section>
  );
}


ReactDom.render(<Booklist/>,document.getElementById('root'));
