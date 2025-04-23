import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "pawan", age: 34, email: "pawan@gmail.com" },
    { id: 2, name: "ram", age: 28, email: "ram@gmail.com" },
    { id: 3, name: "sree", age: 18, email: "Sreekonidela@gmail.com" },
    { id: 4, name: "bhavya", age: 22, email: "bhavyasree@gmail.com" },
    { id: 5, name: "kalyan", age: 52, email: "kalyan@gmail.com" }
  ]
};


const StudentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    deleteUserAction: (state, action) => {
      state.students.splice(action.payload.index, 1);
    },
    addUserAction: (state, action) => {
      state.students.push(action.payload);
    },
    updateUserAction: (state, action) => {
      const { index, student } = action.payload;
      state.students[index] = student;
    }
  }
});

export default StudentsSlice.reducer;
export const { deleteUserAction, addUserAction, updateUserAction } = StudentsSlice.actions;