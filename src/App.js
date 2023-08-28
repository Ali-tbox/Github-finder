import React from 'react';
import Navbar from './components/layout/Layout/Navbar';
import Footer from './components/layout/Layout/Footer';
import Home from './components/layout/Layout/Pages/Home';
import About from './components/layout/Layout/Pages/About';
import NotFound from './components/layout/Layout/Pages/NotFound';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { GithubProvider } from './components/layout/Layout/Context/Github/GithubContext';
import { AlertProvider } from './components/layout/Layout/Context/Github/Alert/AlertContext';
import Alert from './components/layout/Layout/Alert';
import User from './components/layout/Layout/Pages/User';

function App() {
  
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route
                  path='/'
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home/>} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
