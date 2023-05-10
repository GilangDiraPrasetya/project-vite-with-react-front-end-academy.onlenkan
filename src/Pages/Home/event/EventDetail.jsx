import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, WhatsappFill } from 'akar-icons';
import Event1 from '../../../Images/event1.png';
import person from '../../../Images/artikel/person1.png';
import Home from '../../../Layouts/Home';

function EventDetail() {
  return (
    <Home>
      <section className="ecourse-detail pt-4">
        <div className="container">
          <div className="breadcrumb d-flex flex-wrap align-items-center gap-2 mb-4">
            <Link to="/" className="fs-7">
              Home
            </Link>
            <ChevronRight />
            <Link to="/event" className="fs-7">
              Event
            </Link>
            <ChevronRight />
            <p className="text-black fs-7">Bikin Web Booking Travel dengan Laravel</p>
          </div>

          <h2 className="fs-3 fw-semibold text-dark mb-3">Bikin Web Booking Travel dengan Laravel</h2>
          <span className="bg-soft-blue text-primary fs-7 rounded-3" style={{ padding: '8px 20px', fontWeight: '500px' }}>
            Webinar
          </span>
          <div className="row mt-5">
            <div className="col-md-8">
              <img src={Event1} className="card-img-top" />

              <div className="card mt-3 mb-3">
                <div className="card-body p-3 p-md-4">
                  <div>
                    Bikin Website Booking travel cuman 3 JAM ?<br />
                    Kali ini kita akan mengadakan webinar membuat web booking Travel menggunakan Framework laravel. <br />
                    di webinar ini kamu akan mendapatkan materi yang tidak akan di dapatkan di konten kami sebelumnya! <br />
                    Tidak hanya hasil akhir website travel yang akan kamu dapatkan, tapi juga MATERI yang DAGING , Sertifikat bahkan rekaman dari Webinar ini! <br />
                    Tunggu apalagi? <br />
                    Daftar sekarang 👇🏻
                  </div>
                  <ul className="mt-3">
                    <li>
                      Event diadakan pada tanggal:
                      <strong>18 Dec 2022</strong>
                    </li>
                    <li>
                      dan Event diadakan pada jam: <strong>09:00 - 12:00</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 mb-md-5">
                <div className="card-body p-3 p-md-4 d-none d-md-block">
                  <h5 className="fw-semibold fs-4">Rp. 50,000</h5>
                  <p className="d-flex align-items-center gap-2 mb-4 mt-4 text-success fw-semibold">🙏🏻 Event Telah Selesai</p>
                  <a href="" className="btn btn-outline-success d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4">
                    <WhatsappFill />
                    Tanya Event
                  </a>
                </div>
                <hr className="my-1 d-none d-md-block" />
                <div className="card-body p-3 p-md-4">
                  <h5 className="fs-6 fw-semibold">Mentor Event</h5>

                  <div className="d-flex align-items-center gap-2">
                    <img src={person} alt="" className="rounded-circle" style={{ objectFit: 'cover', width: '36px', height: '36px' }} />
                    <div>
                      <p className="text-dark">Muhammad Yunus Almeida</p>
                      <span className="text-secondary fs-7">Full-Stack Web Developer at Onlenkan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default EventDetail;
