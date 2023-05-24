import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalCount: 0,
    items: [
      { title: "Test Item", quantity: 0, total: 18, price: 6 , id: 1 },
      { title: "Test Item 2", quantity: 0, total: 18, price: 8, id: 2 },
      { title: "Test Item 3", quantity: 0, total: 18, price: 80  , id: 3},
    ],
    totalPrice: 0,
    selectedItems: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const { itemIndex } = action.payload;
      const selectedItem = state.items.find(item => item.id === itemIndex);
      
      state.totalCount += 1;
      selectedItem.quantity += 1;
      state.totalPrice += selectedItem.price;

      const existingItem = state.selectedItems.find(
        (item) => item.id === selectedItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = { ...selectedItem, quantity: 1 };
        state.selectedItems.push(newItem);
      }
    },
    removeItemToCart(state, action) {
      const { itemIndex } = action.payload;
      const selectedItem = state.items.find(item => item.id === itemIndex);

      if (selectedItem.quantity === 0) return;

      state.totalCount -= 1;
      selectedItem.quantity -= 1;
      state.totalPrice -= selectedItem.price;
      
      const existingItem = state.selectedItems.find(
        (item) => item.id === selectedItem.id
      );

      if (existingItem) {
        existingItem.quantity -= 1;

        if (existingItem.quantity === 0) {
          state.selectedItems = state.selectedItems.filter(
            (item) => item.id !== existingItem.id
          );
        }
      } else {
        const newItem = { ...selectedItem, quantity: 0 };
        state.selectedItems.push(newItem);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
