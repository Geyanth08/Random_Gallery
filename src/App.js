import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'
import SearchBar from './components/SearchBar'

function App() {

  const [term,setTerm] = useState('');

  return (
    <div>
      <Header />
      <SearchBar searchText={(text) => setTerm(text)} />
      <ImageGrid term={term} />
      <Footer />
    </div>
  )
}

export default App