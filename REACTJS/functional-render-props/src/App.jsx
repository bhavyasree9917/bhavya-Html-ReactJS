import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import FuncClickCounter from "./components/FuncClickCounter";
import FuncHoverCouter from "./components/FuncHoverCouter";
import FuncRenderPropsDemo from "./components/FuncRenderFuncRenderPropsDemo";

const NewComponent = () => {
  return <h2>New Component Message</h2>;
};

function App() {


  return (
    <>   
      
      <FuncRenderPropsDemo
        render={(count, handleIncrement, handleDecrement, handleReset) => (
          <FuncHoverCouter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
          />
        )}
      />
      <FuncRenderPropsDemo
        render={(count, handleIncrement, handleDecrement, handleReset) => (
          <FuncClickCounter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
          />
        )}
      />
    </>
  );
}

export default App;
