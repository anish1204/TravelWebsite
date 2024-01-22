import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MVP from './components/MVP'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <MVP/>
    </div>
  );
}

export default App;
