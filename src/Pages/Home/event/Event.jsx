import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Schedule } from 'akar-icons';
import Event1 from '../../../Images/event1.png';
import Home from '../../../Layouts/Home';

function Event() {
  return (
    <Home>
      <section className="ecourse-list" id="kelas">
        <div className="container">
          <h2 className="section-title text-dark mb-2">Event Kami</h2>
          <p className="section-description">Event kami yang bisa kamu ikuti!</p>

          <div className="row mt-5">
            <div className="col-md-4">
              <Link to="/event/event-detail" className="card border-0 card-value rounded-3 text-decoration-none mb-3 position-relative">
                <img src={Event1} className="card-img-top" />
                <div className="card-body p-0 py-2">
                  <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
                    Webinar
                  </span>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Bikin Web Booking Travel dengan Laravel</h6>
                  <p className="text-secondary fw-normal fs-7 m-0 d-flex align-items-center gap-2">
                    <Ticket />
                    <span>Rp. 50.000</span>
                  </p>
                  <p className="text-secondary fw-normal fs-7 m-0 d-flex align-items-center gap-2">
                    <Schedule />
                    <span>18 Dec 2022 / 09:00 - 12:00</span>
                  </p>
                </div>
                <span className="badge bg-success position-absolute" style={{ top: '10px', right: '10px' }}>
                  Selesai
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default Event;
