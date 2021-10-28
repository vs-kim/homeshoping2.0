import React from 'react';

function Header({ onClickCart }) {
  return (
    <header>
      <div className='contaner'>
        <div className='header--top p-3 bg-dark text-white '>
          <div className='container'>
            <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
              <div className='logo'>
                <a
                  href='/'
                  className='navbar-brand mx-2 d-flex align-items-center mb-2 mb-lg-0  text-white text-decoration-none'>
                  <img src='/images/merch2.png' alt='logo' width='220' height='90' />
                </a>
              </div>

              <form className='form--header ms-auto col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
                <input
                  type='search'
                  className='form-control form-control-dark'
                  placeholder='Search...'
                  aria-label='Search'
                />
              </form>

              <div className='text-end'>
                <button onClick={onClickCart} type='button' className='btn btn-outline-light me-2'>
                  <svg
                    className=''
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-cart3'
                    viewBox='0 0 16 16'>
                    <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                  </svg>
                  Cart
                </button>
                <button type='button' className='btn btn-warning me-2'>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='header--bottom '>
          <nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom'>
            <div className='container'>
              <a className='navbar-brand' href='#'></a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-lg-0   '>
                  <li className='nav-item'>
                    <a className='nav-link active' aria-current='page' href='/'>
                      Home
                    </a>
                  </li>

                  <li className='nav-item'>
                    <a className='nav-link' href='/product'>
                      All products
                    </a>
                  </li>

                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
