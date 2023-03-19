
import {Routes,Route,Navigate} from 'react-router-dom';
import About from './pages/About';
import Register from './pages/Register/Register';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Policy from './pages/Policy';



import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import "./App.css";


function App() {

	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  return (
    < >
  <Routes>
  
				
			

  {/* <Route path='/signup' element={<Signup/>}/> */}
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes> 
    </>
  );
}

export default App;
