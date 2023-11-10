import React from 'react'
import '../styles/Home.css'
import AddIcon from '@mui/icons-material/Add';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
function App() {
  return (
    <div className='topic'>
  <h1>
    Invoices
  </h1>
   <hr className='line'></hr>
   <button className='btn1'><AddIcon/>Create Invoice</button>
   
      <button className='btn2'><SpeakerNotesIcon/>View Invoices</button>
 </div>

  )
}

export default App