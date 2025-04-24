import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from './widgetSlice';
import sidebarReducer from './sidebarSlice';

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
    sidebar: sidebarReducer,
  },
});
