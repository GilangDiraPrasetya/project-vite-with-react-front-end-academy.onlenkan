import React from 'react';
import Member from '../../../Layouts/Member';
import { WhatsappFill } from 'akar-icons';

export default function Index() {
  return (
    <Member>
      <section className="py-4">
        <h4 className="text-dark mb-4">Event Saya</h4>
        {/* @if ($members->count() > 0) */}
        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-3">Event</div>
              <div className="col-2">Tanggal</div>
              <div className="col-2">Harga</div>
              <div className="col-2">Status</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        {/* @foreach ($members as $item) */}
        <div className="card border-0  mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                {/* @if (!empty($item->event->image)) */}
                <img src="{{ url('storage', $item->event->image) }}" style={{ height: 'auto', objectFit: 'cover' }} className="rounded" alt="{{ $item->event->title }}" />
                {/* @else
                                    <img src="https://ui-avatars.com/api/?name={{ $item->event->title }}"
                                        style={{height: 'auto', objectFit: 'cover'}} className="rounded"
                                        alt="{{ $item->event->title }}" />
                                @endif */}
              </div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <a href="{{ route('manajemen-event.show', $item->event->slug) }}">{/* {{ $item->event->title }} */}Coba</a> <br />
                <p className="m-0 fs-7">{/* {{ $item->event->instructor->name }} */}coba</p>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                {/* {{ Carbon\Carbon::parse($item->event->date)->format('d M Y') }}  */} <br />
                <p className="m-0 fs-7">{/* {{ $item->event->time }} */} coba</p>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                Rp. 55,555
                {/* @if ($item->event->price_discount == 0)
                                    Rp. {{ number_format($item->event->price) }}
                                @else
                                    Rp. {{ number_format($item->event->price_discount) }} <br>
                                    <span className="text-danger text-decoration-line-through fs-7">
                                        Rp. {{ number_format($item->event->price) }}
                                    </span>
                                @endif */}
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                SELESAI
                {/* @if ($item->event->status == 'soon')
                                    AKAN DATANG
                                @elseif($item->event->staus == 'ongoing')
                                    SEDANG BERLANGSUNG
                                @else
                                    SELESAI
                                @endif */}
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <div className="d-flex">
                  <a
                    href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20Admin!%0ASaya%20*{{ Auth::user()->name }}*%20peserta%20*{{ $item->event->title }}*%20mau%20bertanya..."
                    className="btn btn-success btn-sm d-flex align-items-center gap-2"
                  >
                    <WhatsappFill />
                    Chat Admin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* @endforeach
        @else */}
        <p className="text-danger">Belum Ada Event</p>
        {/* @endif */}
      </section>
    </Member>
  );
}
