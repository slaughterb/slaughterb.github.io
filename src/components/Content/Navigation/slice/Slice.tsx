
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISectionsState } from './types.tsx';
import sections from '../../../../data/sections.json';

const initialState: ISectionsState = {
	sections: sections,
	currentSection: "about"
};

const sectionsSlice = createSlice({
	name: "sections",
	initialState,
	reducers: {
		setCurrentSection: (state, {payload}: PayloadAction<string>) => {
			state.currentSection = payload;
		},
	},
});

export const { setCurrentSection } = sectionsSlice.actions;

export default sectionsSlice.reducer;