import React from 'react';
import { Link } from 'react-router-dom';
import { DesktopDevice, DoubleCheck, Newspaper } from 'akar-icons';
import Member from '../../Layouts/Member';
import EcourseCard from './Ecourses/Ecourse-Card';

export default function Dashboard() {
  return (
    <Member>
      <section className="py-4">
        <h2 className="text-dark">Selamat Datang Kembali, Gilang Dira Prasetya</h2>
        <div className="row mt-5">
          <p className="text-secondary text-uppercase fs-7 fw-semibold mb-2">overview</p>
          <Link to="/member/kelas-saya" className="col-md-3 col-6">
            <div className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 p-md-4">
                <span className="icon rounded">
                  <DesktopDevice />
                </span>

                <h5 className="text-dark fw-semibold mt-4">1 Kelas</h5>
                <p className="fs-7 text-secondary">Kelas yang kamu miliki</p>
              </div>
            </div>
          </Link>
          <div className="col-md-3 col-6">
            <Link to="/member/source-code" className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 p-md-4">
                <span className="icon rounded">
                  <DoubleCheck />
                </span>

                <h5 className="text-dark fw-semibold mt-4">0 Source</h5>
                <p className="fs-7 text-secondary">Source code yg dimiliki</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <Link to="/member/event" className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 p-md-4">
                <span className="icon rounded">
                  <Newspaper />
                </span>

                <h5 className="text-dark fw-semibold mt-4">0 Event</h5>
                <p className="fs-7 text-secondary">Event yang kamu ikuti</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6">
            <div className="card card-dashboard border-0 mb-3">
              <div className="card-body p-3 p-md-4">
                <span className="icon rounded">
                  <Newspaper />
                </span>

                <h5 className="text-dark fw-semibold mt-4">0 Sertifikat</h5>
                <p className="fs-7 text-secondary">Fitur ini akan segera aktif</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <h5 className="text-dark fw-semibold mb-3">Kelas yang Kamu Miliki</h5>
          <div className="col-md-3"><EcourseCard/></div>

          {/* @if ($members->count() != 0)
                @foreach ($members as $item)
                    <div className="col-md-3">
                        @include('pages.member.ecourses.ecourse-card')
                    </div>
                @endforeach
            @else */}
          {/* <p className="text-danger">
            Kamu Belum Memiliki Kelas!
            <Link to="/kelas">Katalog Kelas!</Link>
          </p> */}
          {/* @endif */}
        </div>
      </section>
    </Member>
  );
}
