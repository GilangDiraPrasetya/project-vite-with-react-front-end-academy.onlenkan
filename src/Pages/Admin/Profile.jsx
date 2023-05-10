import React from 'react';
import Admin from '../../Layouts/Admin';
import person from '../../Images/artikel/person1.png';

export default function Profile() {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Profil Setting</h5>
        <p className="text-secondary">Masukkan informasi yang valid agar proses belajar lebih mudah</p>

        <ul className="nav nav-pills mt-3 mb-2 my-md-5 gap-1 gap-md-4" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="btn btn-outline-secondary active" id="pills-personal-tab" data-bs-toggle="pill" data-bs-target="#pills-personal" type="button" role="tab" aria-controls="pills-personal" aria-selected="true">
              Personal Information
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="btn btn-outline-secondary" id="pills-password-tab" data-bs-toggle="pill" data-bs-target="#pills-password" type="button" role="tab" aria-controls="pills-password" aria-selected="false">
              Change Password
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab" tabindex="0">
            <div className="card border-0">
              <div className="card-body">
                <label for="avatar">Foto Kamu</label>

                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-5 mt-2">
                  <div className="row align-items-center gap-2">
                    <div className="col-md-2">
                      <img src={person} alt="{{ Auth::user()->name }}" className="rounded-circle" style={{ width: '34px', height: '34px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-md-10">
                      <p className="text-dark fs-7">Gilang Dira Prasetya</p>
                      <p className="text-secondary" style={{ fontSize: '12px' }}>
                        gilangdira123@gmail.com
                      </p>
                    </div>
                  </div>
                  <a href="#" data-bs-target="#modalPhoto" data-bs-toggle="modal" className="btn btn-primary btn-sm px-2 px-md-3">
                    Upload Foto
                  </a>
                </div>
                <hr className="my-4" />
                <form action="{{ route('profil.update', Auth::user()->id) }}" method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label for="name">Nama Lengkap</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Nama Lengkap Kamu" value="Gilang Dira Prasetya" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label for="email">Alamat Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Alamat Email Kamu" value="gilangdira123@gmail.com" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label for="phone_number">Nomor Telepon</label>
                        <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Nomor Handphone / WhatsApp" value="626768768768" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary px-3 px-md-4 py-2 d-inline" type="submit">
                        Simpan Perubahan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab" tabindex="0">
            <div className="card border-0">
              <div className="card-body">
                <form action="{{ route('profil.update', Auth::user()->id) }}" method="post">
                  <div className="mb-3">
                    <label for="password">Tulis Password Baru</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="*************" required />
                  </div>
                  <button className="btn btn-primary px-3 py-2 px-md-4" type="submit" onClick="return confirm('Kamu yakin ingin mengubah password ini?')">
                    Simpan Perubahan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="modalPhoto" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Ubah Foto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="{{ route('profil.update', Auth::user()->id) }}" method="post" enctype="multipart/form-data">
                <input type="file" name="photo" id="photo" accept="image/*" className="form-control mb-3" required />
                <button className="btn btn-primary" type="submit">
                  Upload Foto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <style>
        .btn-outline-secondary.active {
            background-color: #4564e5 !important;
            border-color: #4564e5 !important;
        }
    </style> */}
    </Admin>
  );
}
