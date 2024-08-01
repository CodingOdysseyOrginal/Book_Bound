import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Book } from '../Data/HomePageBook';

interface CartItem extends Book {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: 'ADD_TO_CART';
  payload: Book;
}

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const book = action.payload;
      const existingItem = state.items.find((item) => item.id === book.id);

      if (existingItem) {
      
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...book, quantity: 1 }],
      };
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
