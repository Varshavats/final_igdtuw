import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BatchTable from './NewBatchTable2024';
import BatchTable2025 from './NewBatchTable2025';
import Contact from './Contact';
import CoordinatorHeads from './Coordinator';
import FacultyDirectory from './Faculty';
import Hod from './Hod';
import HomePage from './Homepage';
import Pic from './Pic';
import './index.css';
import Carousel from "./Crousel";
import Companies from "./Companies";

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        </Route>
        <Route path="/hod" element={<Hod/>}>
        </Route>
        <Route path="/studentcoordinator" element={<CoordinatorHeads/>}>
        </Route>
        <Route path="/faculty" element={<FacultyDirectory/>}>
        </Route>
        <Route path="/pic" element={<Pic/>}>
        </Route>
        <Route path="/achieve" element={<Carousel/>}>
        </Route>
        <Route path="/contact" element={<Contact/>}>
        </Route>
        <Route path="/2019-2024" element={<BatchTable/>}>
        </Route>
        <Route path="/2020-2025" element={<BatchTable2025/>}>
        </Route>
        <Route path="/pastrecruiters" element={<Companies />}>
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;    
