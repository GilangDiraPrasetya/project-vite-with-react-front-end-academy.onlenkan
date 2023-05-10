import React from 'react';
import Admin from '../../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'akar-icons';

export default function Create() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/ecourses/show/section/list" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Buat Section E-Course Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</h5>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-body p-4">
                <form action="{{ route('ecourse-section.store') }}" method="post">
                  <input type="hidden" name="ecourse_id" value="{{ $ecourse->id }}" />
                  <input type="hidden" name="ecourse_slug" value="{{ $ecourse->slug }}" />
                  <div className="mb-3">
                    <label for="title">Judul</label>
                    <input type="text" name="title" id="title" className="form-control" placeholder="Ex: HTML Dasar" autofocus required />
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-primary d-flex align-items-center gap-2" type="submit">
                      <Plus /> Simpan Baru
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* @push('addon-script')
    <script src="{{ url('assets/vendors/tinymce/jquery.tinymce.min.js') }}" data-pagespeed-no-defer></script>
    <script src="{{ url('assets/vendors/tinymce/tinymce.min.js') }}" data-pagespeed-no-defer></script>
    <script>
        tinymce.init({
            selector: '#description',
        })
    </script>
@endpush */}
    </Admin>
  );
}
