import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Article from './Components/Article';
import Timantit from './Components/Timantit';




function App() {
  return (
    <div className="main">
      <Header />
      <Timantit />
      <div className="laatikko">
        <Article />
        <Sidebar />
      </div> 
     
    </div>
  );
}

export default App;
