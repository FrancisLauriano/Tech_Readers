import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from '../pages/LandingPage/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage';
import OtherProfilePage from '../pages/OthersProfilePage/OthersProfilePage';
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage';
import ChatPage from '../pages/ChatPage/ChatPage';
import HomePage from '../pages/HomePage/HomePage';
import MyAdsPage from '../pages/MyAdsPage/MyAdsPage';
import OtherUserAdsPage from '../pages/OtherUserAdsPage/OtherUserAdsPage';
import CriarAnuncio from '../pages/CriarAnuncio/CriarAnuncio';
import AtualizarAnuncio from '../pages/AtualizarAnuncio/AtualizarAnuncio';
import NotFound from '../pages/NotFound/NotFound';
import AllChatPage from '../pages/AllChatPage/AllChatPage'; 

const RoutesComponent = () => (
  <Router>
    <Routes> 
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/my-profile" element={<MyProfilePage />} />
      <Route path="/other-profile/:id" element={<OtherProfilePage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/meus-anuncios" element={<MyAdsPage />} />
      <Route path="/anuncios/:id" element={<OtherUserAdsPage />} />
      <Route path="/criar-anuncio" element={<CriarAnuncio />} />
      <Route path="/editar-anuncio/:id" element={<AtualizarAnuncio />} />
      <Route path="*" element={<NotFound />} /> 
      <Route path="/all-chats" element={<AllChatPage />} />
    </Routes>
  </Router>
);

export default RoutesComponent;



