import React from 'react';
import Admin from '../../../Layouts/Admin';
import { AlignLeft, ChatEdit, PeopleMultiple, Plus, TrashCan } from 'akar-icons';
import event from '../../../Images/event1.png';
import Edit from '../Ecourses/Edit';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <Admin>
      <section className="py-4">
        <h4 className="text-dark">Manajemen Event</h4>
        <p className="text-secondary mb-3">Manajemen Event Onlenkan Academy</p>
        <div className="d-flex align-items-center gap-2 flex-wrap mb-4">
          <Link to="/admin-academy/manajemen-event/create" className="btn btn-primary d-inline-flex align-items-center gap-2">
            <Plus /> Buat Baru
          </Link>
          <a href="/admin-academy/kategori-ecourse" className="btn btn-info text-white d-inline-flex align-items-center gap-2">
            <AlignLeft /> Kategori
          </a>
          <Link to="/admin-academy/instructor-ecourse" className="btn btn-success d-inline-flex align-items-center gap-2">
            <PeopleMultiple /> Instructor
          </Link>
        </div>
        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-3">Event</div>
              <div className="col-2">Tanggal</div>
              <div className="col-2">Harga</div>
              <div className="col-2">Peserta</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                <img src={event} style={{ height: 'auto', objectFit: 'cover' }} className="rounded" alt="{{ $item->title }}" />
              </div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <Link to="/admin-academy/manajemen-event/show">Bikin Web Booking Travel dengan Laravel</Link> <br />
                <p className="m-0 fs-7">Muhammad Yunus Almeida</p>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                18 Dec 2022 <br />
                <p className="m-0 fs-7">09:00 - 12:00</p>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">Rp. 50,000</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">2 Peserta</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <div className="dropdown">
                  <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Selesai
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <form action="{{ route('manajemen-event.update', $item->id) }}" method="post">
                        <input type="hidden" name="status" value="soon" />
                        <button type="submit" className="dropdown-item fs-7">
                          Akan Datang
                        </button>
                      </form>
                    </li>
                    <li>
                      <form action="{{ route('manajemen-event.update', $item->id) }}" method="post">
                        <input type="hidden" name="status" value="ongoing" />
                        <button type="submit" className="dropdown-item fs-7">
                          Sedang Berlangsung
                        </button>
                      </form>
                    </li>
                    <li>
                      <form action="{{ route('manajemen-event.update', $item->id) }}" method="post">
                        <input type="hidden" name="status" value="done" />
                        <button type="submit" className="dropdown-item fs-7">
                          Selesai
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="dropdown mt-1">
                  <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Aksi
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/admin-academy/manajemen-event/4/edit" className="dropdown-item fs-7 d-flex align-items-center gap-2">
                        <ChatEdit /> Edit
                      </Link>
                    </li>
                    <li>
                      <form action="{{ route('manajemen-event.destroy', $item->id) }}" method="post" className="d-inline">
                        <button type="submit" className="dropdown-item fs-7 text-danger d-flex align-items-center gap-2" onClick="return confirm('Are you sure to deleted this?')">
                          <TrashCan /> Hapus
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Admin>
  );
}
