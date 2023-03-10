
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactsUs from './components/contactsUs';
import Homepage from './components/homepage';
import JobsListing from './components/jobsListing';
import NavBar from './components/navBar';

function App() {
  return (
    <div>
        {/* routs and with coresponding components */}
        <Routes>
          <Route element={<NavBar></NavBar>}>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/contact' element={<ContactsUs></ContactsUs>}></Route>
            <Route path='/jobs' element={<JobsListing></JobsListing>}></Route>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
