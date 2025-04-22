import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "Yamuna", age: 21, email: "Yamuna@gmail.com" },
    { id: 2, name: "Bhaya", age: 21, email: "Bhaya@gmail.com" },
    { id: 3, name: "Savithri", age: 30, email: "Savithri@gmail.com" },
    { id: 4, name: "Neeraja", age: 17, email: "Neeraja@gmail.com" },
    { id: 5, name: "Chenchaiah", age: 30, email: "Chenchaiah@gmail.com" }
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