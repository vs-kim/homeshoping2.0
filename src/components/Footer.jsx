import React from 'react';

function footer() {
  return (
    <div>
      <div className='container'>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
          <p className='col-md-4 mb-0 text-muted'>© 2021 Company, Inc</p>
          <ul className='nav  col-md-6 justify-content-center d-flex flex-wrap  align-items-center  '>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-muted'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-muted'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-muted'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-muted'>
                FAQs
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' class='nav-link px-2 text-muted'>
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default footer;
