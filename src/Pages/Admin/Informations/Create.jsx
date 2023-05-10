import Admin from '../../../Layouts/Admin';
import { ArrowLeft, Plus } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Create() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/informasi" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Buat Informasi Baru</h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('informasi.store') }}" method="post" enctype="multipart/form-data">
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label for="title">Judul Informasi*</label>
                    <input type="text" name="title" id="title" className="form-control" placeholder="Ex: Update info untuk kelas" required autofocus />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label for="information">Tentang Informasi*</label>
                    <select name="information" id="information" className="form-control" onChange="linkTarget(this.value)">
                      <option value="0">General</option>
                      <option value="ecourse">Informasi E-Course</option>
                      <option value="event">Informasi Event</option>
                      <option value="resource">Informasi Source Code</option>
                      <option value="article">Informasi Artikel</option>
                    </select>
                  </div>
                </div>
                <div id="ecourse" className="col-12 col-md-6 d-none">
                  <div className="mb-3">
                    <label for="link_target">Pilih E-Course</label>
                    <select name="link_target" id="link_target" className="form-control">
                      <option value="kelas">Semua E-Course</option>
                    </select>
                  </div>
                </div>
                <div id="resource" className="col-12 col-md-6 d-none">
                  <div className="mb-3">
                    <label for="link_target">Pilih Source Code</label>
                    <select name="link_target" id="link_target" className="form-control">
                      <option value="source-code">Semua Source Code</option>
                    </select>
                  </div>
                </div>
                <div id="event" className="col-12 col-md-6 d-none">
                  <div className="mb-3">
                    <label for="link_target">Pilih Event</label>
                    <select name="link_target" id="link_target" className="form-control">
                      <option value="event">Semua Event</option>
                    </select>
                  </div>
                </div>
                <div id="article" className="col-12 col-md-6 d-none">
                  <div className="mb-3">
                    <label for="link_target">Pilih Artikel</label>
                    <select name="link_target" id="link_target" className="form-control">
                      <option value="artikel">Semua Artikel</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="description">Deskripsi</label>
                    <textarea name="body" id="description" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="status">Status</label>
                    <select name="status" id="status" className="form-control" required>
                      <option value="">Pilih Status</option>
                      <option value="info">Info</option>
                      <option value="success">Success</option>
                      <option value="warning">Warning</option>
                      <option value="danger">Danger</option>
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
    </Admin>
  );
}
