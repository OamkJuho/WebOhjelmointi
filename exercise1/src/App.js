import React from "react"
import './App.css'
import Header from './Components/Header'
import Timantit from './Components/Timantit'
import Sidebar from './Components/Sidebar'
import Article from './Components/Article'

function App() {
 return(
   <div className="app">
    <Header />
    <Timantit />
      <div class="laatikko">
        <Article />
        <Sidebar />
      </div>
   </div>
 )
}
export default App
