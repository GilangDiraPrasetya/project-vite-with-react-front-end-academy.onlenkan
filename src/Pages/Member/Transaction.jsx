import React from 'react';
import Member from '../../Layouts/Member';
import { WhatsappFill } from 'akar-icons';

export default function Transaction() {
  return (
    <Member>
      <section className="py-4">
        <h4 className="text-dark mb-3">Transaksi Kamu</h4>

        {/* @if ($resources->count() == 0 && $ecourses->count() == 0) */}
        <p className="text-danger">Kamu tidak memiliki transaksi yang pending</p>
        {/* @else
            @if ($ecourses->count() > 0)
                <h5 className="text-dark mb-3">E-Course</h5>
                <div className="card border-0 d-none d-md-block mb-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1">#</div>
                            <div className="col-4">Informasi E-Course</div>
                            <div className="col-2">Harga Beli</div>
                            <div className="col-2">Status</div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>

                @foreach ($ecourses as $item)
                    <div className="card border-0  mb-2">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-4 col-md-1 mb-3 mb-md-0">
                                    @if (!empty($item->ecourse->image))
                                        <img src="{{ url('storage', $item->ecourse->image) }}"
                                            style="height: auto; object-fit: cover" className="rounded"
                                            alt="{{ $item->ecourse->title }}">
                                    @else
                                        <img src="https://ui-avatars.com/api/?name={{ $item->ecourse->title }}"
                                            style="height: auto; object-fit: cover" className="rounded"
                                            alt="{{ $item->ecourse->title }}">
                                    @endif
                                </div>
                                <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    {{ $item->ecourse->title }}
                                    <p className="text-secondary fs-7">{{ $item->ecourse->category->name }}</p>
                                </div>
                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                    Rp. {{ number_format($item->price) }}
                                </div>
                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                    @if ($item->status == 'ACTIVE')
                                        <p className="text-success fw-semibold mb-0">Kelas Aktif</p>
                                    @else
                                        <p className="text-warning fw-semibold mb-0">Kelas Belum Aktif</p>
                                    @endif
                                </div>
                                <div className="col-12 col-md-3 mb-3 mb-md-0">
                                    <div className="d-flex align-items-center gap-2">
                                        <a href="{{ route('home.ecourse.detail', $item->ecourse->slug) }}"
                                            className="btn btn-info btn-sm text-white d-flex align-items-center gap-2">
                                            <i className="ai-file"></i> Detail E-Course
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20min!%0ASaya%20*{{ Auth::user()->name }}*%20dan%20ini%20Email%20Saya%20*{{ Auth::user()->email }}*%0A%0ASaya%20mau%20menanyakan%20perihal%20transaksi%20saya%20untuk%20E-Course%20*{{ $item->ecourse->title }}*"
                                            target="_blank" className="btn btn-sm btn-success d-flex align-items-center gap-2">
                                            <i className="ai-whatsapp-fill"></i> Tanya Admin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            @endif

            @if ($resources->count() > 0)
                <h5 className="text-dark mb-3 mt-5">Source Code</h5>
                <div className="card border-0 d-none d-md-block mb-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1">#</div>
                            <div className="col-6">Source Code</div>
                            <div className="col-2">Harga</div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
                @foreach ($resources as $item)
                    <div className="card border-0 mb-2 " id="listResource">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-4 col-md-1 mb-3 mb-md-0">
                                    @if ($item->resource->image != null)
                                        <img src="{{ url('storage/' . $item->resource->image) }}"
                                            alt="{{ $item->resource->title }}" className="rounded">
                                    @else
                                        <img src="https://ui-avatars.com/api/?name={{ $item->resource->title }}"
                                            alt="{{ $item->resource->title }}" className="rounded">
                                    @endif
                                </div>
                                <div className="col-12 col-md-6 mb-3 mb-md-0">
                                    <span className="fs-7 text-secondary">{{ $item->resource->category->name }}</span> <br>
                                    <p className="text-dark">{{ $item->resource->title }}</p>
                                </div>
                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                    @if ($item->resource->price > 0)
                                        Rp.
                                        {{ $item->resource->price_discount > 0 ? number_format($item->resource->price_discount) : number_format($item->resource->price) }}
                                    @else
                                        GRATIS
                                    @endif
                                </div>
                                <div className="col-12 col-md-3">
                                    <div className="d-flex gap-2">
                                        <a href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20min!%0ASaya%20*{{ Auth::user()->name }}*%20dan%20ini%20Email%20Saya%20*{{ Auth::user()->email }}*%0A%0ASaya%20mau%20menanyakan%20perihal%20transaksi%20saya%20untuk%20Source%20Code%20*{{ $item->resource->title }}*"
                                            target="_blank" className="btn btn-sm btn-success d-flex align-items-center gap-2">
                                            <WhatsappFill/> Tanya Admin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @include('pages.member.resources.detail-modal')
                @endforeach
            @endif
        @endif */}
      </section>
    </Member>
  );
}
