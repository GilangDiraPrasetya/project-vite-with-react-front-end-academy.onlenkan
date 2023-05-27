import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '.././Components/Home/Navbar';
import Footer from '.././Components/Home/Footer';

export default function Home({ children }) {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setIsAuthenticated(false);
    setName('');
    setEmail('');
  };
  
  return (
    <body className="homepage">
      <Navbar />

      {children}

      <Footer />

      {/* <script src="{{ url('assets/vendors/jquery/jquery.min.js') }}"></script> */}
      <script src=""></script>
      <script src="{{ url('assets/vendors/bootstrap/bootstrap.bundle.min.js') }}"></script>
      <script src="https://unpkg.com/akar-icons-fonts"></script>
      {/* <script>
        $('document').ready(function(){' '}
        {$('form').on('submit', function () {
          $('button').attr('disabled', 'disabled');
          $('button').html("<i class='bx bx-loader-circle bx-spin'></i> Memuat...");
        })}
        )
      </script> */}
    </body>
  );
}
