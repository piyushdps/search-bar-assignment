import './index.css'
import React  from "react";
import Header from "./Components/Header";
import Search from './Components/Search';
import Cards from './Components/Cards';
function App() {
  

  let arr = [1,1,1] 
  return (
   <>
   <Header/>
   <Search/>
    <Cards/>
   </>
  );
}

export default App;
