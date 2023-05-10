import { Info, WhatsappFill } from 'akar-icons';
import React from 'react';
import kelas2 from '../../../Images/kelas/kelas2.jpg';
import { Link } from 'react-router-dom';

export default function EcourseCard() {
  return (
    <>
      {/* <a @if ($item->status == 'ACTIVE') href="{{ route('member.learning', ['slug_ecourse' => $item->ecourse->slug, 'slug_content' => $item->ecourse_content->id]) }}"
      @else
    type="button" data-bs-toggle="modal" data-bs-target=".modal" @endif
    className="card border-0 card-value shadow-none rounded-3 text-decoration-none mb-2 position-relative"> */}
      <Link to="/member/kelas-saya/1" className="card border-0 card-value shadow-none rounded-3 text-decoration-none mb-2 position-relative">
        <img src={kelas2} alt="" className="card-img-top" />

        <div className="card-body">
          <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
            Full-Stack Web Developer
          </span>
          <h6 className="text-dark fw-semibold mb-2 overflow-one-line">Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</h6>

          <div className="row align-items-center fs-7 text-secondary">
            <div className="col-5">Progress Belajar</div>
            <div className="col-7">: Laravel1.1</div>
          </div>
        </div>
        <span className="position-absolute badge fs-7 bg-success" style={{ top: '10px', right: '10px' }}>
          {/* {{ $item->status == 'ACTIVE' ? 'Aktif' : 'Belum Aktif' }} */}Aktif
        </span>
      </Link>

      {/* <div className="modal fade" id="modalNonactiveEcourse">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-3 text-center">
              <Info text-danger fs-1 />
              <p className="mt-3">Kelas ini masih belum aktif! Silahkan lakukan pembayaran atau jika sudah, bisa hubungi admin!</p>
              <a href="https://wa.me/6285159698221" target="_blank" className="btn btn-success d-flex align-items-center gap-3 mt-4 mx-auto" style={{ width: 'max-content' }}>
                <WhatsappFill /> Hubungi Admin
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* @push('addon-style')
    <style>
        .overflow-one-line {
            transition: .3s;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .card-value:hover .overflow-one-line {
            overflow: hidden;
            text-overflow: unset;
            white-space: normal;
        }
    </style>
@endpush */}
    </>
  );
}
