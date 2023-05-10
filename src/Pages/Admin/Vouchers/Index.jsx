import React from 'react';
import Admin from '../../../Layouts/Admin';
import { Edit, Plus, TrashCan } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Voucher</h5>
        <p className="text-secondary mb-2">Manajemen Voucher E-Course dan Event</p>
        <a href="{{ route('vouchers.create') }}" className="mb-4 btn btn-primary d-inline-flex align-items-center gap-2">
          <Plus /> Buat Baru
        </a>

        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-2">Kode Voucher</div>
              <div className="col-4">Untuk?</div>
              <div className="col-2">Harga Diskon</div>
              <div className="col-2">Status</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-12 col-md-2 mb-3 mb-md-0">YUNUSALMEIDA</div>
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <span className="text-primary fs-7">SALAH SATU E-COURSE</span> <br />
                Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride
              </div>
              <div className="col-12 col-md-2 mb-2 mb-md-0">Rp. 50,000</div>
              <div className="col-12 col-md-2 mb-2 mb-md-0">
                <div className="dropdown">
                  <button className="btn btn-light btn-sm dropdown-toggle d-flex align-items-center justify-conten-center text-capitalize" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ACTIVE
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <form action="{{ route('vouchers.update', $item->id) }}" method="post">
                        <input type="hidden" name="status" value="ACTIVE" />
                        <button type="submit" className="dropdown-item fs-7">
                          Aktifkan
                        </button>
                      </form>
                    </li>
                    <li>
                      <form action="{{ route('vouchers.update', $item->id) }}" method="post">
                        <input type="hidden" name="status" value="NONACTIVE" />
                        <button type="submit" className="dropdown-item fs-7">
                          Non Aktifkan
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-2 mb-2 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin-academy/vouchers/7/edit" className="btn btn-warning text-white btn-sm d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('vouchers.destroy', $item->id) }}" method="post" className="d-inline" data-bs-toggle="tooltip" data-bs-title="Voucher ini dipakai, untuk sementara tidak bisa hapus voucher yang telah digunakan.">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onclick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <style>
        .dropdown-toggle::after {
            display: none !important;
        }
    </style> */}
    </Admin>
  );
}
