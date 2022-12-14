import { createSlice } from '@reduxjs/toolkit';
import { ChampionDetailProps, ChampionProps } from 'utils/types';
import { csrFetch } from './csrFetch';

interface ChampionState {
	status: string;
	championList?: ChampionProps[];
	championDetail?: ChampionDetailProps;
	skinNumber: number;
}

const initialState: ChampionState = {
	status: 'complete',
	championList: [],
	skinNumber: 0
};

const champions = createSlice({
	name: 'champion',
	initialState,
	reducers: {
		setChampionList(state, action) {
			if (state.championList !== undefined) {
				state.championList.length = 0;
			}
			for (let id in action.payload) {
				state.championList?.push(action.payload[id]);
			}
			state.championList?.sort((a, b) => {
				return a.name < b.name ? -1 : 1;
			});
		},
		setSkinNumber(state, action) {
			state.skinNumber = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(csrFetch.getChampionDetail.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(csrFetch.getChampionDetail.fulfilled, (state, action) => {
				state.championDetail = action.payload.data.data;
				state.status = 'complete';
			})
			.addCase(csrFetch.getChampionDetail.rejected, (state) => {
				state.status = 'error';
			});
	}
});

export const { setChampionList, setSkinNumber } = champions.actions;

export default champions;
