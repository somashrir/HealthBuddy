
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile'
import { Home } from './Components/Home';
import { HomePage } from './Components/MainHomePage';
import Footer from './Components/Footer';
import Calorie from './Components/calorie';
import { FoodChart } from './Components/FoodChart';
import { Profiledetail } from './Components/Profiledetail';
import { MedicineTracker } from './Components/MedicineTracker';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiledetail" element={<Profiledetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/calories" element={<Calorie />} />
          <Route path="/FoodChart" element={<FoodChart />} />
          <Route path='/Medicine' element={<MedicineTracker/>
        }/>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
