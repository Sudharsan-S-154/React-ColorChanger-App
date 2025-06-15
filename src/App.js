import { useState } from 'react';
import Main from './Main';
import './index.css';

function App() {

  let [colorName,setColorName] = useState("");
  return (
   <section className='container'>
         <Main 
         colorName={colorName}
         setColorName={setColorName}
         />
   </section>
  );
}

export default App;
