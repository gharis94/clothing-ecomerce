import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Route/HomePage/HomePage';
import Nav from './Route/Nav/Nav'
import Shop from './Route/Shop/Shop'
import Auth from './Route/Auth/Auth'
import CheckOut from './Route/CheckOut/CheckOut';
import React,{useEffect} from 'react';
import {onAuthStateChangedListner} from './utils/firebase'
import {setCurrentUser} from './store/user/userAction'
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      dispatch(setCurrentUser(user))
      
    })

    return unsubscribe;
  }, [])
  
  return (
    <Routes className='app'>
      <Route path='/' element={<Nav/>}>
        <Route index element={<HomePage/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
}

export default App;
