import React from 'react';
import Admin from '../../../../Layouts/Admin';
import { ArrowLeft, Edit, Plus, TrashCan } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <div className="row align-items-start align-items-md-center justify-content-center justify-content-md-between gap-2 mb-4">
          <div className="col-md-8">
            <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
              <Link to="/admin-academy/source-code" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft />
              </Link>
              <h5 className="text-dark m-0">Manajemen Kategori Source Code</h5>
            </div>
          </div>
          <div className="col-md-3">
            <Link to="/admin-academy/kategori-source-code/create" className="btn btn-primary d-flex align-items-center gap-2 float-start float-md-end" style={{ width: 'max-content' }}>
              <Plus /> Buat Baru
            </Link>
          </div>
        </div>

        <div className="card border-0 mb-2 d-none d-md-block">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-6">Nama Kategori</div>
              <div className="col-3">Jumlah E-Course</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <div className="card border-0  mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1 mb-3 mb-md-0">1</div>
              <div className="col-11 col-md-6 mb-3 mb-md-0">HTML CSS</div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">0 Source Code</div>
              <div className="col-12 col-md-2">
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin-academy/kategori-source-code/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('kategori-source-code.destroy', $item->id) }}" method="post" className="d-inline">
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
