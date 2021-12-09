import './App.css';
import Header from './components/Header';

import Cart from './components/Cart';

import Products from './pages/Product/ItemsCard';
import ProductDescription from './pages/Product/ProductDescription';

import Body from './components/Body';
import Home from './pages/Home';
import Login from './components/Login';
import Sign from './components/Sign';
import ItemsCard from './pages/Product/ItemsCard';
import Favorites from './pages/Favorites';
import axios from 'axios';
import React from 'react';

import './css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [cartOpened, setCardOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  // const [favorites, setFavorites] = React.useState();
  // React.useEffect(() => {
  //   axios.get('https://6163b62db55edc00175c1ad5.mockapi.io/favorites').then((res) => {
  //     setFavorites(res.data);
  //   });
  // }, []);
  // const onAddToFavorites = (obj) => {
  //   axios.post('https://6163b62db55edc00175c1ad5.mockapi.io/favorites', obj);
  //   setFavorites((prev) => [...prev, obj]);
  // };

  return (
    <div>
      {cartOpened && <Cart items={cartItems} onCloseCart={() => setCardOpened(false)} />}

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/content' element={<ItemsCard />}></Route>
        <Route exact path='/product/:id' element={<ProductDescription />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/sign' element={<Sign />}></Route>
        <Route exact path='/favorites' element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
