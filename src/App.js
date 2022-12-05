
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import SignIn from './Components/SignIn';
import { AuthContextProvider } from './Context/AuthContext';
import Account from './Pages/Account';
import Protected from './Components/Protected';
import BlogView from './Components/BlogView'
import Create from './Components/Create';
import Update from './Components/Update';

function App() {
  return (
    <div >
 <BrowserRouter>

       <AuthContextProvider>

           <Navbar/>
           <Routes>
           <Route exact path='/' element={<Home/>} /> 
           <Route path='/signin' element={<SignIn/>}  /> 
           <Route path='/account' element={ <Protected> <Account/></Protected>}  /> 
           <Route path='/view:id' element={<BlogView/>}  /> 
           <Route path='/create' element={<Create/>}  /> 
           <Route path='/update:id1' element={<Update/>}  /> 
           </Routes>

       </AuthContextProvider>
          
 </BrowserRouter>
    </div>
  );
}

export default App;
