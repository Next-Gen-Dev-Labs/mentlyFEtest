import { createSlice } from '@reduxjs/toolkit';
import {widget} from '@/data/dashboard.json'

const initialState = {
  isWidgetVisible: false,
  checkboxes: widget.sidebar.checkboxes
};
const widgetSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    toggleWidget: (state) => {
      state.showWidget = !state.showWidget;
    },
    setWidgetVisibility: (state, action) => {
      state.showWidget = action.payload;
    },
    updateCheckbox: (state, action) => {
      // action.payload is expected to be the updated array
      state.checkboxes = action.payload;
    }
  
  }
});

export const { toggleWidget, setWidgetVisibility,updateCheckbox } = widgetSlice.actions;
export default widgetSlice.reducer;
