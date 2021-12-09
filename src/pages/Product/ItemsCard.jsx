import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import Cart from '../../components/Cart';
import Search from '../../components/Search';
import axios from 'axios';
import Favorites from '../Favorites';

const ItemsCard = () => {
  const [items, setItems] = useState([]);
  const [cartOpened, setCardOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();
  const [favorites, setFavorites] = React.useState();
  useEffect(() => {
    axios.get('https://6163b62db55edc00175c1ad5.mockapi.io/Items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6163b62db55edc00175c1ad5.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToFavorites = (obj) => {
    // axios.post('https://6163b62db55edc00175c1ad5.mockapi.io/favorites', obj);
    // setFavorites((prev) => [...prev, obj]);
    const id = obj.id;
    let favorites = [];
    favorites = window.sessionStorage.getItem('favorites');
    if (favorites) favorites = JSON.parse(favorites);

    if (favorites?.length > 0) {
      // list exist
      if (!favorites.includes(id)) {
        // not in the list
        favorites.push(id);
      } else {
        // already in the list
        favorites = favorites.filter((e) => e != id);
      }
    } else {
      // list is empty
      favorites = [id];
    }

    window.sessionStorage.setItem('favorites', JSON.stringify(favorites));
  };
  return (
    <>
      <Header onClickCart={() => setCardOpened(true)} />
      {cartOpened && <Cart items={cartItems} onCloseCart={() => setCardOpened(false)} />}
      <div className='container'>
        <Search changeSearch={onChangeSearchInput} searchValue={searchValue} />
        <div className='d-flex flex-wrap justify-content-between'>
          {items
            // .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Content
                itemInfo={item}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                id={item.id}
                onFavorite={(obj) => onAddToFavorites(obj)}
              />
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ItemsCard;
