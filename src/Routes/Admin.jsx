import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../Pages/Admin/Dashbord';

import IndexInformations from '../Pages/Admin/Informations/Index';
import CreateInformations from '../Pages/Admin/Informations/Create';

import IndexEcourses from '../Pages/Admin/Ecourses/Index';
import CreateEcourses from '../Pages/Admin/Ecourses/Create';
import ShowEcourses from '../Pages/Admin/Ecourses/Show';
import EditEcourses from '../Pages/Admin/Ecourses/Edit';

import IndexSectionEcourses from '../Pages/Admin/Ecourses/Sections/Index';
import CreateSectionEcourses from '../Pages/Admin/Ecourses/Sections/Create';
import EditSectionEcourses from '../Pages/Admin/Ecourses/Sections/Edit';

import IndexContentsEcourses from '../Pages/Admin/Ecourses/Sections/Contents/Index';
import CreateContentsEcourses from '../Pages/Admin/Ecourses/Sections/Contents/Create';
import EditContentsEcourses from '../Pages/Admin/Ecourses/Sections/Contents/Edit';

import IndexEcoursesCategories from '../Pages/Admin/Ecourses/Categories/Index';
import CreateEcoursesCategories from '../Pages/Admin/Ecourses/Categories/Create';
import EditEcoursesCategories from '../Pages/Admin/Ecourses/Categories/Edit';

import IndexInstructorEcourses from '../Pages/Admin/Ecourses/Instructors/Index';
import CreateInstructorEcourses from '../Pages/Admin/Ecourses/Instructors/Create';
import EditInstructorEcourses from '../Pages/Admin/Ecourses/Instructors/Edit';

import IndexEvents from '../Pages/Admin/Events/Index';
import CreateEvents from '../Pages/Admin/Events/Create';
import ShowEvents from '../Pages/Admin/Events/Show';
import EditEvents from '../Pages/Admin/Events/Edit';

import IndexMembers from '../Pages/Admin/Ecourses/Members/Index';
import EditMembers from '../Pages/Admin/Ecourses/Members/Edit';

import IndexReviews from '../Pages/Admin/Reviews/Index';

import IndexVouchers from '../Pages/Admin/Vouchers/Index';
import EditVouchers from '../Pages/Admin/Vouchers/Edit';

import IndexSourcecode from '../Pages/Admin/Resources/Index';
import CreateSourcecode from '../Pages/Admin/Resources/Create';
import EditSourcecode from '../Pages/Admin/Resources/Edit';
import RecycleSourcecode from '../Pages/Admin/Resources/Recycle';
import ShowSourcecode from '../Pages/Admin/Resources/Show';

import IndexSourcecodeCategories from '../Pages/Admin/Resources/Categories/Index';
import CreateSourcecodeCategories from '../Pages/Admin/Resources/Categories/Create';
import EditSourcecodeCategories from '../Pages/Admin/Resources/Categories/Edit';

import IndexArtikel from '../Pages/Admin/Articles/Index';
import CreateArtikel from '../Pages/Admin/Articles/Create';
import EditArtikel from '../Pages/Admin/Articles/Edit';
import ShowArtikel from '../Pages/Admin/Articles/Show';

import IndexArtikelCategories from '../Pages/Admin/Articles/Categories/Index';
import EditArtikelCategories from '../Pages/Admin/Articles/Categories/Edit';
import CreateArtikelCategories from '../Pages/Admin/Articles/Categories/Create';

import IndexUsers from '../Pages/Admin/Users/Index';
import CreateUsers from '../Pages/Admin/Users/Create';
import EditUsers from '../Pages/Admin/Users/Edit';

import IndexProfile from '../Pages/Admin/Profile';

