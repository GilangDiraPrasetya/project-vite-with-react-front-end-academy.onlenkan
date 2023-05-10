import { DesktopDevice, PeopleGroup, Briefcase, Newspaper, Search } from 'akar-icons';
import Admin from '../../Layouts/Admin';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  function search() {
    var input = document.getElementById('search');
    var filter = input.value.toLowerCase();
    var listMember = document.getElementById('listMember');
    var card = document.querySelectorAll('.list-member');
    for (var i = 0; i < card.length; i++) {
      var name = document.querySelectorAll('.name')[i];
      if (name.innerHTML.toLowerCase().indexOf(filter) > -1) {
        card[i].style.display = '';
      } else {
        card[i].style.display = 'none';
      }
    }
  }

  return (
    <Admin>
      <section className="py-4">
        <h2 className="text-dark">Selamat Datang Kembali, Gilang Dira Prasetya</h2>

        <div className="row mt-5">
          <p className="text-secondary text-uppercase fs-7 fw-semibold mb-2">overview</p>
          <div className="col-md-3 col-6">
            <Link to="/admin-academy/ecourses" className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 px-2 p-md-4">
                <span className="icon rounded">
                  <DesktopDevice />
                </span>

                <h5 className="text-dark fw-semibold mt-4">2 Ecourse</h5>
                <p className="d-none d-md-block text-secondary">Kelas yang telah terpublish</p>
              </div>
            </Link>
          </div>
          <Link to="/admin-academy/members" className="col-md-3 col-6">
            <div className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 px-2 p-md-4">
                <span className="icon rounded">
                  <PeopleGroup />
                </span>

                <h5 className="text-dark fw-semibold mt-4">52 Member</h5>
                <p className="d-none d-md-block text-secondary">Member yang bergabung di kelas</p>
              </div>
            </div>
          </Link>
          <div className="col-md-3 col-6">
            <Link to="/admin-academy/source-code" className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 px-2 p-md-4">
                <span className="icon rounded">
                  <Briefcase />
                </span>

                <h5 className="text-dark fw-semibold mt-4">3 Resource</h5>
                <p className="d-none d-md-block text-secondary">Source code yang terpublish</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link to="/admin-academy/artikel" className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 px-2 p-md-4">
                <span className="icon rounded">
                  <Newspaper />
                </span>

                <h5 className="text-dark fw-semibold mt-4">1 Artikel</h5>
                <p className="d-none d-md-block text-secondary">Artikel terpublish pada bulan ini</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="row mt-5">
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2 mb-2">
            <p className="text-secondary text-uppercase fs-7 fw-semibold mb-0">Member Kelas terbaru (0 Member)</p>
            <div className="d-flex">
              <div className="input-group input-group-sm">
                <span className="input-group-text bg-white">
                  <Search />
                </span>
                <input type="search" id="search" onkeyup="search()" className="border-start-0 form-control" placeholder="Search . . ." />
              </div>
            </div>
          </div>
          <p className="text-danger">Belum ada yang mendaftar kelas akhir-akhir ini</p>
        </div>
      </section>
    </Admin>
  );
}
