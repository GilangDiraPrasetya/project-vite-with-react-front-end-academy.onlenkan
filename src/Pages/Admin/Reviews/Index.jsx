import React from 'react';
import Admin from '../../../Layouts/Admin';
import { EyeOpen, EyeSlashed, TrashCan } from 'akar-icons';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Review</h5>
        <p className="text-secondary mb-2">Manajemen Review E-Course</p>
        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-4">Review</div>
              <div className="col-3">E-Course</div>
              <div className="col-2">Rating</div>
              <div className="col-2">Detail</div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <img src="" style={{ width: '36px', height: '36px', objectFit: 'cover' }} className="rounded-circle" alt="" />

                  <div>
                    <div className="d-flex align-items-center gap-1">
                      <p className="text-dark mb-0 fw-semibold">Gilang</p>
                      <span className="text-secondary fs-7">20 April 2023</span>
                    </div>
                    <p className="text-secondary mb-0 fs-7">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-2 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <img src="" style={{ width: '40px', objectFit: 'cover' }} alt="" />
                  <p className="text-dark mb-0">Gilang</p>
                </div>
              </div>
              <div className="col-12 col-md-2 mb-2 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <p className="text-dark fw-semibold mb-0">5</p>
                  <div className="d-flex align-items-center gap-0">
                    <i className="bx bxs-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 mb-2 mb-md-0">
                <button type="button" data-bs-toggle="modal" data-bs-target="#modalDetail{{ $item->id }}" className="btn btn-light btn-sm">
                  View Detail
                </button>
              </div>
              <div className="col-12 col-md-1 mb-2 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <div className="dropdown">
                    <button className="btn btn-light btn-sm dropdown-toggle d-flex align-items-center justify-conten-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <EyeOpen />
                      {/* <EyeSlashed/> */}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <form action="{{ route('review-ecourse.update', $item->id) }}" method="post">
                          <input type="hidden" name="status" value="show" />
                          <button type="submit" className="dropdown-item fs-7">
                            Tampilkan
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="{{ route('review-ecourse.update', $item->id) }}" method="post">
                          <input type="hidden" name="status" value="hide" />
                          <button type="submit" className="dropdown-item fs-7">
                            Sembunyikan
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                  <form action="{{ route('review-ecourse.destroy', $item->id) }}" method="post" className="d-inline">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onclick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="modalDetail{{ $item->id }}">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">Review dari Gilang</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </section>
      {/* <style>
        .dropdown-toggle::after {
            display: none !important;
        }
    </style> */}
    </Admin>
  );
}
