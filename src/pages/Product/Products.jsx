import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import Cart from '../../components/Cart';

const Products = () => {
  const [items, setItems] = useState([]);
  const [cartOpened, setCardOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  useEffect(() => {
    fetch('https://6163b62db55edc00175c1ad5.mockapi.io/Items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        json = json.map((e, id) => ({ ...e, id: id }));
        setItems(json);
      });
  }, []);
  return (
    <>
      <Header onClickCart={() => setCardOpened(true)} />
      {cartOpened && <Cart items={cartItems} onCloseCart={() => setCardOpened(false)} />}
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-between'>
          {items.map((item) => (
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
