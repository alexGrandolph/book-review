import './App.css';
import { useState } from 'react'
import Container from './components/Container/Container.js'
import BookModal from './components/BookModal/BookModal.js'

function App() {

  const [selectedBook, setSelectedBook] = useState(null)
  // console.log(selectedBook)
  return (
    <div className="App">
      <Container setSelectedBook={setSelectedBook}/>
      { selectedBook && <BookModal selectedBook={selectedBook} setSelectedBook={setSelectedBook}/> }
    </div>
  );
}

export default App;
