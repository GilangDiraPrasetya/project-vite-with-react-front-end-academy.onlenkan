import Admin from '../../../Layouts/Admin';
import { ArrowLeft, Plus } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/ecourses" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Edit Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('ecourses.store') }}" method="post" enctype="multipart/form-data">
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="ecourse_category_id">Kategori</label>
                    <select name="ecourse_category_id" id="ecourse_category_id" className="form-control">
                      <option value="{{ $category->id }}">Full-Stack Web Developer</option>
                      <option value="{{ $category->id }}">Front-End Web Developer</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="mb-3">
                    <label for="title">Judul Ecourse*</label>
                    <input type="text" name="title" id="title" className="form-control" value="Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride" placeholder="Ex: Kelas Belajar HTML dari 0" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="price">Harga Ecourse*</label>
                    <input type="number" name="price" id="price" className="form-control" value="350000" placeholder="Ex: 500000" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="price_discount">Harga Diskon (Jika Ada)</label>
                    <input type="number" name="price_discount" id="price_discount" className="form-control" value="0" placeholder="Ex: 400000" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="description">Deskripsi</label>
                    <textarea name="description" id="description" cols="30" rows="10" className="form-control">
                      Deskripsi Pada E-Course Fullstack Web Developer ini kamu akan dibimbing menjadi programmer, tentunya menjadi full-stack website developer. Kamu akan diajari dari 0 banget atau pemula hingga mahir membuat sebuah
                      aplikasi website. Tenang saja! Jika kamu kesulitan dalam memahami materinya, kamu bisa menanyakan langsung kepada pembimbing kelas melalui grup atau chat pribadi. Tools yang digunakan - Visual Studio Code - XAMPP - Web
                      Browser - Composer - NodeJS & NPM - Bootstrap - Dsb.
                    </textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="image">Gambar Utama</label>
                    <input type="file" name="image" id="image" className="form-control" accept="image/*" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="instructor_id">Pilih Mentor</label>
                    <select name="instructor_id" id="instructor_id" className="form-control">
                      <option value="{{ $instructor->id }}">Muhammad Yunus Almeida</option>
                      <option value="{{ $instructor->id }}">Adela Fatma Sari</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="link_group">Link Group</label>
                    <input type="text" name="link_group" id="link_group" className="form-control" value="https://t.me/+zLuDD51yH9E2YjM1" />
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
