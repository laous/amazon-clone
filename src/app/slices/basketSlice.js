import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items , action.payload]
    },
    removeFromBasket: (state, action) => {
      // const newBasket = state.items.filter(item => item.id !== action.payload.id)
      // state.items = newBasket

      const index  = state.items.findIndex(item => item.id === action.payload.id)
      const newBasket = [...state.items]
      if(index>=0){
        newBasket.splice(index,1)
      }else{
        console.warn("Cannot remove item")
      }
      state.items=newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total+(item.price*10), 0);

export default basketSlice.reducer;
