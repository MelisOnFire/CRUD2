import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import AddBtn from './AddBtn';
import UpdateBtn from './UpdateBtn';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<AddBtn />} />
          <Route path='/update/:id' element={<UpdateBtn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
