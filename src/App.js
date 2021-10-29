import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../src/component/Home/Home';
import Login from '../src/component/Login/Login';
import NotFound from '../src/component/NotFound/NotFound';
import Header from './component/Header/Header';
import OrderReview from './component/OrderReview/OrderReview';
import Books from './component/Books/Books';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute exact path="/orders">
          <OrderReview></OrderReview>
        </PrivateRoute>
        <PrivateRoute exact path="/books">
          <Books></Books>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
