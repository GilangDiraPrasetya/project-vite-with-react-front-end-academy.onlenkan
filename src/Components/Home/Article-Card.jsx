import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard() {
  return (
    <>
      <Link to="/artikel/artikel-detail" class="card border-0 card-value rounded-3 text-decoration-none mb-3">
        <img src="" alt="{{ $item->title }}" class="card-img-top" />

        <div class="card-body p-0 py-2">
          <span class="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
            Category
          </span>
          <h6 class="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Title</h6>
          <p class="text-secondary fs-7 mb-2">Description</p>

          <div class="d-flex align-items-center gap-3">
            {/* @if (!empty($item->createdby->photo)) */}
            <img src="" alt="" class="avatar rounded-circle" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
            {/* @else
                <img src="https://ui-avatars.com/api/?name={{ $item->createdby->name }}" alt=""
                    class="avatar rounded-circle" style={{width: '36px', height: '36px', objectFit: 'cover'}} />
            @endif */}
            <div>
              <p class="text-dark fs-7 fw-semibold mb-0">Name</p>
              <span class="fw-normal text-secondary mb-0" style="font-size: 12px; margin-top: -5px">
                {new Date(item.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
