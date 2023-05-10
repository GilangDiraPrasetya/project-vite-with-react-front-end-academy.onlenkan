import React from 'react';
import { Link } from 'react-router-dom';

export default function EcourseCard() {
  return (
    <>
      <Link to="/kelas/kelas-detail" class="card border-0 card-value rounded-3 text-decoration-none mb-3">
        <img src="" alt="{{ $item->title }}" class="card-img-top" />

        <div class="card-body p-0 py-2">
          <span class="d-inline-block text-primary fw-semibold mb-1" style="font-size: 12px">
            Name
          </span>
          <h6 class="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Title</h6>
          <div class="d-flex align-items-center gap-2">
            <p class="text-dark fw-semibold m-0">Rp. 500,000 </p>
            {/* @if ($item->price_discount > 0)
                <p class="text-dark fw-semibold m-0">Rp. {{ number_format($item->price_discount) }}
                </p>
                <p class="text-danger text-decoration-line-through fs-7 fw-semibold m-0">
                    Rp. {{ number_format($item->price) }}
                </p>
            @else
                <p class="text-dark fw-semibold m-0">Rp. {{ number_format($item->price) }}
                </p>
            @endif */}
          </div>
        </div>
      </Link>
    </>
  );
}
