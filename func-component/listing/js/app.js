'use strict';

function Item(props) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={ props.url }>
          <img src={ props.img_url } />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{ props.title }</p>
        <p className="item-price">{ props.price }</p>
        <p className={ 'item-quantity level-' + props.level}>{ props.quantity } left</p>
      </div>
    </div>
  )
}


function Listing({items}) {
  const listing = items.map(item => {
    let title = item.title < 50 ? item.title : item.title.slice(0, 50) + '...';

    let price;
    switch (item.currency_code) {
      case 'USD':
        price = '$' + item.price;
        break;
      case 'EUR':
        price = '€' + item.price;
        break;
      default:
        price = item.price + ' ' + item.currency_code;
    }

    let level;
    if (item.quantity <= 10) {
      level = 'low';
    } else if (item.quantity <= 20) {
      level = 'medium';
    } else {
      level = 'high';
    }


    return <Item url={item.url} img_url={item.MainImage.url_570xN} title={title} price={price} quantity={item.quantity} level={level} />
  });

  return (
    <div className="item-list">
      { listing }
    </div>
  )
}

Listing.defaultProps = {
  items: []
};

fetch('https://neto-api.herokuapp.com/etsy')
  .then((response) => response.json())
  .then((responseJson) => ReactDOM.render(<Listing items={responseJson} />, document.getElementById('root')))
  .catch((error) => console.error(error));

