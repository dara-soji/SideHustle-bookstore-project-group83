import { Route, Routes } from 'react-router';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Client from './pages/client/Client';


function App() {
    return (
        <div className="App">
          
        <Routes>

            <Route exact path="/" element={<Client />}/>
        

      </Routes>
        </div>
        );
    }

export default App;

