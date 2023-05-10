import React from 'react';
import Admin from '../../../Layouts/Admin';
import { Edit, Plus, TrashCan } from 'akar-icons';
import person from '../../../Images/artikel/person1.png';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Manajemen User</h5>
        <p className="text-secondary mb-2">Manajemen user untuk dashboard</p>
        <Link to="/admin-academy/users/create" className="mb-4 btn btn-primary d-inline-flex align-items-center gap-2">
          <Plus /> Buat Baru
        </Link>
        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-3">Nama</div>
              <div className="col-4">Alamat Email</div>
              <div className="col-2">WhatsApp</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                <img src={person} style={{ width: '36px', height: '36px', objectFit: 'cover' }} className="rounded-circle" alt="{{ $item->name }}" />
              </div>
              <div className="col-12 col-md-3 mb-2 mb-md-0">Muhammad Yunus</div>
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <a href="mailto:{{ $item->email }}" target="_blank" rel="noopener noreferrer">
                  muhammadyunusalmeida@gmail.com
                </a>
              </div>
              <div className="col-12 col-md-2 mb-2 mb-md-0">
                <a href="https://wa.me/{{ $item->phone_number }}" target="_blank" rel="noopener noreferrer">
                  6281336210025
                </a>
              </div>
              <div className="col-12 col-md-2 mb-2 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin-academy/users/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('users.destroy', $item->id) }}" method="post" className="d-inline">
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
    </Admin>
  );
}
