import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import menus from './Menu-Data';

import Logo from '../../assets/images/logo/logo-official-blue.png';

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar p-3 pb-5 bg-white d-none d-md-block position-relative">
        <Link to="/" className="d-block mx-auto sidebar-logo mb-5">
          <img src={Logo} alt="" />
        </Link>

        {menus.map((menu, key) => (
          <React.Fragment key={key}>
            <p className="text-secondary fs-7 fw-semibold mb-2 ms-3">{menu.subMenu}</p>
            {menu.links.map((link, index) => (
              <NavLink key={index} to={link.to} activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
                <i className={link.icon}></i>
                {link.name}
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </aside>
    </>
  );
}
