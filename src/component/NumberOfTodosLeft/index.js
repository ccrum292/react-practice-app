import React, { useState } from "react";
import "./style.css";


function NumberOfTodosLeft() {
  const [todoCounter, setTodoCounter] = useState(0);

  return(
    <div>
      <h3>Number of Todos Left to Complete {todoCounter}</h3>
    </div>
  )
}

export default NumberOfTodosLeft;