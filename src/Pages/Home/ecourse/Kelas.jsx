import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../../Layouts/Home';
import axios from 'axios';

function Kelas() {
  const [CourseData, setCourseData] = useState([]);

  useEffect(() => {
    axios.get(`https://api-academy.onlenkan.com/api/get-courses`).then((response) => setCourseData(response.data.data));
  }, []);

  const [id, setID] = useState(null);

  return (
    <Home>
      <section className="ecourse-list" id="kelas">
        <div className="container">
          <h2 className="section-title text-dark mb-2">Pilih Kelas</h2>
          <p className="section-description">Pilih kelas unggulan untuk tingkatkan keahlian kamu!</p>

          <div className="row mt-5">
            {CourseData.map((data) => {
              return (
                <div className="col-md-4">
                  <Link to={`/kelas/` + data.slug} className="card border-0 card-value rounded-3 text-decoration-none mb-3">
                    <img src={`https://api-academy.onlenkan.com/storage/` + data.cover} className="card-img-top" />

                    <div className="card-body p-0 py-2">
                      <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
                        {data.category}
                      </span>
                      <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">{data.title}</h6>
                      <div className="d-flex align-items-center gap-2">
                        {data.price_discount > 0 ? (
                          <>
                            <p className="text-dark fw-semibold m-0">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price_discount)}</p>
                            <p className="text-danger text-decoration-line-through fs-7 fw-semibold m-0">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price)}</p>
                          </>
                        ) : (
                          <p className="text-dark fw-semibold m-0">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price)}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Home>
  );
}

export default Kelas;
