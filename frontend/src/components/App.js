import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import IssuesPage from "./IssuesPage";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/issues" element={<IssuesPage />} />
            </Routes>
        </BrowserRouter>
    );
}
