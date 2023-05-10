import { ArrowLeft, File, Info, PeopleMultiple, Plus } from 'akar-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Admin from '../../../Layouts/Admin';

export default function Show() {
  return (
    <Admin>
      <section className="py-4">
        <div className="row align-items-start align-items-md-center justify-content-center justify-content-md-between">
          <div className="col-md-8">
            <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
              <Link to="/admin-academy/ecourses" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft />
              </Link>
              <h5 className="text-dark m-0">Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center flex-wrap justify-content-end gap-2">
              <button type="button" data-bs-toggle="modal" data-bs-target="#access" className="btn btn-success d-flex align-items-center gap-2">
                <PeopleMultiple /> Beri Akses
              </button>
              <Link to="/admin-academy/ecourses/show/section/list" className="btn btn-primary d-flex align-items-center gap-2" style={{ width: 'max-content' }}>
                <File /> List Materi
              </Link>
            </div>
          </div>
        </div>

        <div className="my-5" id="listMember">
          <div className="card border-0 border-light  d-none d-md-block mb-2">
            <div className="card-body">
              <div className="row align-items-center fs-7">
                <div className="col-2">Tanggal Bergabung</div>
                <div className="col-4">Informasi Personal</div>
                <div className="col-2">Harga Beli</div>
                <div className="col-2">Video Terakhir</div>
                <div className="col-2">Status</div>
              </div>
            </div>
          </div>

          <div className="card border-0 mb-2 list-member">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-12 col-md-2 mb-3 mb-md-0">30 March 2023</div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <span className="name">Muhammad Yunus</span> <br />
                  <a href="mailto:muhammadyunusalmeida@gmail.com" target="_blank" rel="noopener noreferrer">
                    muhammadyunusalmeida@gmail.com
                  </a>
                  <br />
                  <a href="https://wa.me/{{ $item->user->phone_number }}" target="_blank" rel="noopener noreferrer">
                    6281336210025
                  </a>
                </div>
                <div className="col-12 col-md-2 mb-3 mb-md-0">
                  Rp. 350,000
                  <button className="btn btn-info btn-sm text-white d-flex align-items-center gap-2 mt-1" type="button" data-bs-toggle="modal" data-bs-target="#checkPayment">
                    <Info /> Cek Payment
                  </button>
                  <div className="modal" id="checkPayment">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <img src="" alt="{{ $item->user->name }}" download="false" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2 mb-3 mb-md-0">Showcase</div>
                <div className="col-12 col-md-2">
                  <div className="d-flex align-items-center gap-2">
                    <div className="dropdown">
                      <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ACTIVE
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <form action="{{ route('members.update', $item->id) }}" method="post">
                            <input type="hidden" name="status" value="ACTIVE" />
                            <input type="hidden" name="ecourse_slug" value="{{ $item->ecourse->slug }}" />
                            <button type="submit" className="dropdown-item">
                              Aktif
                            </button>
                          </form>
                        </li>
                        <li>
                          <form action="{{ route('members.update', $item->id) }}" method="post">
                            <input type="hidden" name="status" value="NONACTIVE" />
                            <input type="hidden" name="ecourse_slug" value="{{ $item->ecourse->slug }}" />
                            <button type="submit" className="dropdown-item">
                              Nonaktif
                            </button>
                          </form>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="modal fade" id="modalVoucher{{ $item->id }}">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Info Voucher</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table">
                                            <tr>
                                                <td style={{width: '50%'}}>Kode Voucher</td>
                                                <th>: {{ $item->vouchers->code_voucher }}</th>
                                            </tr>
                                            <tr>
                                                <td>Harga Diskon</td>
                                                <th>: {{ $item->vouchers->price_discount }}</th>
                                            </tr>
                                            <tr>
                                                <td>Voucher Untuk?</td>
                                                <th>:
                                                    @if ($item->vouchers->for == 'SEMUA E-COURSE')
                                                        {{ $item->vouchers->for }}
                                                    @else
                                                        <span className="text-primary">{{ $item->vouchers->for }}</span>
                                                        <br>
                                                        <p className="mb-0 fs-7">
                                                            {{ $item->vouchers->ecourse_id > 0 ? $item->vouchers->ecourse->title : $item->vouchers->event->title }}
                                                        </p>
                                                    @endif
                                                </th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> */}
        </div>
      </section>

      <div className="modal fade" id="access">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Beri Akses pada Member</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="{{ route('members.store') }}" method="post">
                <input type="hidden" name="ecourse_id" value="{{ $ecourse->id }}" />

                <select name="user_id" id="user_id" className="form-control mb-3">
                  <option value="{{ $item->id }}">muhammadyunusalmeida@gmail.com</option>
                </select>
                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <Plus /> Tambah Akses
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* @push('addon-script')
    <script>
        console.log(@json($all_members))
    </script>
@endpush */}
    </Admin>
  );
}
