import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <>
      <footer class="py-5">
        <div class="container">
          <hr />
          <p class="fs-7 text-secondary text-center fw-light">Copyright &copy; {year} Onlenkan Studio. All right reserved</p>
        </div>
      </footer>
    </>
  );
}
