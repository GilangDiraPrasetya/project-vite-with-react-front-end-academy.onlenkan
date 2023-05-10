import React from 'react'
import Member from '../../Layouts/Member'

export default function Information() {
  return (
    <Member>
    <section className="py-4">
        <h4 className="text-dark mb-4">Informasi Terkini</h4>

        {/* @if ($informations->count() > 0)
            <div className="card border-0 d-none d-md-block mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2">Tanggal</div>
                        <div className="col-9">Informasi</div>
                    </div>
                </div>
            </div>

            @foreach ($informations as $item)
                <a href="{{ $item->link_target != '' ? URL::to($item->link_target) : '#' }}" className="card border-0  mb-2">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-1 mb-3 mb-md-0">
                                @if ($item->status == 'info')
                                    <i className="ai-info fs-4 text-info"></i>
                                @elseif($item->status == 'success')
                                    <i className="ai-circle-check fs-5 text-success"></i>
                                @elseif($item->status == 'warning')
                                    <i className="ai-circle-alert fs-5 text-warning"></i>
                                @elseif($item->status == 'danger')
                                    <i className="ai-triangle-alert fs-5 text-danger"></i>
                                @endif
                            </div>
                            <div className="col-12 col-md-2 d-none d-md-block text-dark">
                                {{ Carbon\Carbon::parse($item->created_at)->format('d F Y') }} <br>
                            </div>
                            <div className="col-12 col-md-9 mb-3 mb-md-0">
                                <p className="text-dark fw-semibold mb-2">{{ $item->title }}</p>
                                <div className="fs-7 text-secondary">
                                    <?= $item->body ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            @endforeach
        @else */}
            <p className="text-danger">Belum Ada Informasi</p>
        {/* @endif */}
    </section>
    </Member>
  )
}
