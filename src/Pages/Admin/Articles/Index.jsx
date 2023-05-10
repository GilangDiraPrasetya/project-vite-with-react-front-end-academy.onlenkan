import React from 'react';
import Admin from '../../../Layouts/Admin';
import { AlignLeft, Edit, Plus, TrashCan } from 'akar-icons';
import artikel from '../../../Images/artikel/artikel1.png';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <h4 className="text-dark">Manajemen Artikel</h4>
        <p className="text-secondary mb-3">Manajemen Artikel Onlenkan Academy</p>
        <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
          <Link to="/admin-academy/artikel/create" className="btn btn-primary d-flex align-items-center gap-2">
            <Plus /> Buat Baru
          </Link>
          <Link to="/admin-academy/kategori-artikel" className="btn btn-info text-white d-flex align-items-center gap-2">
            <AlignLeft /> Kategori
          </Link>
        </div>

        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-2">Tanggal Publish</div>
              <div className="col-4">Judul</div>
              <div className="col-2">Penulis</div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                <img src={artikel} style={{ height: 'auto', objectFit: 'cover' }} className="rounded" alt="{{ $item->title }}" />
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">04 Apr 2023</div>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <Link to="/admin-academy/artikel/3">Apa yang baru di Laravel 10</Link> <br />
                <p className="text-secondary fs-7 mb-0">Laravel</p>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0 fs-7">Muhammad Yunus</div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <div className="dropdown">
                    <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Publik
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <form action="{{ route('artikel.update', $item->id) }}" method="post">
                          <input type="hidden" name="status" value="draft" />
                          <button type="submit" className="dropdown-item">
                            Draft
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="{{ route('artikel.update', $item->id) }}" method="post">
                          <input type="hidden" name="status" value="published" />
                          <button type="submit" className="dropdown-item">
                            Publik
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                  <Link to="/admin-academy/artikel/3/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('artikel.destroy', $item->id) }}" method="post" className="d-inline">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onClick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Admin>
  );
}
