import logo from './logo.svg';
import './App.css';
// import { Button } from './components/Button';
import{Flex} from "./components/Flex"
import useState from "react"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  

  return (
    <div className="App">
      {/* <Button onClick={()=>{alert("first button clicked")}}>this is first button</Button> */}
      <Button variant="contained">Contained</Button>
      
      <Flex>
        <div>div 1</div>
        <div> div 2</div>
        <div> div 3</div>
      </Flex>
    </div>
  );
}

export default App;
