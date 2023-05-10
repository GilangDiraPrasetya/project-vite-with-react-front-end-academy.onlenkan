import { AlignLeft, Edit, PeopleMultiple, Plus, TrashCan } from 'akar-icons';
import Admin from '../../../Layouts/Admin';
import kelas1 from '../../../Images/kelas/kelas1.jpg';
import kelas2 from '../../../Images/kelas/kelas2.jpg';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Manajemen Ecourse</h5>
        <p className="text-secondary mb-3">Manajemen Ecourse Onlenkan Academy</p>
        <div className="d-flex align-items-center gap-2 flex-wrap mb-4">
          <Link to="/admin-academy/ecourses/create" className="btn btn-primary d-inline-flex align-items-center gap-2">
            <Plus /> Buat Baru
          </Link>
          <Link to="/admin-academy/kategori-ecourse" className="btn btn-info text-white d-inline-flex align-items-center gap-2">
            <AlignLeft /> Kategori
          </Link>
          <Link to="/admin-academy/instructor-ecourse" className="btn btn-success d-inline-flex align-items-center gap-2">
            <PeopleMultiple /> Instructor
          </Link>
        </div>
        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-5">Informasi E-Course</div>
              <div className="col-2">Harga</div>
              <div className="col-2">Jumlah Member</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                <img src={kelas1} style={{ height: 'auto', objectFit: 'cover' }} className="rounded" alt="{{ $item->title }}" />
              </div>
              <div className="col-12 col-md-5 mb-3 mb-md-0">
                <Link to="/admin-academy/ecourses/show">Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</Link>
                <br />
                <p className="text-secondary fs-7">Full-Stack Web Developer</p>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">Rp. 350,000</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">29 Member</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin-academy/ecourses/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('ecourses.destroy', $item->id) }}" method="post" className="d-inline">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onclick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                <img src={kelas2} style={{ height: 'auto', objectFit: 'cover' }} className="rounded" alt="{{ $item->title }}" />
              </div>
              <div className="col-12 col-md-5 mb-3 mb-md-0">
                <a href="{{ route('ecourses.show', $item->slug) }}">Mastering Laravel | From Zero to Hero</a>
                <br />
                <p className="text-secondary fs-7">Full-Stack Web Developer</p>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">Rp. 300,000</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">5 Member</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <Link to="{{ route('ecourses.edit', $item->id) }}" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('ecourses.destroy', $item->id) }}" method="post" className="d-inline">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onclick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Admin>
  );
}
