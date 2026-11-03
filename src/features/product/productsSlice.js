import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return await response.json();
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }

    return await response.json();
  }
);

const productsSlice = createSlice({
  name: 'products',

  initialState: {
    items: [],
    status: 'idle',
    error: null,
    selectedCategory: 'all',

    
    selectedProduct: null,
    detailStatus: 'idle',
    detailError: null,
  },

  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

     
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      
      .addCase(fetchProductById.pending, (state) => {
        state.detailStatus = 'loading';
        state.detailError = null;
        state.selectedProduct = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.detailStatus = 'failed';
        state.detailError = action.error.message;
      });
  },
});

export const { setCategory } = productsSlice.actions;

export default productsSlice.reducer;