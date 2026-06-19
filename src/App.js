

import './App.css';
import Nav from './components/Nav';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Nav/>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
