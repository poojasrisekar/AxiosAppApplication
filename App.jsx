import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import ListPages from "./Components/ListPage";
// import Footer from "./Components/Footer";
import { UserContextProvider } from "./Components/context/UserContext";

function App() {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPages />} />
        </Routes>
      </UserContextProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
