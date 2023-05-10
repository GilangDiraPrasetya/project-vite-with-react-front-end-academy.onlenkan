import React from 'react';
import Member from '../../../Layouts/Member';

export default function Index() {
  return (
    <Member>
      <section className="py-4">
        <h4 className="text-dark mb-3">Source Code</h4>
        {/* @if ($resource_members->count() > 0)
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

            @foreach ($resource_members as $item)
                <div className="card border-0 mb-2" id="listResource">
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
                                    <button type="button" data-bs-toggle="modal"
                                        data-bs-target="#detailModal{{ $item->resource->id }}"
                                        className="btn btn-info btn-sm text-white d-flex align-items-center gap-2">
                                        <i className="ai-info"></i> Detail
                                    </button>
                                    <form action="{{ route('home.resource.confirm') }}" method="post" className="d-inline">
                                        @csrf

                                        <input type="hidden" name="resource_id" value="{{ $item->resource->id }}">
                                        <input type="hidden" name="status" value="PAID">
                                        <button type="submit"
                                            className="btn btn-primary btn-sm d-flex align-items-center gap-2">
                                            <i className="ai-cloud-download"></i>
                                            Download
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @include('pages.member.resources.detail-modal')
            @endforeach
        @else */}
        <p className="text-danger">Belum Ada Source Code</p>
        {/* @endif */}
      </section>
    </Member>
  );
}
