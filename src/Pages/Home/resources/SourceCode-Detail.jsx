import React from 'react';
import Home from '../../../Layouts/Home';
import { ChevronRight, CloudDownload, Info } from 'akar-icons';
import code1 from '../../../Images/code/code1.png';
import { Link } from 'react-router-dom';

export default function SourceCodeDetail() {
  return (
    <Home>
      <section className="ecourse-detail pt-4">
        <div className="container">
          <div className="breadcrumb d-flex flex-wrap align-items-center gap-2 mb-4">
            <Link to="/" className="fs-7">
              Home
            </Link>
            <ChevronRight fs-7 />
            <Link to="/source-code" className="fs-7">
              Source Code
            </Link>
            <ChevronRight fs-7 />
            <p className="text-black fs-7">Personal Website Creative Designed</p>
          </div>

          <h2 className="fs-3 fw-semibold text-dark mb-3">Personal Website Creative Designed</h2>
          <span className="bg-soft-blue text-primary fs-7 rounded-3" style={{ padding: '8px 20px', fontWeight: '500' }}>
            HTML CSS BOOTSTRAP
          </span>
          <div className="row mt-5">
            <div className="col-md-8">
              <img src={code1} alt="" className="rounded-3" />

              <div className="card mt-3 mb-3">
                <div className="card-body p-3 p-md-4">
                  <div>
                    Source code ini dibuat dengan HTML CSS Bootstrap yang mana jika ingin mengikuti video tutorialnya ada di YouTube Yunus Almeida, klik <a href="">disini</a> untuk melihat tutorialnya.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 mb-md-5">
                <div className="card-body p-3 p-md-4 d-none d-md-block">
                  <h5 className="fw-semibold fs-4">Rp. 50,000</h5>
                  <a href="{{ route('home.resource.checkout', $resource->slug) }}" className="btn btn-primary d-block py-2 py-md-3 px-2 px-md-4 mt-4">
                    <CloudDownload />
                    Checkout Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- FOOTER BUTTON FOR MOBILE --}} */}
      <div className="bg-white position-fixed w-100 py-2 shadow-sm d-block d-md-none" style={{ bottom: 0, left: 0 }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-5">
              <p className="text-secondary" style={{ fontSize: '12px' }}>
                Harga:
              </p>
            </div>
            <div className="col-7">
              <p className="text-dark fw-semibold text-end">Rp. 50,000</p>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center gap-2 mt-3">
                <a href="" className="btn btn-primary d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4 mb-2 mt-4">
                  <CloudDownload />
                  Download Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {{-- FOR INFO --}} */}
      <div className="modal fade" id="modalInfo" tabindex="-1" aria-labelledby="modalInfoLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalInfoLabel">
                <Info /> Info
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Gratis untuk kamu yang mengikuti salah satu kelas Onlenkan</div>
          </div>
        </div>
      </div>
    </Home>
  );
}
