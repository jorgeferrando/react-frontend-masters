import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">Adopt ME!</Link>
            </header>
            <div>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
