import React from 'react';
import Admin from '../../../../Layouts/Admin';
import person from '../../../../Images/artikel/person1.png';
import { Edit, Search, TrashCan } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Manajemen Member</h5>
        <p className="text-secondary">Manajemen member platform Onlenkan Academy</p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="input-group input-group mb-2">
              <span className="input-group-text bg-white">
                <Search />
              </span>
              <input type="search" id="search" onKeyUp="search()" className="border-start-0 form-control" placeholder="Search . . ." />
            </div>
          </div>
          <div className="col-12" id="listMember">
            <div className="card border-0 border-light  d-none d-md-block mb-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-1">#</div>
                  <div className="col-2">Nama Lengkap</div>
                  <div className="col-3">Alamat Email</div>
                  <div className="col-2">WhatsApp</div>
                  <div className="col-2">Jumlah E-Course</div>
                  <div className="col-2">Actions</div>
                </div>
              </div>
            </div>
            <div className="card border-0 mb-2 list-member">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-4 col-md-1 mb-3 mb-md-0">
                    <img src={person} style={{ width: '36px', height: '36px', objectFit: 'cover' }} className="rounded-circle" alt="{{ $item->name }}" />
                  </div>
                  <div className="col-12 col-md-2 mb-3 mb-md-0 name">Yunus Almeida Test</div>
                  <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <a href="mailto:{{ $item->email }}" target="_blank" rel="noopener noreferrer">
                      yunusalmeida09@gmail.com
                    </a>
                  </div>
                  <div className="col-12 col-md-2 mb-3 mb-md-0">
                    <a href="https://wa.me/{{ $item->phone_number }}" target="_blank" rel="noopener noreferrer">
                      6285321414774
                    </a>
                  </div>
                  <div className="col-12 col-md-2 mb-3 mb-md-0">0 E-Course</div>
                  <div className="col-12 col-md-2">
                    <div className="d-flex align-items-center gap-2">
                      <Link to="/academy.onlenkan.com/admin-academy/users/7/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                        <Edit /> Edit
                      </Link>
                      <form action="{{ route('users.destroy', $item->id) }}" method="post" className="d-inline">
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
      </section>
    </Admin>
  );
}
