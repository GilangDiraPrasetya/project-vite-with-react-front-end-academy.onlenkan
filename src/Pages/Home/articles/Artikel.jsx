import artikel1 from '../../../Images/artikel/artikel1.png'
import person1 from '../../../Images/artikel/person1.png'
import { Link } from 'react-router-dom';
import Home from '../../../Layouts/Home';

function Artikel() {
  return (
    <Home>
      <section className="ecourse-list" id="kelas">
        <div className="container">
          <h2 className="section-title text-center text-dark mb-2">Artikel Terakhir</h2>
          <p className="section-description text-center">
            Jika Kamu mempunyai waktu yang singkat, dan ingin dimanfaatkan,
            <br className="d-none d-md-block" />
            kami telah menyediakan Kamu beberapa artikel <br className="d-none d-md-block" />
            yang mungkin bermanfaat.
          </p>

          <div className="row mt-5">
            <div className="col-md-4">
              <Link to="/artikel/artikel-detail" className="card border-0 card-value rounded-3 text-decoration-none mb-3">
                <img src={artikel1} className="card-img-top" />
                <div className="card-body p-0 py-2">
                  <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
                    Laravel
                  </span>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Apa yang baru di Laravel 10</h6>
                  <p className="text-secondary fs-7 mb-2">Dalam artikel ini kita akan membahas apa saja yang terbaru di Laravel 10</p>

                  <div className="d-flex align-items-center gap-3">
                    <img src={person1} alt="" className="avatar rounded-circle" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
                    <div>
                      <p className="text-dark fs-7 fw-semibold mb-0">Muhammad Yunus</p>
                      <span className="fw-normal text-secondary mb-0" style={{ fontSize: '12px', marginTop: '-5px' }}>
                        14 Mar 2023
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}
export default Artikel;
