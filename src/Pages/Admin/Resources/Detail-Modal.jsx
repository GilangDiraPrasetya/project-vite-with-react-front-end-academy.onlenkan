import React from 'react';
import { CloudDownload } from 'akar-icons';
import code3 from '../../../Images/code/code3.png';
import showcode3 from '../../../Images/code/showcode3.png';

export default function DetailModal() {
  return (
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
  );
}
