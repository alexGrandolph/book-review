import './App.css';
import { useState } from 'react'
import Container from './components/Container/Container.js'
import BookModal from './components/BookModal/BookModal.js'

function App() {

  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div className="App">
      <Container setSelectedBook={setSelectedBook}/>
      <BookModal />
    </div>
  );
}

export default App;
