import {createAsyncThunk , createSlice} from '@reduxjs/toolkit'
import {fetchProds, createProd , deleteProd , updateProd} from './prodAPI'

const initialState = {
    status: 'idle',
    prods: [],
};

// async
export const getDataAsync = createAsyncThunk(
    'prod/fetchProds',
    async () => {
        const response = await fetchProds();
        // console.log(response.data);
        return response.data;
        
    }
);

export const addDataAsync = createAsyncThunk(
    'prod/createProd',
    async (newData) => {
        const response = await createProd(newData);
        return response.data;
    }
);
export const delDataAsync = createAsyncThunk(
    'prod/deleteProd',
    async (id) => {
        const response = await deleteProd(id);
        return response.data;
    }
);
export const updDataAsync = createAsyncThunk(
    'prod/updateProd',
    async (newData) => {
        const response = await updateProd(newData , newData.id);
        return response.data;
    }
);

// sync
export const prodSlice = createSlice({
    name: 'prod',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // console.log(action.payload);
                state.prods = action.payload;
            });
    },
});


export const selectProds = (state) => state.prod.prods;
export default prodSlice.reducer;