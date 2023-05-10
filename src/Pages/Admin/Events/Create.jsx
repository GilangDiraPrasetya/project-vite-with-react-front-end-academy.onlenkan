import React from 'react';
import Admin from '../../../Layouts/Admin';
import { ArrowLeft, Plus } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Create() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/manajemen-event" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Buat Event Baru</h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('manajemen-event.store') }}" method="post" enctype="multipart/form-data">
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label for="title">Judul Event*</label>
                    <input type="text" name="title" id="title" className="form-control" placeholder="Ex: Kelas Belajar HTML dari 0" required autofocus />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="price">Harga Event*</label>
                    <input type="number" name="price" id="price" className="form-control" placeholder="Ex: 500000" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="date">Tanggal Event*</label>
                    <input type="date" name="date" id="date" className="form-control" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="time">Jam*</label>
                    <input type="text" name="time" id="time" className="form-control" placeholder="09:00 - 12:00" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="description">Deskripsi</label>
                    <textarea name="description" id="description" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="image">Gambar Utama</label>
                    <input type="file" name="image" id="image" className="form-control" accept="image/*" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="instructor_id">Pilih Mentor</label>
                    <select name="instructor_id" id="instructor_id" className="form-control">
                      <option value="Muhammad Yunus Almeida">Muhammad Yunus Almeida</option>
                      <option value="Adela Fatma Sari">Adela Fatma Sari</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="status">Status</label>
                    <select name="status" id="status" className="form-control" required>
                      <option value="">Pilih Status</option>
                      <option value="soon">Akan Datang</option>
                      <option value="ongoing">Sedang Berlangsung</option>
                      <option value="done">Selesai</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-primary d-flex align-items-center gap-2" type="submit">
                    <Plus />
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <script src="https://cdn.tiny.cloud/1/bkzhihdwuw99i70iz5u9348ydtexd08xhsqm10ovsvk37vxk/tinymce/6/tinymce.min.js"
        referrerpolicy="origin"></script>
    <script>
        tinymce.init({
            selector: '#description',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat ',
        });
    </script> */}
    </Admin>
  );
}
