export const initialState = {
  basket: [],
  user: null,
  address: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      //splicing basket by 1 if same item is added twice (not removing all items of one kind )
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    //listening to authUser APP.JS
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
      case 'EMPTY_BASKET':
        return {
           ...state,
           basket: []
        }
    //DEFAULT
    default:
      return state;
  }
};
export default reducer;
