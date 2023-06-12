import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar';
import AbuelitosABP from './pages/abuelitosABP/AbuelitosABP';
import AcercaDe from './pages/acerca/AcercaDe';
import Registrate from './pages/registrate/Registrate';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import AreaCognitiva from './pages/areas/AreaCognitiva';
import AreaAfectiva from './pages/areas/AreaAfectiva';
import AreaFisica from './pages/areas/AreaFisica';
import AreaFuncional from './pages/areas/AreaFuncional';
import AreaSocial from './pages/areas/AreaSocial';

/*  <Route path="/pams" element={<PersonasAdultasMayores />} />   
 <Route path="/pams/add" element={<ManagePam />} />
<Route path="/pams/edit/:pam_id" element={<ManagePam />} /> */

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<AbuelitosABP />} />
                    <Route path="/acerca" element={<AcercaDe />} />
                    <Route path="/miPerfil" element={<MiPerfil />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/areacognitiva' element={<AreaCognitiva />} />
                    <Route path='/areafuncional' element={<AreaFuncional />} />
                    <Route path='/areaafectiva' element={<AreaAfectiva />} />
                    <Route path='/areasocial' element={<AreaSocial />} />
                    <Route path='/areafisica' element={<AreaFisica />} />
                </Routes>
                <BottomNavigationBar />
            </BrowserRouter>
        </div>
    );
}

export default App;