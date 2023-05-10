import React from 'react';
import '../../index.css';
import '../../bootstrap/bootstrap.css';
import '../../boxicons-2.1.4/css/boxicons.min.css';

export default function Style() {
  return (
    <>
      <div className="sidebar">
        <a className="sidebar-link" href="/">
          Link
        </a>
        <style>
          {`
          .sidebar .sidebar-link {
            font-size: 14px;
          }
        `}
        </style>
      </div>
    </>
  );
}
