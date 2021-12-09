import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Body() {
  return (
    <div>
      <div className='container-fluid main-carousel'>
        <div id='carouselExampleControls' class='carousel slide' data-bs-ride='carousel'>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img src='./images/litkovskaya.jpg' class='d-block w-100' alt='...' />
            </div>
            <div class='carousel-item'>
              <img src='./images/oldbutgold.jpg' class='d-block w-100' alt='...' />
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'>
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'>
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='container '>
        <h2 className='content-title'> NEW NIKE SNEAKERS COLLECTION 2021-2022</h2>
        <div className='sneakers d-flex flex-wrap justify-content-between'>
          <div className='shoes'>
            <ul className='thumb'>
              <li>
                <img src='/images/shoes1.png' alt='' />
              </li>
              <li>
                <img src='/images/shoes2.png' alt='' />
              </li>
              <li>
                <img src='/images/shoes3.png' alt='' />
              </li>
            </ul>

            <div className='imgBox'>
              <h2>Nike Air Zoom</h2>
              <img src='/images/shoes1.png' alt='' />
              <ul className='size'></ul>
              <a href='' className='add'>
                add to cart
              </a>
            </div>
          </div>

          <div className='shoes'>
            <ul className='thumb'>
              <li>
                <img src='/images/shoes1.png' alt='' />
              </li>
              <li>
                <img src='/images/shoes2.png' alt='' />
              </li>
              <li>
                <img src='/images/shoes3.png' alt='' />
              </li>
            </ul>

            <div className='imgBox'>
              <h2>Nike Air Zoom</h2>
              <img src='/images/shoes2.png' alt='' />
              <ul className='size'></ul>
              <a href='' className='add'>
                add to cart
              </a>
            </div>
          </div>

          <div className='shoes'>
            <ul className='thumb'>
              <li>
                <img src='/images/shoes1.png' alt='' />
              </li>
              <li>
                <img src='/images/shoes2.png' alt='' />
              </li>
              <li>
                <img src='/images/shoes3.png' alt='' />
              </li>
            </ul>

            <div className='imgBox'>
              <h2>Nike Air Zoom</h2>
              <img src='/images/shoes3.png' alt='' />
              <ul className='size'></ul>
              <a href='' className='add'>
                add to cart
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='d-flex'>
          <div className='magazine '>
            <div className='image-first d-flex align-items-center justify-content-center'>
              <h2>
                <b>NEW SPRING COLLECTION FOR WOMAN</b>
              </h2>
            </div>
            <div className='image-second d-flex align-items-center justify-content-center'>
              <h2>
                <b>YOUR PERFECT LOOK THIS SPRING</b>
              </h2>
            </div>
            <div className='image-third d-flex align-items-end justify-content-start'>
              <h2>
                <b>COMFORTABLE AND LOOKS GOOD AT YOU</b>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h2 className='content-title'> BEST SELLERS IN THE 2021</h2>
        <div className='d-flex flex-wrap justify-content-between '>
          <div className='main-page-cards '>
            <div className='card-image '>
              <img src='./images/naviH2.png' alt='' />
            </div>
            <div className='card-title'>
              <p>NAVI OVERSIZE Hoodie YELLOW</p>
              <span>69,00$</span>
            </div>
          </div>

          <div className='main-page-cards '>
            <div className='card-image '>
              <img src='./images/naviH.png' alt='' />
            </div>
            <div className='card-title'>
              <p>NAVI OVERSIZE Hoodie LITKOVSKAYA</p>
              <span>69,00$</span>
            </div>
          </div>

          <div className='main-page-cards '>
            <div className='card-image '>
              <img src='./images/naviH3.png' alt='' />
            </div>
            <div className='card-title'>
              <p>NAVI OVERSIZE Hoodie </p>
              <span>69,00$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
