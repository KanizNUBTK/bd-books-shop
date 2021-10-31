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
import Shipping from './component/Shipping/Shipping';
import Footer from './component/Footer/Footer';
import BookDetails from './component/BookDetails/BookDetails';
import ManageAllOrders from './component/ManageAllOrders/ManageAllOrders';
import AddBook from './component/AddBook/AddBook';
import DisplayUser from './component/ManageAllOrders/DisplayUser/DisplayUser';

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
        <PrivateRoute exact path="/bookdtails/:bookId">
          <BookDetails></BookDetails>
        </PrivateRoute>
        <PrivateRoute exact path="/manageAllOrders">
          <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>
        <PrivateRoute exact path="/addBook">
          <AddBook></AddBook>
        </PrivateRoute>
        <PrivateRoute exact path="/displayUser">
          <DisplayUser></DisplayUser>
        </PrivateRoute>
        <PrivateRoute exact path="/shipping">
          <Shipping></Shipping>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
