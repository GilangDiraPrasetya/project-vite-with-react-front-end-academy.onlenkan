import { useState, useEffect } from 'react';
import Logo from '../../Images/logo-official-blue.png';
import { Dashboard, Info, DesktopDevice, PeopleMultiple, Schedule, PeopleGroup, Briefcase, Newspaper, Gear, ThumbsUp, Percentage } from 'akar-icons';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar p-3 pb-5 bg-white d-none d-md-block position-relative">
        <Link to="/" className="d-block mx-auto sidebar-logo mb-5">
          <img src={Logo} alt="" />
        </Link>

        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3">Basic</p>
        <NavLink to="/admin-academy/" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <Dashboard /> Dashboard
        </NavLink>
        <NavLink to="/admin-academy/informasi" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <Info /> Update Informasi
        </NavLink>
        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">E-Course</p>
        <NavLink to="/admin-academy/ecourses" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <DesktopDevice /> E-Course
        </NavLink>
        <NavLink to="/admin-academy/instructor-ecourse" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <PeopleMultiple /> Instructor
        </NavLink>
        <NavLink to="/admin-academy/manajemen-event" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <Schedule /> Event
        </NavLink>
        <NavLink to="/admin-academy/members" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <PeopleGroup /> Member Platform
        </NavLink>
        <NavLink to="/admin-academy/review-ecourse" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/review-ecourse' ? 'active' : ''}">
          <ThumbsUp /> Review
        </NavLink>
        <NavLink to="/admin-academy/vouchers" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <Percentage /> Voucher
        </NavLink>
        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Resource</p>
        <NavLink to="/admin-academy/source-code" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <Briefcase /> Source Code
        </NavLink>
        <NavLink to="/admin-academy/artikel" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <Newspaper /> Artikel
        </NavLink>
        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Manajemen Platform</p>
        <NavLink to="/admin-academy/users" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <PeopleMultiple /> User
        </NavLink>
        <NavLink to="/admin-academy/profil" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
          <Gear /> My Profile
        </NavLink>
      </aside>
    </>
  );
}
