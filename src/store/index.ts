import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { version } from './csrFetch/version';
import champions from './champions';
import common from './common';
import items from './items';

const rootReducer = combineReducers({
	common: common.reducer,
	version: version.reducer,
	items: items.reducer,
	champions: champions.reducer
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
	devTools: true,
	enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
