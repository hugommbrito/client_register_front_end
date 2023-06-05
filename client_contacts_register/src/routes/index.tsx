import { Routes, Route,  } from "react-router-dom"
import { Client, } from "../pages/client"
import { Register } from "../pages/register"

export const RoutsMain = () => {

    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/consult" element={<Client />} />
        </Routes>
    )
}