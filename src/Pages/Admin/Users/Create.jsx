import React from 'react';
import Admin from '../../../Layouts/Admin';
import { ArrowLeft, Plus } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Create() {
  return (
    <Admin>
      <section class="py-4">
        <div class="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/users" class="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 class="text-dark m-0">Tambah User Baru</h5>
        </div>

        <div class="card border-0 mt-4">
          <div class="card-body p-4">
            <form action="{{ route('users.store') }}" method="post" enctype="multipart/form-data">
              <div class="row">
                <div class="col-md-8">
                  <div class="mb-3">
                    <label for="name">Nama Lengkap</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Ex: Muhammad Yunus Almeida etc." autofocus required />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="photo">Foto</label>
                    <input type="file" name="photo" id="photo" class="form-control" accept="image/*" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="email">Alamat Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="Ex: yunus@onlenkan.com etc." required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="phone_number">Nomor WhatsApp</label>
                    <input type="number" name="phone_number" id="phone_number" class="form-control" placeholder="Ex: 628123456789" required />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="****************" required />
                  </div>
                </div>
                <div class="d-flex align-items-center gap-3 mt-4">
                  <button class="btn btn-primary d-flex align-items-center gap-2" type="submit">
                    <Plus />
                    Simpan
                  </button>
                  <Link to="/admin-academy/users" class="btn btn-light">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Admin>
  );
}
