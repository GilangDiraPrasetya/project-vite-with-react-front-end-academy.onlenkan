import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import kelas1 from '../../../Images/kelas/kelas1.jpg';
import kelas2 from '../../../Images/kelas/kelas2.jpg';
import Home from '../../../Layouts/Home';
import axios from 'axios';

function Kelas() {
  const [CourseData, setCourseData] = useState([]);

  useEffect(() => {
    axios.get(`https://api-academy.onlenkan.com/api/get-courses`).then((response) => setCourseData(response.data.data));
  }, []);
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
                  <Link to="/kelas/kelas-detail" className="card border-0 card-value rounded-3 text-decoration-none mb-3">
                    <img src={`https://api-academy.onlenkan.com/storage/public/` + data.cover} className="card-img-top" />

                    <div className="card-body p-0 py-2">
                      <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
                        {data.category}
                      </span>
                      <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">{data.title}</h6>
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-dark fw-semibold m-0">{data.price}</p>
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
