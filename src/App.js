import React from "react";
import ReactDom from "react-dom";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
    const [user, setUser] = React.useState('')

    if (!user) {
        return <Login setUser={setUser} />
    }

    return <>
        <Header user={user} setUser={setUser} />
    </>
}

export default App