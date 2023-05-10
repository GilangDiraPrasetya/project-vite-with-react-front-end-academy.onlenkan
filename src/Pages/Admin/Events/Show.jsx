import React from 'react';
import Admin from '../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'akar-icons';
import person from '../../../Images/artikel/person1.png';
import event from '../../../Images/event1.png';

export default function Show() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3 mb-4">
          <Link to="/admin-academy/manajemen-event" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 className="text-dark m-0">Bikin Web Booking Travel dengan Laravel</h5>
        </div>

        <p className="text-secondary text-uppercase fs-7 fw-semibold mb-2">Event Member</p>
        <div className="mb-5" id="listMember">
          <div className="card border-0 border-light  d-none d-md-block mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col-1">#</div>
                <div className="col-3">Tanggal Bergabung</div>
                <div className="col-5">Informasi Personal</div>
                <div className="col-3">Status</div>
              </div>
            </div>
          </div>
          <div className="card border-0 mb-2 list-member">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-4 col-md-1 mb-3 mb-md-0">
                  <img src={person} style={{ width: '36px', height: '36px', objectFit: 'cover' }} className="rounded-circle" alt="{{ $item->user->name }}" />
                </div>
                <div className="col-12 col-md-3 mb-3 mb-md-0">13 Dec 2022</div>
                <div className="col-12 col-md-5 mb-3 mb-md-0">
                  <span className="name">Yunus Almeida Test</span> <br />
                  <a href="mailto:{{ $item->user->email }}" target="_blank" rel="noopener noreferrer">
                    yunusalmeida09@gmail.com
                  </a>
                  <br />
                  <a href="https://wa.me/{{ $item->user->phone_number }}" target="_blank" rel="noopener noreferrer">
                    6285321414774
                  </a>
                </div>
                <div className="col-12 col-md-3">
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <button className="btn btn-info btn-sm text-white d-flex align-items-center gap-2 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#checkPayment">
                      <Info /> Cek Payment
                    </button>

                    <div className="modal" id="checkPayment">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <img src="" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Paid
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <form action="{{ route('members-event.update', $item->id) }}" method="post">
                            <input type="hidden" name="status" value="unpaid" />
                            <button type="submit" className="dropdown-item">
                              Unpaid
                            </button>
                          </form>
                        </li>
                        <li>
                          <form action="{{ route('members-event.update', $item->id) }}" method="post">
                            <input type="hidden" name="status" value="paid" />
                            <button type="submit" className="dropdown-item">
                              Paid
                            </button>
                          </form>
                        </li>
                      </ul>
                    </div>
                    {/* @if ($item->status == 'NONACTIVE')
                                            <form action="{{ route('members.destroy', $item->id) }}" method="post">
                                                @csrf
                                                @method('DELETE')
                                                <button
                                                    className="btn btn-danger btn-sm d-flex align-items-center justify-content-center"
                                                    type="submit"
                                                    onclick="return confirm('Kamu yakin ingin menghapus member ini?')">
                                                    <i className="ai-trash-can"></i></button>
                                            </form>
                                        @endif */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-secondary text-uppercase fs-7 fw-semibold mb-2">E-Course Detail</p>
        <div className="card">
          <div className="card-body p-4">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td style={{ width: '250px' }}>Judul E-Course</td>
                    <td>:</td>
                    <td>Bikin Web Booking Travel dengan Laravel</td>
                  </tr>
                  <tr className="pb-3">
                    <td style={{ width: '250px' }}>Mentor</td>
                    <td>:</td>
                    <td>Muhammad Yunus Almeida</td>
                  </tr>
                  <tr className="pb-3">
                    <td style={{ width: '250px' }}>Tanggal / Jam</td>
                    <td>:</td>
                    <td>18 Dec 2022 / 09:00 - 12:00</td>
                  </tr>
                  <tr className="pb-3">
                    <td style={{ width: '250px' }}>Deskripsi</td>
                    <td>:</td>
                    <td>
                      Bikin Website Booking travel cuman 3 JAM ? Kali ini kita akan mengadakan webinar membuat web booking Travel menggunakan Framework laravel. di webinar ini kamu akan mendapatkan materi yang tidak akan di dapatkan di
                      konten kami sebelumnya! Tidak hanya hasil akhir website travel yang akan kamu dapatkan, tapi juga MATERI yang DAGING , Sertifikat bahkan rekaman dari Webinar ini! Tunggu apalagi? Daftar sekarang 👇🏻
                    </td>
                  </tr>
                  <tr className="pb-3">
                    <td style={{ width: '250px' }}>Price</td>
                    <td>:</td>
                    <td>Rp. 50,000</td>
                  </tr>
                  <tr className="pb-3">
                    <td style={{ width: '250px' }}>Gambar</td>
                    <td>:</td>
                    <td>
                      <img src={event} className="rounded-2" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Admin>
  );
}
