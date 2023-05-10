import React from 'react';
import Admin from '../../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChatEdit } from 'akar-icons';

export default function Edit() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/kategori-artikel" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Edit Kategori Laravel</h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('kategori-artikel.update', $category->id) }}" method="post" enctype="multipart/form-data">
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label for="name">Nama Kategori</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Ex: Full-Stack Web Developer." value="Laravel" autofocus required />
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-primary d-flex align-items-center gap-2" type="submit">
                    <ChatEdit />
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Admin>
  );
}
