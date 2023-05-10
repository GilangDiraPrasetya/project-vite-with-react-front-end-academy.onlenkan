import { CloudDownload } from 'akar-icons';
import React from 'react';

export default function DetailModal() {
  return (
    <>
      <div className="modal" id="detailModal{{ $item->resource->id }}">
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
                    <span className="d-none d-md-inline-block">: </span>
                    {/* {{ $item->resource->title }} */}Coba
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Kategori</p>
                </div>
                <div className="col-12 col-md-9">
                  <p className="m-0">
                    <span className="d-none d-md-inline-block">: </span>
                    {/* {{ $item->resource->category->name }} */}Coba
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Harga</p>
                </div>
                <div className="col-12 col-md-9">
                  <p className="m-0">
                    <span className="d-none d-md-inline-block">: </span>
                    {/* @if ($item->resource->price > 0)
                                Rp. @if ($item->resource->price_discount > 0)
                                    {{ number_format($item->resource->price_discount) }} <span
                                        className="text-decoration-line-through text-danger">Rp.
                                        {{ number_format($item->resource->price) }}</span>
                                @else
                                    {{ number_format($item->resource->price) }}
                                @endif
                            @else */}
                    GRATIS
                    {/* @endif */}
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Gratis Untuk?</p>
                </div>
                <div className="col-12 col-md-9">
                  <p className="m-0">
                    <span className="d-none d-md-inline-block">: </span>
                    {/* {{ $item->resource->available_for == 'EVERYONE' ? 'Berbayar Untuk Semua' : 'Gratis Untuk Member' }} */}
                    Gratis untuk member
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Deskripsi</p>
                </div>
                <div className="col-12 col-md-9">
                  <div className="m-0 d-flex gap-1">
                    <span className="d-none d-md-inline-block">: </span>
                    {/* <?= $item->resource->description ?> */}Desc
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
                  {/* @if ($item->resource->link_preview == null)
                            Tidak ada link
                        @else
                            <a href="{{ $item->resource->link_preview }}" target="_blank"
                                className="text-decoration-underline">
                                {{ $item->resource->link_preview }}
                            </a>
                        @endif */}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Files</p>
                </div>
                <div className="col-12 col-md-9 d-flex gap-1">
                  <span className="d-none d-md-inline-block">: </span>
                  <a href="{{ url('storage/' . $item->resource->files) }}" download="download" className="btn btn-sm btn-light d-inline-flex align-items-center gap-2">
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
                  <img src="{{ url('storage/' . $item->resource->image) }}" alt="" className="rounded" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-3 text-secondary">
                  <p className="mb-1">Gambar Preview</p>
                </div>
                <div className="col-12 col-md-9 d-flex gap-1">
                  <span className="d-none d-md-inline-block">: </span>
                  <img src="{{ url('storage/' . $item->resource->preview) }}" alt="" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
