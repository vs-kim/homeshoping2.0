// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import MySwiper from './MySwiper';
import Content from './components/Content';
import Footer from './components/Footer';
import Cart from './components/Cart';
// import Product from './components/Product';
import Products from './pages/Product/Products';
import ProductDescription from './pages/Product/ProductDescription';
// import Products from './pages/Products';
import Body from './components/Body';
import Home from './pages/Home';
import Login from "./components/Login";
import Sign from "./components/Sign";
import React from 'react';
import './css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [cartOpened, setCardOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  console.log(cartOpened);
  const onAddToCart = () => {
    alert(123);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Products} />
          <Route exact path='/product/:id' component={ProductDescription} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/sign' component={Sign}/>
        </Switch>
      </Router>
    </>
  );
}
// const Home = () => (
//   <div>
//     <Header />
//     <Body />
//     <Footer />
//   </div>
// );
export default App;
