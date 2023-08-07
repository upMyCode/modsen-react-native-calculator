import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OperationItem {
  context: string;
  id: string;
}

interface OperationList {
  operationList: Array<OperationItem>;
}

const initialState: OperationList = { operationList: [] };

export const operationListSlice = createSlice({
  name: 'operationList',
  initialState,
  reducers: {
    addOperation(state, action: PayloadAction<string>) {
      state.operationList.push({
        id: (state.operationList.length + 1).toString(),
        context: action.payload,
      });
    },
    removeOperation(state, action: PayloadAction<string>) {
      state.operationList = state.operationList.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export default operationListSlice.reducer;
export const { addOperation, removeOperation } = operationListSlice.actions;
