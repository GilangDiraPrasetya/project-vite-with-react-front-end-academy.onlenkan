import Home from '../../../Layouts/Home';
import code1 from '../../../Images/code/code1.png';
import code2 from '../../../Images/code/code2.png';
import code3 from '../../../Images/code/code3.png';
import { Link } from 'react-router-dom';

function SourceCode() {
  return (
    <Home>
      <section className="ecourse-list" id="kelas">
        <div className="container">
          <h2 className="section-title text-dark mb-2">Source Code</h2>
          <p className="section-description">High Quality Projects. Working Faster & Better.</p>

          <div className="row mt-5">
            <div className="col-12">
              <div className="dropdown mb-3">
                <button className="btn border border-secondary text-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pilih Kategori
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="">
                      Semua Kategori
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="{{ route('home.resource.category', $category->slug) }}">
                      HTML CSS (0)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="{{ route('home.resource.category', $category->slug) }}">
                      HTML CSS BOOTSTRAP (3)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <Link to="/source-code/detail" className="card border-0 card-value card-source-code rounded-3 text-decoration-none mb-3 shadow-none">
                <img src={code1} alt="{{ $item->title }}" className="card-img-top" />

                <div className="card-body p-0 py-3">
                  <p className="fw-semibold text-primary mb-0" style={{ fontSize: '12px' }}>
                    HTML CSS BOOTSTRAP
                  </p>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Personal Website Creative Designed</h6>
                  <p className="text-secondary fs-7 mb-1">Rp. 50,000</p>
                </div>
              </Link>
            </div>
            <div class="col-md-4">
              <a href="" className="card border-0 card-value card-source-code rounded-3 text-decoration-none mb-3 shadow-none">
                <img src={code2} alt="{{ $item->title }}" className="card-img-top" />

                <div className="card-body p-0 py-3">
                  <p className="fw-semibold text-primary mb-0" style={{ fontSize: '12px' }}>
                    HTML CSS BOOTSTRAP
                  </p>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Web Component Landing Page</h6>
                  <p className="text-secondary fs-7 mb-1">Gratis</p>
                </div>
              </a>
            </div>
            <div class="col-md-4">
              <a href="" className="card border-0 card-value card-source-code rounded-3 text-decoration-none mb-3 shadow-none">
                <img src={code3} alt="{{ $item->title }}" className="card-img-top" />

                <div className="card-body p-0 py-3">
                  <p className="fw-semibold text-primary mb-0" style={{ fontSize: '12px' }}>
                    HTML CSS BOOTSTRAP
                  </p>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Website Travel Probvel</h6>
                  <p className="text-secondary fs-7 mb-1">Rp. 50,000</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default SourceCode;
