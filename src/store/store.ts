
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import sections from '../components/Content/Navigation/slice/Slice.tsx';

const reducer = combineReducers({
	sections
});

const store = configureStore({
	reducer,
});

export default store;