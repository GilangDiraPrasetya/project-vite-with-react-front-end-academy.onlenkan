import React from 'react';

export default function Script() {
  return (
    <>
      <script src="{{ url('assets/vendors/jquery/jquery.min.js') }}"></script>
      <script src="{{ url('assets/vendors/bootstrap/bootstrap.bundle.min.js') }}"></script>
      {/* <script>const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]') const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))</script> */}
      <script src="https://unpkg.com/akar-icons-fonts"></script>
      <script>
        $('document').ready(function(){' '}
        {$('form').on('submit', function () {
          $('button').attr('disabled', 'disabled');
          $('button').html("<i class='bx bx-loader-circle bx-spin bx-rotate-90'></i> Memuat...");
        })}
        )
      </script>
    </>
  );
}
