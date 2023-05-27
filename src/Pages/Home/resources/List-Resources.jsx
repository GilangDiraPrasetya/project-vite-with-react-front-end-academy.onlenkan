import React from 'react';
import { Link } from 'react-router-dom';
import code1 from '../../../Images/code/code1.png';

export default function ListResources() {
  return (
    <>
       <div class="col-md-3">
        <Link to="/source-code/detail" className="card border-0 card-value card-source-code rounded-3 text-decoration-none mb-3 shadow-none">
          <img src={code1} alt="{{ $item->title }}" className="card-img-top" />

          <div className="card-body p-0 py-3">
            <p className="fw-semibold text-primary mb-0" style={{ fontSize: '12px' }}>
              HTML CSS BOOTSTRAP
            </p>
            <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Website Travel Probvel</h6>
            <p className="text-secondary fs-7 mb-1">Rp. 50,000</p>
          </div>
        </Link>
      </div>
      <div class="col-md-3">
        <Link to="/source-code/detail" className="card border-0 card-value card-source-code rounded-3 text-decoration-none mb-3 shadow-none">
          <img src={code1} alt="{{ $item->title }}" className="card-img-top" />

          <div className="card-body p-0 py-3">
            <p className="fw-semibold text-primary mb-0" style={{ fontSize: '12px' }}>
              HTML CSS BOOTSTRAP
            </p>
            <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Website Travel Probvel</h6>
            <p className="text-secondary fs-7 mb-1">Rp. 50,000</p>
          </div>
        </Link>
      </div>
      <div class="col-md-3">
        <Link to="/source-code/detail" className="card border-0 card-value card-source-code rounded-3 text-decoration-none mb-3 shadow-none">
          <img src={code1} alt="{{ $item->title }}" className="card-img-top" />

          <div className="card-body p-0 py-3">
            <p className="fw-semibold text-primary mb-0" style={{ fontSize: '12px' }}>
              HTML CSS BOOTSTRAP
            </p>
            <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Website Travel Probvel</h6>
            <p className="text-secondary fs-7 mb-1">Rp. 50,000</p>
          </div>
        </Link>
      </div>
      <div class="col-md-3">
        <Link to="/source-code/detail" className="card border-0 card-value card-source-code rounded-3 text-decoration-none mb-3 shadow-none">
          <img src={code1} alt="{{ $item->title }}" className="card-img-top" />

          <div className="card-body p-0 py-3">
            <p className="fw-semibold text-primary mb-0" style={{ fontSize: '12px' }}>
              HTML CSS BOOTSTRAP
            </p>
            <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Website Travel Probvel</h6>
            <p className="text-secondary fs-7 mb-1">Rp. 50,000</p>
          </div>
        </Link>
      </div>
    </>
  );
}
