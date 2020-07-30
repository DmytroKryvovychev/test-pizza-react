const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      // const totalCount = Object.values(newItems).reduce((sum, item) => {
      //   return sum + item.length;
      // }, 0);  //MyCode ^.^ veryNovice

      // const totalPrice = Object.values(newItems).reduce((sum, item) => {
      //   const price = item.reduce((sum, item) => {
      //     return sum + item.price;
      //   }, 0);
      //   return sum + price;
      // }, 0); //MyCode ^.^ veryNovice

      const allPizzas = [].concat.apply([], Object.values(newItems));

      const totalPrice = allPizzas.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);

      const totalCount = allPizzas.length;

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    }
    default:
      return state;
  }
};

export default cart;
