export const initialUsers = [
    {
      fname: "sree",
      lname: "sriramula",
      email: "sriramula@gmail.com",
      password: "123",
      id: 1,
    },
    {
      fname: "ram",
      lname: "potheneni",
      email: "ram@gmail.com",
      password: "123",
      id: 2,
    },
    {
      fname: "pspk",
      lname: "Konidela",
      email: "pspk@gmail.omc",
      password: "bhavya",
      id: 3,
    },
  ];
  export const userReducer = (state = initialUsers, action) => {
    switch (action.type) {
      case "CREATE_USER":
        return [...state, action.payload];
        break;
      case "DELETE_USER":
        return state.filter((usr) => {
          return usr.email !== action.payload.email;
        });
        break;
  
      case "UPDATE_USER":
          const newUsers = [...state];
          newUsers[action.payload.index] = action.payload.user
        return newUsers
        break;
  
      default:
        return state;
    }
  };
  