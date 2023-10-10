import { ICard } from './../../interfaces/ICard';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface CardsState {
	cards: ICard[];
	isLoading: boolean;
	error: string;
}

const initialState: CardsState = {
	cards: [],
	isLoading: false,
	error: '',
};

export const fetchCards = createAsyncThunk('card/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await fetch('http://localhost:3001/cards');
		return response.json();
	} catch (e) {
		return thunkAPI.rejectWithValue('Не удалось загрузить карточки');
	}
});

export const cardsSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCards.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCards.fulfilled, (state, action: PayloadAction<ICard[]>) => {
				state.isLoading = false;
				state.error = '';
				state.cards = action.payload;
			})
			.addCase(fetchCards.rejected, (state, action: PayloadAction<string | any>) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addDefaultCase(() => {});
	},
});
