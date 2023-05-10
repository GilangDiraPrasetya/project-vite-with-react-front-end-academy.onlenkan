import React from 'react';

import Navbar from '.././Components/Home/Navbar';
import Footer from '.././Components/Home/Footer';

export default function Home({ children }) {
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
