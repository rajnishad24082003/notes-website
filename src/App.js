
import './App.css';
import Navbar from './components/Navbar';
import Firstcontend from './components/Firstcontend';
import Footer from './components/Footer';
import Secondcontend from './components/Secondcontend';
import Signin from './components/Signin';
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Students from './components/Students';

function App() {
  return (
<>

<BrowserRouter>
<Navbar/>
<Routes>
<Route exact path="/" element={<><Firstcontend/><Secondcontend/><Footer/></>}>
</Route>

<Route exact path="/students" element={<Students/>}>
</Route>

<Route exact path="/Signin" element={<Signin/>}>
</Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
