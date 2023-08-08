import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OperationItem {
  mathResult: string;
  mathExpression: string;
  id: string;
}

interface OperationList {
  operationList: Array<OperationItem>;
}

interface Payload {
  mathResult: string;
  mathExpression: string;
}
let BASE_ID = 0;
const initialState: OperationList = { operationList: [] };

export const operationListSlice = createSlice({
  name: 'operationList',
  initialState,
  reducers: {
    addOperation(state, action: PayloadAction<Payload>) {
      BASE_ID += BASE_ID + 1;
      state.operationList.push({
        id: BASE_ID.toString(),
        mathResult: action.payload.mathResult,
        mathExpression: action.payload.mathExpression,
      });
    },
    removeOperation(state, action: PayloadAction<string>) {
      state.operationList = state.operationList.filter((item) => {
        return item.id !== action.payload;
      });
    },
    clearOperationList(state) {
      state.operationList = [];
    },
  },
});

export default operationListSlice.reducer;
export const { addOperation, removeOperation, clearOperationList } =
  operationListSlice.actions;
