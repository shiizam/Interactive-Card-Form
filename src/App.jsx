import { useState } from 'react'
import { Form } from './components/Form/Form'
import { Card } from './components/Card/Card'


function App() {
  const [formData, setFormData] = useState({ name: null, number: null, mm: null, yy: null, cvc: null });

  return (
    <div className="App">
      <Card formData={formData} />
      <Form formData={formData} setFormData={setFormData} />
    </div>
  )
}

export default App
