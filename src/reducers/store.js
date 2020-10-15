export const initialState = {
  userInfos: null,
  userCart: {},
  restaurantsList: []
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_INFOS':
      let infos = action.infos;
      return {...state, userInfos: infos};

    case 'ADD_TO_CART':
      let order = action.order;
      return {...state, userCart:
        {...state.userCart, [order.restaurantId]:order.currentOrder}
      };

    case 'CLEAR_CART':
      return {
        ...state, userCart:{}
      };

    case 'SET_RESTAURANTS_LIST':
      let restaurantsList = action.restaurantsList;
      return {...state, restaurantsList: restaurantsList};

    default:
      return state;
  };
};