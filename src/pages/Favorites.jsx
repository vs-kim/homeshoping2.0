import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import axios from 'axios';
import Header from '../components/Header';

function Favorites() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCardOpened] = React.useState(false);
  // const [favorites, setFavorites] = React.useState();
  useEffect(() => {
    axios.get('https://6163b62db55edc00175c1ad5.mockapi.io/Items').then((res) => {
      let favorites = window.sessionStorage.getItem('favorites');
      if (favorites) favorites = JSON.parse(favorites);

      let data = res.data;
      if (favorites?.length > 0) {
        data = data.filter((e) => favorites.includes(e.id));
        setItems(data);
      }
    });
  }, []);

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
    <div>
      <Header onClickCart={() => setCardOpened(true)} />

      <div className='container'>
        <h1 className='favorties-title'>My favorites</h1>
        <div className='d-flex flex-wrap justify-content-between'>
          {items.map((item, index) => (
            <Content
              key={index}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              id={item.id}
              favorited={true}
              onFavorite={(obj) => onAddToFavorites(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
