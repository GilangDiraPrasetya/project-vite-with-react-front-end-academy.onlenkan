import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Beranda from '../Pages/Home/Home';
import Kelas from '../Pages/Home/ecourse/Index';
import KelasDetail from '../Pages/Home/ecourse/Detail';
import KelasCheckout from '../Pages/Home/ecourse/Checkout';
import Event from '../Pages/Home/event/Index';
import EventDetail from '../Pages/Home/event/Detail';
import SourceCode from '../Pages/Home/resources/Index';
import SourceCodeDetail from '../Pages/Home/resources/Detail';
import SourceCodeCheckout from '../Pages/Home/resources/Checkout';
import Artikel from '../Pages/Home/articles/Index';
import ArtikelDetail from '../Pages/Home/articles/Detail';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

export default function Home() {
  return (
    <Routes>
      <Route path="/" exact element={<Beranda />} />
      <Route path="/kelas" element={<Kelas />} />
      <Route path="/kelas/:slug" element={<KelasDetail />} />
      <Route path="/kelas/:slug/checkout" element={<KelasCheckout />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/event-detail" element={<EventDetail />} />
      <Route path="/source-code" element={<SourceCode />} />
      <Route path="/source-code/detail" element={<SourceCodeDetail />} />
      <Route path="/source-code/detail/checkout" element={<SourceCodeCheckout />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/artikel-detail" element={<ArtikelDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
