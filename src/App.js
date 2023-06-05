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
                </Routes>
                <BottomNavigationBar />
            </BrowserRouter>
        </div>
    );
}

export default App;