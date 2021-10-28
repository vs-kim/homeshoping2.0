import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/Product';
import Cart from '../../components/Cart';
import { useParams } from 'react-router-dom';
const ProductDescription = () => {
  const [cartOpened, setCardOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const { id } = useParams();
  console.log(id);
  const [items, setItems] = useState([]);
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
    <div>
      <Header onClickCart={() => setCardOpened(true)} />
      {cartOpened && <Cart items={cartItems} onCloseCart={() => setCardOpened(false)} />}
      {items.length > 0 && <Product item={items[id]} />}
      <Footer />
    </div>
  );
};

export default ProductDescription;
