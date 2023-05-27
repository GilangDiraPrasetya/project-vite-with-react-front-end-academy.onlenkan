import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5">
      <div className="container">
        <hr />
        <p className="fs-7 text-secondary text-center fw-light">Copyright &copy; {year} Onlenkan Studio. All right reserved</p>
      </div>
    </footer>
  );
}
