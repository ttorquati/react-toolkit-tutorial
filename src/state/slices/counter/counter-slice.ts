import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
    isLoading: boolean
}

const initialState: CounterState = {
    value: 0,
    isLoading: false
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementByOne: (state) => {
            state.value += 1
        },
        incrementByFive: (state) => {
            state.value += 5
        },
        incrementByTen: (state) => {
            state.value += 10
        },
        decrementByOne: (state) => {
            state.value -= 1
        },
        decrementByFive: (state) => {
            state.value -= 5
        },
        decrementByTen: (state) => {
            state.value -= 10
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementByAmountAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(incrementByAmountAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.isLoading = false
                state.value += action.payload
            })
            .addCase(decrementByAmountAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(decrementByAmountAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.isLoading = false
                state.value -= action.payload
            })
    },
})

export const incrementByAmountAsync = createAsyncThunk(
    "counter/incrementByAmountAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount
    }
)

export const decrementByAmountAsync = createAsyncThunk(
    "counter/decrementByAmountAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount
    }
)

export const { incrementByOne, incrementByFive, incrementByTen, decrementByOne, decrementByFive, decrementByTen, incrementByAmount, decrementByAmount } = counterSlice.actions
export const counterReducer = counterSlice.reducer