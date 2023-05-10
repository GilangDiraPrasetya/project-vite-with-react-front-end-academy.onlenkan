import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Edit, WhatsappFill } from 'akar-icons';
import kelas1 from '../../../Images/kelas/kelas1.jpg';
import kelas2 from '../../../Images/kelas/kelas2.jpg';
import person from '../../../Images/artikel/person1.png';
import Home from '../../../Layouts/Home';

function KelasDetail() {
  return (
    <Home>
      <section className="ecourse-detail pt-4">
        <div className="container">
          <div className="breadcrumb d-flex flex-wrap align-items-center gap-2 mb-4">
            <Link to="/" className="fs-7">
              Home
            </Link>
            <ChevronRight />
            <Link to="/kelas" className="fs-7">
              Kelas
            </Link>
            <ChevronRight />
            <p className="text-black fs-7">Mastering Laravel | From Zero to Hero</p>
          </div>

          <h2 className="fs-3 fw-semibold text-dark mb-3">Mastering Laravel | From Zero to Hero</h2>
          <span className="bg-soft-blue text-primary fs-7 rounded-3" style={{ padding: '8px 20px', fontWeight: '500px' }}>
            Full-Stack WEB Developer
          </span>

          <div className="row mt-5">
            <div className="col-md-6">
              <img src={kelas1} alt="" className="rounded-3 mb-5" />
              <h4 className="fs-5 mb-2">Deskripsi Kelas</h4>
              Disini kita akan belajar Framework Laravel dari tingkat dasar sampai tingkat mahir, disertai teori dan juga praktek. Dengan meggunakan Laravel, kita bisa membuat aplikasi baik itu front-end maupun back-end sekaligus. Oleh
              karena itu saat ini Laravel menjadi salah satu teknologi yang sangat diminati oleh programmer. Kamu akan diajari dari 0 atau pemula menjadi pro dalam mempuat project Laravel atau website.
            </div>

            <div className="col-md-6">
              <h4 className="fs-5 mb-2">Konten Kelas</h4>
              <div className="accordion mb-5" id="accordionContent">
                <div className="accordion-item border-0 p-0 border-bottom" style={{ borderColor: '#7a7a7a' }} />
                <p className="fs-6 fw-semibold accordion-header" id="headingOne">
                  <button className="accordion-button text-dark bg-white border-none shadow-none" type="button" data-bs-toggle="collapse" data-bs-target=""></button>
                </p>
                <div id="section" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <div className="text-secondary d-flex align-items-center gap-3 border-bottom border-light py-2">
                      <span className="bg-secondary text-white p-2 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '24px', height: '24px' }}>
                        <Play style={{ fontSize: '14px', marginLeft: '2px' }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 mb-md-5">
                <div className="card-body p-3 p-md-4 d-none d-md-block">
                  <h5 className="fw-semibold fs-4">Rp. 300,000</h5>
                  <a href="" className="btn btn-primary d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4 mb-2 mt-4">
                    <Edit />
                    Lanjutkan Pembelajaran
                  </a>
                  <a href="" className="btn btn-primary d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4 mb-2 mt-4">
                    <Edit />
                    Checkout Kelas
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20min!%20Saya%20mau%20bertanya%20tentang%20kelas%20*{{ $ecourse->title }}*%0A%0A"
                    className="btn btn-outline-success d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4"
                  >
                    <WhatsappFill />
                    Tanya Kelas
                  </a>
                </div>
                <hr className="my-1 d-none d-md-block" />
                <div className="card-body p-3 p-md-4">
                  <h5 className="fs-6 fw-semibold">Mentor Kelas</h5>

                  <div className="d-flex align-items-center gap-2">
                    <img src={person} alt="" className="rounded-circle" style={{ objectFit: 'cover', width: 36, height: 36 }} />
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

export default KelasDetail;
