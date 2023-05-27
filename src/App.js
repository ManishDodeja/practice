
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Forms from './CRUD/Forms';
import Showdata from './CRUD/Showdata'
import { useEffect, useState } from 'react';

function App() {
  const [array, setArray] = useState([]);
  const addDataToArr = (obj) => {
    setArray(prevArray => [...prevArray, obj]);
  }

  return (
    
    <>
      <Routes>
        <Route index path='/' element={<Forms arr={addDataToArr}/>} />
        <Route path='showpage' element={<Showdata arr={array}/>} />
      </Routes>
    </>
  );
}

export default App;