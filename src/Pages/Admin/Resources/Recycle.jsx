import React from 'react'
import Admin from '../../../Layouts/Admin'
import { ArrowLeft, Edit } from 'akar-icons'
import { Link } from 'react-router-dom'

export default function Recycle() {
  return (
    <Admin>
    <section className="py-5">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3 mb-3">
            <Link to="/admin-academy/source-code" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft/>
            </Link>
            <h5 className="text-dark m-0">Sampah Source Code</h5>
        </div>

            <div className="card border-0 d-none d-md-block mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1">#</div>
                        <div className="col-5">Informasi Source</div>
                        <div className="col-4">Harga</div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>

                <div className="card border-0 mb-2 " id="listResource">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-4 col-md-1 mb-3 mb-md-0">
                                <img src="{{ url('storage/' . $item->image) }}" alt="Template Admin" className="rounded" />
                            </div>
                            <div className="col-12 col-md-5 mb-3 mb-md-0">
                                <span className="fs-7 text-dark">HTML CSS</span> <br />
                                <a href="{{ route('source-code.show', $item->id) }}" className="text-primary">
                                Template Admin
                                </a>
                            </div>
                            <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    GRATIS
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="d-flex gap-2">
                                    <a href="{{ route('sampah.source-code.restore', $item->id) }}"
                                        onclick="return confirm('Kamu yakin ingin restore data ini?')"
                                        className="btn btn-secondary btn-sm d-flex align-items-center gap-2">
                                        <Edit/> Restore
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>

{/* @push('addon-style')
    <style>
        .card-value .card-img-top {
            height: 180px !important;
        }
    </style>
@endpush */}
    </Admin>
  )
}
