import { Route, Routes } from 'react-router';
import './App.scss';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';
import Sidebar from './components/Sidebar/Sidebar';
import Client from './pages/client/Client';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';


function App() {
    return (
        <div className="App">
          
        <Routes>
            <Route exact path="/home" element={<Home />}/>
            <Route exact path="/signup" element={<Signup />}/>
            <Route exact path="/signin" element={<Signin />}/>
            
            <Route element={<ProtectedRoutes /> } >

                <Route exact path="/*" element={<Dashboard />}/>
            </Route>

      </Routes>
        </div>
        );
    }

export default App;

