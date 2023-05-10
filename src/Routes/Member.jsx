import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../Pages/Member/Dashboard';

import Information from '../Pages/Member/Information';

import IndexEcourses from '../Pages/Member/Ecourses/index';
import LearningEcourses from '../Pages/Member/Ecourses/Learning';

import IndexEvents from '../Pages/Member/Events/Index';

import Review from '../Pages/Member/Review';

import IndexSourceCode from '../Pages/Member/Resources/Index';

import Transaction from '../Pages/Member/Transaction';

import Profile from '../Pages/Member/Profile';

export default function Member() {
  return (
    <Routes>
      <Route path="/member" element={<Dashboard />} />

      <Route path="/member/informasi-terbaru" element={<Information />} />

      <Route path="/member/kelas-saya" element={<IndexEcourses />} />
      <Route path="/member/kelas-saya/1" element={<LearningEcourses />} />

      <Route path="/member/event" element={<IndexEvents />} />

      <Route path="/member/beri-review" element={<Review />} />

      <Route path="/member/source-code" element={<IndexSourceCode />} />

      <Route path="/member/transaksi" element={<Transaction />} />

      <Route path="/member/profil-saya" element={<Profile />} />
    </Routes>
  );
}
