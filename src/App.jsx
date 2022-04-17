import React, { useState } from 'react'
import Card from './components/Card'
import ThankYouCard from './components/ThankYouCard'

function App() {
  const [grade, setGrade] = useState(null)

  return grade ? <ThankYouCard grade={grade} /> : <Card setGrade={setGrade} />
}

export default App
