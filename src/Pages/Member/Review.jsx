import React from 'react';
import Member from '../../Layouts/Member';
import { Plus, ThumbsUp } from 'akar-icons';

export default function Review() {
  return (
    <Member>
      <section className="py-4">
        <h5 className="text-dark">Beri Kami Masukan</h5>
        <p className="text-secondary mb-3">Masukan kamu sangat berarti untuk mengembangkan Onlenkan Academy</p>
        <button type="button" data-bs-toggle="modal" data-bs-target="#addReview" className="btn btn-primary d-inline-flex align-items-center gap-2 mb-4">
          <Plus /> Buat Review
        </button>

        {/* @if ($members->count() > 0)
            @if ($reviews->count() > 0)
                <div className="card border-0 d-none d-md-block mb-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1">#</div>
                            <div className="col-4">E-Course</div>
                            <div className="col-2">Bintang</div>
                            <div className="col-2">Review</div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>

                @foreach ($reviews as $item)
                    <div className="card border-0  mb-2">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-4 col-md-1 mb-3 mb-md-0">
                                    @if (!empty($item->member->ecourse->image))
                                        <img src="{{ url('storage', $item->member->ecourse->image) }}"
                                            style="height: auto; object-fit: cover" className="rounded"
                                            alt="{{ $item->member->ecourse->title }}">
                                    @else
                                        <img src="https://ui-avatars.com/api/?name={{ $item->member->ecourse->title }}"
                                            style="height: auto; object-fit: cover" className="rounded"
                                            alt="{{ $item->member->ecourse->title }}">
                                    @endif
                                </div>
                                <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    {{ $item->member->ecourse->title }}
                                    <p className="text-secondary fs-7">{{ $item->member->ecourse->category->name }}</p>
                                </div>
                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                    @for ($i = 0; $i < $item->star; $i++)
                                        <i className="bx bxs-star text-warning"></i>
                                    @endfor
                                </div>
                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                    {!! $item->review !!}
                                </div>
                                <div className="col-12 col-md-3 mb-3 mb-md-0">
                                    <div className="d-flex align-items-center gap-2">
                                        <button type="button" data-bs-toggle="modal"
                                            data-bs-target="#editModal{{ $item->id }}"
                                            className="btn btn-info btn-sm text-white d-flex align-items-center gap-2">
                                            <i className="ai-edit"></i> Edit
                                        </button>
                                        <form action="{{ route('beri-review.destroy', $item->id) }}" method="post"
                                            className="d-inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit"
                                                className="btn btn-danger btn-sm d-flex align-items-center gap-2"
                                                onclick="return confirm('Kamu yakin mau menghapus review ini?')">
                                                <i className="ai-trash-can"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="editModal{{ $item->id }}" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Review Kamu</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="{{ route('beri-review.update', $item->id) }}" method="post">
                                        @csrf
                                        @method('PUT')

                                        <div className="mb-3">
                                            <label for="member_id">Untuk E-Course</label>
                                            <select name="member_id" id="member_id" className="form-control">
                                                @foreach ($members as $member)
                                                    <option value="{{ $member->id }}"
                                                        {{ $item->member_id == $member->id ? 'SELECTED' : '' }}>
                                                        {{ $member->ecourse->title }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="star">Bintang</label>
                                            <select name="star" id="star" className="form-control">
                                                @for ($i = 1; $i <= 5; $i++)
                                                    <option value="{{ $i }}"
                                                        {{ $i == $item->star ? 'SELECTED' : '' }}>
                                                        {{ $i }}
                                                    </option>
                                                @endfor
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="review">Review</label>
                                            <textarea name="review" id="review" cols="30" rows="10" className="review">{{ $item->review }}</textarea>
                                        </div>

                                        <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                                            <i className="ai-thumbs-up"></i> Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            @endif
        @else */}
        <p className="text-danger">Kamu tidak memiliki kelas untuk di review</p>
        {/* @endif */}
      </section>

      {/* Modal */}
      <div className="modal fade" id="addReview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Review Kami
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="{{ route('beri-review.store') }}" method="post">
                <div className="mb-3">
                  <label for="member_id">Untuk E-Course</label>
                  <select name="member_id" id="member_id" className="form-control">
                    {/* @foreach ($members as $item) */}
                    {/* <option value="{{ $item->id }}">{{ $item->ecourse->title }}</option> */}
                    <option value="{{ $item->id }}">Judul1</option>
                    <option value="{{ $item->id }}">Judul2</option>
                    {/* @endforeach */}
                  </select>
                </div>
                <div className="mb-3">
                  <label for="star">Bintang</label>
                  <select name="star" id="star" className="form-control">
                    {/* @for ($i = 1; $i <= 5; $i++)
                                    <option value="{{ $i }}" {{ $i == 5 ? 'SELECTED' : '' }}>
                                        {{ $i }}
                                    </option>
                                @endfor */}
                    <option value="{{ $i }}">1</option>
                    <option value="{{ $i }}">2</option>
                    <option value="{{ $i }}">3</option>
                    <option value="{{ $i }}">4</option>
                    <option value="{{ $i }}">5</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="review">Review</label>
                  <textarea name="review" id="review" cols="30" rows="10" className="review"></textarea>
                </div>

                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <ThumbsUp /> Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* @push('addon-style')
    <link rel="stylesheet" href="{{ url('assets/vendors/mervick-emojionearea/dist/emojionearea.min.css') }}">
@endpush */}

      {/* @push('addon-script')
    <script src="{{ url('assets/vendors/mervick-emojionearea/dist/emojionearea.min.js') }}"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#review").emojioneArea();
        });
    </script>
@endpush */}
    </Member>
  );
}
