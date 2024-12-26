import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (_,{rejectWitheValue})=>{
        try {
            const response = await axios.get('http://localhost:3000/product')
            console.log("API response Product list",response)
            return response.data           
        } catch (error) {
            return rejectWitheValue("Somthing went Wrong")
            
        }
    }
)

export const fetchProductDetails = createAsyncThunk(
    'product/fetchProductDetails',
    async (_,{rejectWitheValue})=>{
        try {
            const response = await axios.get("http://localhost:3000/productDetails")
            return response.data
            
        } catch (error) {
            console.log("Error",error)
            return rejectWitheValue("Somthing went Wrong")
            
        }
    }
)

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
              .addCase(fetchProduct.pending,(state)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(fetchProduct.fulfilled,(state,action)=>{
                state.loading = false;
                state.data = action.payload;
              })
              .addCase(fetchProduct.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
              })

        builder
           .addCase(fetchProductDetails.pending,(state)=>{
            state.loading = true;
            state.error = null;
           })
           .addCase(fetchProductDetails.fulfilled,(state,action)=>{

            console.log("Product details action.payload",action.payload)
            state.loading = false;
            state.data = action.payload;
           })
           .addCase(fetchProductDetails.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
           })

             
    }
})

export default productSlice.reducer