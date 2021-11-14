// import Header from './Header';
// import Footer from './Footer';
import '../css/Product.css';

const Product = ({ addToCart, item }) => {
  const onClickAddToCart = () => {
    addToCart(item);
  };
  return (
    <div>
      <div className='container mt-5 mb-5'>
        <div className='card'>
          <div className='row g-0'>
            <div className='col-md-6 border-end'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='main_image'>
                  <img src={item.imgUrl} id='main_product_image' width='350' />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='p-3 right-side'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h3>{item.title}</h3>
                  <span className='heart'>
                    <i className='bx bx-heart'></i>
                  </span>
                </div>
                <div className='mt-2 pr-3 content'>
                  <p>
                    Lorem ipsum dolor syit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua
                  </p>
                </div>
                <div className='price d-flex align-items-center'>
                  <h3>{item.price}</h3>
                  <b>$</b>
                </div>

                <div className='buttons d-flex justify-content-start mt-5 '>
                  <button className='btn btn-outline-dark '>Buy Now</button>
                  <button onClick={onClickAddToCart} className='justify-content-start btn btn-dark'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container-fluid'>
        <div>
          <div className='d-flex '>
            <div className='product-left'>
              <div className='d-flex flex-wrap   '>
                <div className='item-images'>
                  <img
                    src='https://shop.navi.gg/files/resized/products/navi41010.650x622.png'
                    alt=''
                  />
                </div>
                <div className='item-images'>
                  <img
                    src='https://shop.navi.gg/files/resized/products/navi41021.650x622.png'
                    alt=''
                  />
                </div>
                <div className='item-images'>
                  <img
                    src='https://shop.navi.gg/files/resized/products/navi41015.650x622.png'
                    alt=''
                  />
                </div>
                <div className='item-images'>
                  <img
                    src='https://shop.navi.gg/files/resized/products/navi41046.650x622.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='product-right'>
              <div className='item-description'>
                <p>
                  Коллекция одежды Basic We, где мы вписали киберспорт в повседневность и добавили
                  побольше комфорта. Худи кроя оверсайз в любимом цвете и с минималистичным
                  логотипом NAVI.
                </p>

                <h4>Размер</h4>
                <div className='size-buttons d-block '>
                  <button>xs</button>
                  <button>sm</button>
                  <button>l</button>
                </div>
                <span>$60</span>

                <button>Добавить в корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
{
  /* <img src='https://shop.navi.gg/files/resized/products/navi41021.650x622.png' alt='' />
              <img src='https://shop.navi.gg/files/resized/products/navi41015.650x622.png' alt='' />
              <img src='https://shop.navi.gg/files/resized/products/navi41046.650x622.png' alt='' /> */
}
