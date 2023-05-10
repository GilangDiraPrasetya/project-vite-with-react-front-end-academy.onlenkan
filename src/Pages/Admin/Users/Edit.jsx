import React from 'react';
import Admin from '../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'akar-icons';

export default function Edit() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/users" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Edit User Muhammad Yunus</h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('users.update', $user->id) }}" method="post" enctype="multipart/form-data">
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <label for="name">Nama Lengkap</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Ex: Muhammad Yunus Almeida etc." value="Muhammad Yunus" autofocus required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="photo">Foto</label>
                    <input type="file" name="photo" id="photo" className="form-control" accept="image/*" />
                    <span className="fs-7 text-secondary">Don't fill it if you don't want to change the photo</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="email">Alamat Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Ex: yunus@onlenkan.com etc." value="muhammadyunusalmeida@gmail.com" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="phone_number">Nomor WhatsApp</label>
                    <input type="number" name="phone_number" id="phone_number" className="form-control" placeholder="Ex: 628123456789" value="6281336210025" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="****************" />
                    <span className="fs-7 text-secondary">don't fill it if you don't want to change the password</span>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-primary d-flex align-items-center gap-2" type="submit">
                    <Plus />
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
