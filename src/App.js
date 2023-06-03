import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import MyVideos from "./pages/My videos";
import Inscriptions from "./pages/Inscriptions";
import Shorts from "./pages/Shorts";
import { UserStorage } from "./Context/userContext";

function App() {
  const [ openMenu, setOpenMenu] = useState(false)

  return (
      <UserStorage>
      <BrowserRouter>
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu openMenu={openMenu}/>
        <div style={{  width: '100%', padding:'50px 50px 50px 70px', boxSizin:'border-box', display: 'flex' }}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/library' element={<Library/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/MyVideos' element={<MyVideos/>}/>
            <Route path='/Inscriptions' element={<Inscriptions/>}/>
            <Route path='/Shorts' element={<Shorts/>}/>
          </Routes>
        </div>
      </div>
    </div>
      </BrowserRouter>
      </UserStorage>

  );
}

export default App;
