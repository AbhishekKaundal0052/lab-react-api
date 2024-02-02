import axios from 'axios'
import {useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {axios.get("https://reactnd-books-api.udacity.com/books", {headers: {'Authorization': 'Ky'}})
  .then((res)=> setData(res.data.books))
  .catch((err)=> console.log(err))
},[])
  return (
    <>
  
  {data.map((book) => (
        <div key={book.id} className="book-container">
          <img className="img" src={book.imageLinks.smallThumbnail} alt={book.title} />
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p><i>{book.authors}</i></p>
          </div>
        </div>
          

          
        ))}
      
    </>
  )
}

export default App
