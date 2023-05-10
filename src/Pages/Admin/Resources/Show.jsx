import React from 'react';
import Admin from '../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit, Info, Search, TrashCan } from 'akar-icons';
import { CloudDownload } from 'akar-icons';
import code3 from '../../../Images/code/code3.png';
import showcode3 from '../../../Images/code/showcode3.png';

export default function Show() {
  return (
    <Admin>
      <section className="py-4">
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
              <Link to="/admin-academy/source-code" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft />
              </Link>
              <div>
                <h5 className="text-dark m-0">Personal Website Creative Designed</h5>
                <p className="text-dark">Rp. 50,000</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-start justify-content-md-end gap-2 mt-3 mt-md-0">
              <button type="button" data-bs-toggle="modal" data-bs-target="#detailModal" className="btn btn-info btn-sm text-white d-flex align-items-center gap-2">
                <Info /> Edit
              </button>
              <Link to="/admin-academy/source-code/5/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                <Edit /> Edit
              </Link>
              <form action="{{ route('source-code.destroy', $resource->id) }}" method="post" className="d-inline">
                <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onClick="return confirm('Are you sure to deleted this?')">
                  <TrashCan /> Hapus
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2 mb-2">
          <p className="text-secondary text-uppercase fs-7 fw-semibold mb-0">Transaksi</p>
          <div className="d-flex">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-white">
                <Search />
              </span>
              <input type="search" id="search" onKeyup="search()" className="border-start-0 form-control" />
            </div>
          </div>
        </div>
        <div className="mb-5" id="listMember">
          {/* @if ($transactions->count() > 0)
                    <div className="card border-0 d-none d-md-block mb-2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1">#</div>
                                <div className="col-2">Tanggal</div>
                                <div className="col-{{ $resource->price > 0 ? '3' : '6' }}">Informasi Personal</div>
                                <div className="col-2">Download</div>
                                <div className="col-{{ $resource->price > 0 ? '4' : '1' }}"></div>
                            </div>
                        </div>
                    </div>
                    @foreach ($transactions as $item)
                        @include('pages.admin.resources.card-list')
                    @endforeach
                @else */}
          <p className="text-danger">Belum ada yang mendownload</p>
          {/* @endif */}
        </div>
      </section>

      <div className="modal" id="detailModal">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detail Source Code</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Judul</p>
                </div>
                <div className="col-12 col-md-9">
                  <p className="m-0">
                    <span className="d-none d-md-inline-block">:</span> Personal Website Creative Designed
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Kategori</p>
                </div>
                <div className="col-12 col-md-9">
                  <p className="m-0">
                    <span className="d-none d-md-inline-block">:</span> HTML CSS BOOTSTRAP
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Harga</p>
                </div>
                <div className="col-12 col-md-9">
                  <p className="m-0">
                    <span className="d-none d-md-inline-block">:</span>
                    Rp. 50,000
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Gratis Untuk?</p>
                </div>
                <div className="col-12 col-md-9">
                  <p className="m-0">
                    <span className="d-none d-md-inline-block">:</span>Berbayar Untuk Semua
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Deskripsi</p>
                </div>
                <div className="col-12 col-md-9">
                  <div className="m-0 d-flex gap-1">
                    <span className="d-none d-md-inline-block">: </span> Source code ini dibuat dengan HTML CSS Bootstrap yang mana jika ingin mengikuti video tutorialnya ada di YouTube Yunus Almeida, klik disini untuk melihat tutorialnya.
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Link Preview</p>
                </div>
                <div className="col-12 col-md-9 d-flex gap-1">
                  <span className="d-none d-md-inline-block">: </span>
                  Tidak ada link
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Files</p>
                </div>
                <div className="col-12 col-md-9 d-flex gap-1">
                  <span className="d-none d-md-inline-block">: </span>
                  <a href="{{ url('storage/' . $resource->files) }}" download="download" className="btn btn-sm btn-light d-inline-flex align-items-center gap-2">
                    <CloudDownload /> Download File
                  </a>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Gambar Utama</p>
                </div>
                <div className="col-12 col-md-9 d-flex gap-1">
                  <span className="d-none d-md-inline-block">: </span>
                  <img src={code3} alt="" className="rounded" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Gambar Preview</p>
                </div>
                <div className="col-12 col-md-9 d-flex gap-1">
                  <span className="d-none d-md-inline-block">: </span>
                  <img src={showcode3} alt="" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* @push('addon-script')
        <script>
            function search() {
                var input = document.getElementById('search');
                var filter = input.value.toLowerCase();
                var listMember = document.getElementById('listMember');
                var card = document.querySelectorAll('.list-member');
    
                for (var i = 0; i < card.length; i++) {
                    var name = document.querySelectorAll('.name')[i];
    
                    if (name.innerHTML.toLowerCase().indexOf(filter) > -1) {
                        card[i].style.display = "";
                    } else {
                        card[i].style.display = "none";
                    }
                }
            }
        </script>
    @endpush */}
    </Admin>
  );
}
