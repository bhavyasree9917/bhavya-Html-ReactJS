import React, { useState } from "react";
function TodoForm({ addtodo }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim())
            addtodo(input.trim())
        setInput("")



    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="to do app" />
            <br />
            <button type="submit">submit</button>

        </form>

    </div>
}
export default TodoForm