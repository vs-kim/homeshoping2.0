import React from 'react';

function Cart({ onCloseCart, items = [] }) {
  return (
    <div className='overlay'>
      <div className='cart  '>
        <img
          onClick={onCloseCart}
          className='ms-auto'
          height={60}
          width={60}
          src='/images/close.svg'
          alt=''
        />
        <div className='d-flex justify-content-center'>
          <h2 className='cart-header '>Cart</h2>
        </div>

        {items.map((obj) => (
          <div className='items d-flex align-items-center '>
            <div className='cart-item-image'>
              <img width={173} height={194} src={obj.imgUrl} alt='' />
            </div>
            <div className='cart-item-info '>
              <p class='item-name'>{obj.title}</p>
              <p className='item-size d-block'>XS</p>
              <button>+-</button>
            </div>
            <div className='price d-flex ms-auto align-items-center'>
              <span>{obj.price}</span>
              <span>$</span>
              <img className='trashSvg' width={25} height={30} src='/images/trash.svg' alt='' />
            </div>
          </div>
        ))}

        <div className='cart-total d-flex align-items-center justify-content-end'>
          <b className=''>Total</b>
          <span>160$</span>
          <button className='btn btn-primary btn-lg'>Complete Purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
