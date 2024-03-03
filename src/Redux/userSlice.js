
import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {
    users: []
}
export const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            
            state.users.push(data)
            console.log(action)
        }
    }

})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer