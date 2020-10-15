import React, { useReducer } from 'react';

import CartContext from './contexts/CartContext';
import RestaurantsListContext from './contexts/RestaurantsListContext';
import UserInfosContext from './contexts/UserInfosContext';
import { storeReducer, initialState } from './reducers/store';
import Routes from './routes'
import { AppWrapper } from './components/rappi4bUi/rappi4bUi';
import dotenv from 'dotenv';

function App() {
  dotenv.config();

  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <UserInfosContext.Provider value={{ userInfos: state.userInfos, dispatch: dispatch }}>
      <RestaurantsListContext.Provider value={{ restaurantsList: state.restaurantsList, dispatch: dispatch }}>
        <CartContext.Provider value={{ userCart: state.userCart, dispatch: dispatch }}>
          <AppWrapper>
            <Routes />
          </AppWrapper>
        </CartContext.Provider>
      </RestaurantsListContext.Provider>
    </UserInfosContext.Provider>
  );
};

export default App;
