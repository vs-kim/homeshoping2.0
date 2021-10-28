import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
function Home() {
  const [cartOpened, setCardOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  return (
    <div>
      {cartOpened && <Cart items={cartItems} onCloseCart={() => setCardOpened(false)} />}
      <Header onClickCart={() => setCardOpened(true)} />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
