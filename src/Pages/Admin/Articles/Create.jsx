import React from 'react';
import Admin from '../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'akar-icons';

export default function Create() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/artikel" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Tambah Artikel Baru</h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('artikel.store') }}" method="post" enctype="multipart/form-data">
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="article_category_id">Kategori</label>
                    <select name="article_category_id" id="article_category_id" className="form-control">
                      <option value="{{ $item->id }}">Laravel</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="mb-3">
                    <label for="title">Judul Event*</label>
                    <input type="text" name="title" id="title" className="form-control" placeholder="Ex: Kiat belajar HTML dengan baik dan benar" required autofocus />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="short_description">Short Deskripsi*</label>
                    <input type="text" name="short_description" id="short_description" className="form-control" placeholder="Ex: Here are some useful tools for front-end development." required autofocus />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="description">Deskripsi</label>
                    <textarea name="body" id="description" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="mb-3">
                    <label for="image">Gambar Utama</label>
                    <input type="file" name="image" id="image" className="form-control" accept="image/*" required />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="mb-3">
                    <label for="status">Status</label>
                    <select name="status" id="status" className="form-control" required>
                      <option value="draft">Draft</option>
                      <option value="published">Publik</option>
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

      {/* @push('addon-script')
    <script src="https://cdn.tiny.cloud/1/bkzhihdwuw99i70iz5u9348ydtexd08xhsqm10ovsvk37vxk/tinymce/6/tinymce.min.js"
        referrerpolicy="origin"></script>
    <script>
        tinymce.init({
            selector: '#description',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat ',
        });
    </script>
@endpush */}
    </Admin>
  );
}
