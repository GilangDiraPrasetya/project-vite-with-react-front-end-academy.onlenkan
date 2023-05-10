import React from 'react';
import Admin from '../../../Layouts/Admin';
import { AlignLeft, CloudDownload, Edit, Money, Plus, TrashCan } from 'akar-icons';
import code3 from '../../../Images/code/code3.png';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Source Code</h5>
        <p className="text-secondary mb-3">Manajemen source code untuk dijual dan dibagikan</p>
        <div className="d-flex flex-wrap align-items-start align-items-md-center justify-content-between gap-2 mb-4">
          <div className="d-flex flex-wrap align-items-start align-items-md-center gap-2">
            <Link to="/admin-academy/source-code/create" className="btn btn-primary d-flex align-items-center gap-2">
              <Plus /> Buat Baru
            </Link>
            <Link to="#" className="btn btn-success d-flex align-items-center gap-2">
              <Money /> Transaksi Penjualan
            </Link>
            <Link to="/admin-academy/kategori-source-code" className="btn btn-info text-white d-flex align-items-center gap-2">
              <AlignLeft /> Kategori
            </Link>
          </div>
          <Link to="/admin-academy/sampah/source-code" className="btn btn-light d-flex align-items-center gap-2">
            <TrashCan /> Sampah
          </Link>
        </div>

        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-5">Informasi Source</div>
              <div className="col-2">Harga</div>
              <div className="col-2">Downloader</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <div className="card border-0 mb-2 " id="listResource">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                <img src={code3} alt="Personal Website Creative Designed" className="rounded" />
              </div>
              <div className="col-12 col-md-5 mb-3 mb-md-0">
                <span className="fs-7 text-dark">HTML CSS BOOTSTRAP</span> <br />
                <Link to="/admin-academy/source-code/5" className="text-primary">
                  Personal Website Creative Designed
                </Link>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">Rp. 50,000</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <span className="fs-7">
                  <CloudDownload />0 Orang Membeli
                </span>
              </div>
              <div className="col-12 col-md-2">
                <div className="d-flex gap-2">
                  <Link to="/admin-academy/source-code/5/edit" class="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="" method="post" className="d-inline">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onClick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <style>
        .card-value .card-img-top {
            height: 180px !important;
        }
    </style> */}
    </Admin>
  );
}
