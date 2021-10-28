import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <h1>book delivery shop</h1>
    <Button variant="primary">Button #1</Button>
    </div>
  );
}

export default App;
