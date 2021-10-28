// import Header from './Header';
// import Footer from './Footer';
import '../css/Product.css';

const Product = ({ onAddCart, item }) => {
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
                  <button onClick={onAddCart} className='justify-content-start btn btn-dark'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
