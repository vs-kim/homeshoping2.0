import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import Cart from '../../components/Cart';
import Search from '../../components/Search';
import axios from 'axios';

const Products = () => {
  const [items, setItems] = useState([]);
  const [cartOpened, setCardOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();
<<<<<<< Updated upstream:src/pages/Product/Products.jsx
=======
  // const [favorites, setFavorites] = React.useState();
>>>>>>> Stashed changes:src/pages/Product/ItemsCard.jsx
  useEffect(() => {
    // fetch('https://6163b62db55edc00175c1ad5.mockapi.io/Items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     json = json.map((e, id) => ({ ...e, id: id }));
    //     setItems(json);
    //   });
    axios.get('https://6163b62db55edc00175c1ad5.mockapi.io/Items').then((res) => {
      setItems(res.data);
    });
<<<<<<< Updated upstream:src/pages/Product/Products.jsx
=======
    // axios.get('https://6163b62db55edc00175c1ad5.mockapi.io/favorites').then((res) => {
    //   setFavorites(res.data);
    // });
>>>>>>> Stashed changes:src/pages/Product/ItemsCard.jsx
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
<<<<<<< Updated upstream:src/pages/Product/Products.jsx
=======
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
>>>>>>> Stashed changes:src/pages/Product/ItemsCard.jsx
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
              />
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
