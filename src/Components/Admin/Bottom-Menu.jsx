import { Dashboard, DesktopDevice, MoreHorizontalFill, Schedule } from 'akar-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomMenu() {
  return (
    <>
      <div class="bottom-menu fixed-bottom bg-white shadow-sm py-2 container-fluid">
        <div class="d-flex align-items-center justify-content-between gap-2">
          <NavLink to="/admin-academy" activeClassName="active" class="btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link">
            <Dashboard />
            <p class="fs-7">{/* {{ request()->is('admin-academy') ? 'Dashboard' : '' }} */}Dashboard</p>
          </NavLink>
          <NavLink to="/admin-academy/informasi" class="btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link" activeClassName="active">
            <DesktopDevice />
            {/* {{ request()->is('admin-academy/ecourses*') ? 'E-Course' : '' }} */}E-Course
          </NavLink>
          <NavLink to="/admin-academy/ecourses" class="btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link" activeClassName="active">
            <Schedule />
            {/* {{ request()->is('admin-academy/manajemen-event*') ? 'Event' : '' }} */}Event
          </NavLink>
          <a
            to="#"
            type="button"
            data-bs-target="#modalBottomMenu"
            data-bs-toggle="modal"
            class="btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link {{ request()->is('admin-academy/informasi*') || request()->is('admin-academy/artikel*') || request()->is('admin-academy/source-code*') || request()->is('admin-academy/instructor*') || request()->is('admin-academy/kategori*') || request()->is('admin-academy/members*') || request()->is('admin-academy/users*') ? 'active' : '' }}"
          >
            <MoreHorizontalFill />
            <p class="fs-7">
              Artikel
              {/* @if (request()->is('admin-academy/artikel*'))
                    Artikel
                @elseif(request()->is('admin-academy/source-code*'))
                    Source Code
                @elseif (request()->is('admin-academy/instructor*'))
                    Mentor
                @elseif (request()->is('admin-academy/kategori*'))
                    Kategori Event
                @elseif (request()->is('admin-academy/members*'))
                    Member
                @elseif (request()->is('admin-academy/users*'))
                    User
                @elseif (request()->is('admin-academy/informasi*'))
                    Informasi
                @else
                    Lainnya
                @endif */}
            </p>
          </a>
        </div>
      </div>

      <div class="modal fade" id="modalBottomMenu" tabindex="-1" aria-labelledby="modalBottomMenuLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <a to="{{ route('informasi.index') }}" class="btn d-block mb-2 {{ request()->is('admin-academy/informasi*') ? 'text-primary' : '' }}">
                Manajemen Informasi
              </a>
              <a to="{{ route('artikel.index') }}" class="btn d-block mb-2 {{ request()->is('admin-academy/artikel*') ? 'text-primary' : '' }}">
                Manajemen Artikel
              </a>
              <a to="{{ route('source-code.index') }}" class="btn d-block mb-2 {{ request()->is('admin-academy/source-code*') ? 'text-primary' : '' }}">
                Source Code
              </a>
              <a to="{{ route('instructor-ecourse.index') }}" class="btn d-block mb-2 {{ request()->is('admin-academy/instructor*') ? 'text-primary' : '' }}">
                Instructor E-Course
              </a>
              <a to="{{ route('kategori-ecourse.index') }}" class="btn d-block mb-2 {{ request()->is('admin-academy/kategori*') ? 'text-primary' : '' }}">
                Kategori E-Course
              </a>
              <a to="{{ route('members.index') }}" class="btn d-block mb-2 {{ request()->is('admin-academy/members*') ? 'text-primary' : '' }}">
                Member Platform
              </a>
              <a to="{{ route('users.index') }}" class="btn d-block mb-2 {{ request()->is('admin-academy/users*') ? 'text-primary' : '' }}">
                User Platform
              </a>
              <a to="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit()" class="btn d-block mb-2 text-danger mt-3">
                Log Out
              </a>
              <form action="{{ route('logout') }}" method="POST" id="logout-form" class="d-none"></form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
