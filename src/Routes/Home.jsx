import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Beranda from '../Pages/Home/Beranda';
import Kelas from '../Pages/Home/ecourse/Kelas';
import KelasDetail from '../Pages/Home/ecourse/KelasDetail';
import Event from '../Pages/Home/event/Event';
import EventDetail from '../Pages/Home/event/EventDetail';
import SourceCode from '../Pages/Home/resources/SourceCode';
import SourceCodeDetail from '../Pages/Home/resources/SourceCode-Detail';
import Artikel from '../Pages/Home/articles/Artikel';
import ArtikelDetail from '../Pages/Home/articles/ArtikelDetail';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/kelas" element={<Kelas />} />
      <Route path="/kelas/kelas-detail" element={<KelasDetail />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/event-detail" element={<EventDetail />} />
      <Route path="/source-code" element={<SourceCode />} />
      <Route path="/source-code/detail" element={<SourceCodeDetail />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/artikel-detail" element={<ArtikelDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
