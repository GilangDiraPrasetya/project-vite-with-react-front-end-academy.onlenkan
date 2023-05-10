import React from 'react';
import kelas1 from '../../../../Images/kelas/kelas1.jpg';
import kelas2 from '../../../../Images/kelas/kelas2.jpg';
import { Edit, TrashCan } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function ModalEcourse() {
  return (
    <>
      <div className="modal" id="modalEcourse{{ $item->id }}">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content" style={{ backgroundColor: '#ECEFFC' }}>
            <div className="modal-header">
              <h5 className="modal-title">E-Course dari Muhammad Yunus Almeida</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card border-0 d-none d-md-block mb-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-1">#</div>
                    <div className="col-5">Informasi E-Course</div>
                    <div className="col-2">Harga</div>
                    <div className="col-2">Jumlah Member</div>
                    <div className="col-2"></div>
                  </div>
                </div>
              </div>

              <div className="card border-0  mb-2">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-4 col-md-1 mb-3 mb-md-0">
                      <img src={kelas1} style={{ height: 'auto', objectFit: 'cover' }} className="rounded" alt="{{ $ecourse->title }}" />
                    </div>
                    <div className="col-12 col-md-5 mb-3 mb-md-0">
                      <a href="{{ route('ecourses.show', $ecourse->slug) }}">Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</a>
                      <br />
                      <p className="text-secondary fs-7">Full-Stack Web Developer</p>
                    </div>
                    <div className="col-12 col-md-2 mb-3 mb-md-0">Rp. 350,000</div>
                    <div className="col-12 col-md-2 mb-3 mb-md-0">32 Member</div>
                    <div className="col-12 col-md-2 mb-3 mb-md-0">
                      <div className="d-flex align-items-center gap-2">
                        <Link to="/admin-academy/ecourses/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                          <Edit /> Edit
                        </Link>
                        <form action="{{ route('ecourses.destroy', $ecourse->id) }}" method="post" className="d-inline">
                          <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onclick="return confirm('Are you sure to deleted this?')">
                            <TrashCan />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
