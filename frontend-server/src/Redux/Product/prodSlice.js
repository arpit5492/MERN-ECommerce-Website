import { createSlice } from "@reduxjs/toolkit";
import { getProds } from "./actions";

const initialState = {
  prods: [],
  status: "idle",
  error: ""
}

const prodSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    filterProds: (state, action) => {
      const filterData = action.payload.products.filter(elem => {
        return elem.cat_id === action.payload.itemData.id;
      });

      state.prods = filterData;
    },
    filterByPrice: (state, action) => {
      // console.log(action.payload);
      const applyFilterData = action.payload;
      const filteredData = applyFilterData.products.filter((elem) => {
        return elem.price >= applyFilterData.filterPrice.minPrice && elem.price <= applyFilterData.filterPrice.maxPrice;
      });

      state.prods = filteredData;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getProds.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getProds.fulfilled, (state, action) => {
        state.status = "Success";
        state.prods = action.payload;
      })
      .addCase(getProds.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  }
});

export const {filterProds, filterByPrice} = prodSlice.actions;
export default prodSlice.reducer;