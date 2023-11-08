import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User {
  name: string|undefined
}

const initialState: User = {
  name:undefined,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string | undefined>) => {
      state.name = action.payload
    },
  },
})

export const { setUserName } = userSlice.actions

export default userSlice.reducer