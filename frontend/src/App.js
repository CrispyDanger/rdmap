import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Signup from './containers/Signup';
import Layout from './hocs/Layout';


function App() {


return(
  <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route path="/activate/:uid/token" element={<Activate />} />

      </Routes>
    </Layout>
  </BrowserRouter>
)

};


export default App;