export default function Admin() {
  return (
    <Routes>
      <Route path="/admin-academy" element={<Dashboard />} />

      <Route path="/admin-academy/informasi" element={<IndexInformations />} />
      <Route path="/admin-academy/informasi/create" element={<CreateInformations />} />

      <Route path="/admin-academy/ecourses" element={<IndexEcourses />} />
      <Route path="/admin-academy/ecourses/create" element={<CreateEcourses />} />
      <Route path="/admin-academy/ecourses/show" element={<ShowEcourses />} />
      <Route path="/admin-academy/ecourses/1/edit" element={<EditEcourses />} />

      <Route path="/admin-academy/ecourses/show/section/list" element={<IndexSectionEcourses />} />
      <Route path="/admin-academy/ecourses/show/section/list/create" element={<CreateSectionEcourses />} />
      <Route path="/admin-academy/ecourses/show/section/list/1/edit" element={<EditSectionEcourses />} />

      <Route path="/admin-academy/ecourses/show/section/list/materi/1" element={<IndexContentsEcourses />} />
      <Route path="/admin-academy/ecourses/show/section/list/materi/1/create" element={<CreateContentsEcourses />} />
      <Route path="/admin-academy/ecourses/show/section/list/materi/1/1/edit" element={<EditContentsEcourses />} />

      <Route path="/admin-academy/kategori-ecourse" element={<IndexEcoursesCategories />} />
      <Route path="/admin-academy/kategori-ecourse/create" element={<CreateEcoursesCategories />} />
      <Route path="/admin-academy/kategori-ecourse/1/edit" element={<EditEcoursesCategories />} />

      <Route path="/admin-academy/instructor-ecourse" element={<IndexInstructorEcourses />} />
      <Route path="/admin-academy/instructor-ecourse/create" element={<CreateInstructorEcourses />} />
      <Route path="/admin-academy/instructor-ecourse/1/edit" element={<EditInstructorEcourses />} />

      <Route path="/admin-academy/manajemen-event" element={<IndexEvents />} />
      <Route path="/admin-academy/manajemen-event/create" element={<CreateEvents />} />
      <Route path="/admin-academy/manajemen-event/show" element={<ShowEvents />} />
      <Route path="/admin-academy/manajemen-event/4/edit" element={<EditEvents />} />

      <Route path="/admin-academy/members" element={<IndexMembers />} />
      <Route path="/academy.onlenkan.com/admin-academy/users/7/edit" element={<EditMembers />} />

      <Route path="/admin-academy/review-ecourse" element={<IndexReviews />} />

      <Route path="/admin-academy/vouchers" element={<IndexVouchers />} />
      <Route path="/admin-academy/vouchers/7/edit" element={<EditVouchers />} />

      <Route path="/admin-academy/source-code" element={<IndexSourcecode />} />
      <Route path="/admin-academy/source-code/create" element={<CreateSourcecode />} />
      <Route path="/admin-academy/source-code/5/edit" element={<EditSourcecode />} />
      <Route path="/admin-academy/sampah/source-code" element={<RecycleSourcecode />} />
      <Route path="/admin-academy/source-code/5" element={<ShowSourcecode />} />

      <Route path="/admin-academy/kategori-source-code" element={<IndexSourcecodeCategories />} />
      <Route path="/admin-academy/kategori-source-code/create" element={<CreateSourcecodeCategories />} />
      <Route path="/admin-academy/kategori-source-code/1/edit" element={<EditSourcecodeCategories />} />

      <Route path="/admin-academy/artikel" element={<IndexArtikel />} />
      <Route path="/admin-academy/artikel/create" element={<CreateArtikel />} />
      <Route path="/admin-academy/artikel/3/edit" element={<EditArtikel />} />
      <Route path="/admin-academy/artikel/3" element={<ShowArtikel />} />

      <Route path="/admin-academy/kategori-artikel" element={<IndexArtikelCategories />} />
      <Route path="/admin-academy/kategori-artikel/create" element={<CreateArtikelCategories />} />
      <Route path="/admin-academy/kategori-artikel/1/edit" element={<EditArtikelCategories />} />

      <Route path="/admin-academy/users" element={<IndexUsers />} />
      <Route path="/admin-academy/users/create" element={<CreateUsers />} />
      <Route path="/admin-academy/users/1/edit" element={<EditUsers />} />

      <Route path="/admin-academy/profil" element={<IndexProfile />} />
    </Routes>
  );
}
