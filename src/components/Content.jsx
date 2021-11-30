import React from 'react';

function Content({ title, price, imgUrl, id }) {
  const [isFavorite, setIsFavorite] = React.useState();
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      <div id='product-content' className='product-list'>
        <div className='product-item'>
          <div className='product-item-inner'>
            <a href={'/product/' + id}>
              <picture className='product-item-image'>
                <img width={320} height={320} src={imgUrl} alt='' />
              </picture>
            </a>
            <div className='product-item-title d-flex flex-wrap flex-column '>
              <div className='product-item-name '>
                <a href=''>{title}</a>
              </div>
              <div className='product-info d-flex align-items-center'>
                <div className='price '>
                  <span class='fn_price'>{price}</span>
                  <span class='currency'>$</span>
                </div>
                <div className='favorite ms-auto '>
                  <img
                    onClick={onClickFavorite}
                    src={isFavorite ? '/images/favoriteOn.svg' : '/images/favoriteOff.svg'}
                    alt='favorite'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //   <div className='container'>
    //     <div className='d-flex'>
    //       <div className='items-cards '>
    //         <a className='' href=''>
    //           <img width={150} height={125} src='/images/shoes/1.jpg' alt='' />
    //         </a>
    //         <h5>Мужские кросовки NIKE</h5>

    //         <div className='d-flex jusify-content-between align-items-center'>
    //           <div className='d-flex flex-column'>
    //             <span>Цена</span>
    //             <b>12 999</b>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}

      {/* <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-3 '>
            <div className='card  d-flex align-items-center '>
              <a className='itemImage' href=''>
                <img width={320} height={250} class='card-img-top' src='/images/mayka.png' alt='' />
              </a>
              <div className='card-body d-flex align-items-center'>
                <h4 className='card-title'>Mans and Womans brand shoes</h4>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-3 '>
            <div className='card  d-flex align-items-center '>
              <a className='' href=''>
                <img width={320} height={250} class='card-img-top' src='/images/mayka.png' alt='' />
              </a>
              <h4 className='card-title'>Mans and Womans brand shoes</h4>
              <div className='card-body d-flex justify-content-between align-items-start'>
                <div className='d-flex flex-column'>
                  <span>Цена</span>
                  <b>12 999</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Content;
