import React from 'react';
import Admin from '../../../../Layouts/Admin';
import { ArrowLeft, Edit, Plus, TrashCan } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <div className="row align-items-start align-items-md-center justify-content-center justify-content-md-between gap-2 mb-3">
          <div className="col-md-8">
            <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
              <Link to="/admin-academy/artikel" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft />
              </Link>
              <h4 className="text-dark m-0">Manajemen Kategori Artikel</h4>
            </div>
          </div>
          <div className="col-md-3">
            <Link to="/admin-academy/kategori-artikel/create" className="btn btn-primary d-flex align-items-center gap-2 float-start float-md-end" style={{ width: 'max-content' }}>
              <Plus /> Buat Baru
            </Link>
          </div>
        </div>

        <div className="card border-0 mb-2 d-none d-md-block">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-6">Nama Kategori</div>
              <div className="col-3">Jumlah Artikel</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <div className="card border-0  mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1 mb-3 mb-md-0">1</div>
              <div className="col-11 col-md-6 mb-3 mb-md-0">Laravel</div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">1 Artikel</div>
              <div className="col-12 col-md-2">
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin-academy/kategori-artikel/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('kategori-artikel.destroy', $item->id) }}" method="post" className="d-inline">
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
    </Admin>
  );
}
