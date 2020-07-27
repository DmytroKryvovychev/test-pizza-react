import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPizzas } from '../redux/actions/pizzas';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цена', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
