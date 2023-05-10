import React from 'react';
import Admin from '../../../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info, Plus } from 'akar-icons';

export default function Create() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/ecourses/show/section/list" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft/>
          </Link>
          <h5 className="text-dark m-0">Buat Materi E-Course bagian Introduction Kelas</h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('ecourse-content.store') }}" method="post" enctype="multipart/form-data">
              <input type="hidden" name="ecourse_section_id" value="{{ $ecourse_section->id }}" />
              <input type="hidden" name="ecourse_section_slug" value="{{ $ecourse_section->slug }}" />
              <input type="hidden" name="ecourse_slug" value="{{ $ecourse->slug }}" />
              <div className="mb-3">
                <label for="video">Upload Video</label>
                <input type="file" name="video" id="video" className="form-control" accept="video/mp4,video/x-m4v,video/*" />
              </div>
              <div className="mb-3">
                <label for="title">Judul</label>
                <input type="text" name="title" id="title" className="form-control" placeholder="Ex: HTML Dasar" required />
              </div>
              <div className="mb-3">
                <label for="description">Deskripsi</label>
                <textarea name="description" id="description" cols="30" rows="3" className="form-control"></textarea>
              </div>

              <div className="d-flex">
                <button className="btn btn-primary d-flex align-items-center gap-2" type="submit">
                  <Plus /> Simpan Baru
                </button>
              </div>
              <p className="mt-3 text-secondary d-flex align-items-center gap-2">
                <Info /> Proses pembuatan materi video akan sedikit membutuhkan waktu yg lumayan lama karena proses uploadnya.
              </p>
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
