import React, { Component, useState } from 'react'
//import React, {useState} from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainerJadwalKegiatan from "./containers/HomeContainerJadwalKegiatan";
import CreateContainerJadwalKegiatan from "./containers/CreateContainerJadwalKegiatan";
import EditContainerJadwalKegiatan from "./containers/EditContainerJadwalKegiatan";
import DetailContainerJadwalKegiatan from "./containers/DetailContainerJadwalKegiatan";
import Galeri from './components/Fungsional/Galeri';
import { CartContext } from './CartContext';

function App() {
  const [value, setValue] = useState(0)

    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent  />
        <BrowserRouter>
        <CartContext.Provider value = {{value, setValue}} >
        <Route path="/jadwalkegiatan" exact component={HomeContainerJadwalKegiatan} />
          
        <Route path="/createjadwalkegiatan" exact component={CreateContainerJadwalKegiatan} />
          
        <Route path="/edit/:id" exact component={EditContainerJadwalKegiatan} />
          
        <Route path="/detail/:id" exact component={DetailContainerJadwalKegiatan} />

        <Route path="/galeri"  exact component={Galeri} />

      </CartContext.Provider>
        </BrowserRouter>
      </div>
    )
  }

  export default App;