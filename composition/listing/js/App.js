'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => <GenderItem item={item} />)}
  </main>
);


const GenderItem = ({item}) => {
  const colors = {
    unisex: 'black',
    male: 'blue',
    female: 'orange'
  };

  return <Item color={colors[item.type]} item={item} />;
};
