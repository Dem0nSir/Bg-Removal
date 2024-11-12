import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import BuyCredit from "./pages/BuyCredit.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/result" element={<Result/>}/>
                <Route path="/buy" element={<BuyCredit/>}/>
            </Routes>
        </>
    )
}

export default App
