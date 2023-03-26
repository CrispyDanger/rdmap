import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Activate from './containers/Activate';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Signup from './containers/Signup';
import Layout from './hocs/Layout';

import { Provider } from 'react-redux';
import store from './store';

function App() {


return(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectList />}/>
            <Route path="/projects/:slug/" element={<ProjectDetail />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            <Route path="/activate/:uid/token" element={<Activate />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
)

};


export default App;
