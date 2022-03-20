import React from "react";
import ReactDom from "react-dom";
import Login from "./components/Login";

function App() {
    const [user, setUser] = React.useState('')

    if (!user) {
        return <Login setUser={setUser} />
    }
    return <div>app</div>
}

export default App