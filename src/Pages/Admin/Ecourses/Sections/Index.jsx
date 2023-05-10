import React from 'react';
import Admin from '../../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Edit, Plus, TrashCan } from 'akar-icons';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <div className="row align-items-start align-items-md-center justify-content-center justify-content-md-between mb-4">
          <div className="col-md-10">
            <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
              <Link to="/admin-academy/ecourses/show" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft />
              </Link>
              <h5 className="text-dark m-0">Manajemen Section Materi Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</h5>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/admin-academy/ecourses/show/section/list/create" className="btn btn-primary d-flex align-items-center gap-2 float-start float-md-end" style={{ width: 'max-content' }}>
              <Plus /> Buat Baru
            </Link>
          </div>
        </div>

        {/* @if ($ecourse_sections->count() > 0) */}
        <div className="card border-0 mb-2 d-none d-md-block">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-4">Judul Section</div>
              <div className="col-3">Total Materi</div>
              <div className="col-2">Posisi</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        {/* @foreach ($ecourse_sections as $key => $item) */}
        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-1 mb-3 mb-md-0">1</div>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <Link to="/admin-academy/ecourses/show/section/list/materi/1">Introduction Kelas</Link>
              </div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">3 Materi</div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <form action="{{ route('ecourse-section.update', $item->id) }}" method="post">
                    <input type="hidden" name="position" value="up" />
                    <input type="hidden" name="ecourse_slug" value="{{ $ecourse->slug }}" />
                    <button className="btn btn-sm btn-light d-flex align-items-center justify-content-center">
                      <ChevronUp />
                    </button>
                  </form>
                  <form action="{{ route('ecourse-section.update', $item->id) }}" method="post">
                    <input type="hidden" name="position" value="down" />
                    <input type="hidden" name="ecourse_slug" value="{{ $ecourse->slug }}" />
                    <button className="btn btn-sm btn-light d-flex align-items-center justify-content-center">
                      <ChevronDown />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-2">
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin-academy/ecourses/show/section/list/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('ecourse-section.destroy', $item->id) }}" method="post" className="d-inline">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onClick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* @endforeach
        @else
            <p className="text-danger">Belum Ada Section E-Course</p>
        @endif */}

        {/* {{-- <div className="row mt-3">
            <div className="col-12">
                <div className="card border-0 mb-3">
                    <div className="card-body p-4">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="fw-normal fs-7 text-secondary">
                                        <th>#</th>
                                        <th>Judul Bagian E-Course</th>
                                        <th>Total Materi</th>
                                        <th>Posisi</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if ($ecourse_sections->count() > 0)
                                        @foreach ($ecourse_sections as $key => $item)
                                            <tr style="vertical-align: middle">
                                                <td>{{ ++$key }}</td>
                                                <td>
                                                    <a
                                                        href="{{ route('ecourse-list-content', ['slug' => $ecourse->slug, 'slugSection' => $item->slug]) }}">{{ $item->title }}</a>
                                                </td>
                                                <td>{{ $item->ecourse_content_count }} Materi</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <form action="{{ route('ecourse-section.update', $item->id) }}"
                                                            method="post">
                                                            @csrf
                                                            @method('PUT')
                                                            <input type="hidden" name="position" value="up">
                                                            <input type="hidden" name="ecourse_slug"
                                                                value="{{ $ecourse->slug }}">
                                                            <button
                                                                className="btn btn-sm btn-light d-flex align-items-center justify-content-center"
                                                                {{ $item->order == 1 ? 'disabled' : '' }}>
                                                                <i className="ai-chevron-up"></i>
                                                            </button>
                                                        </form>
                                                        <form action="{{ route('ecourse-section.update', $item->id) }}"
                                                            method="post">
                                                            @csrf
                                                            @method('PUT')
                                                            <input type="hidden" name="position" value="down">
                                                            <input type="hidden" name="ecourse_slug"
                                                                value="{{ $ecourse->slug }}">
                                                            <button
                                                                className="btn btn-sm btn-light d-flex align-items-center justify-content-center"
                                                                {{ ($item->order == 1 && $ecourse_sections->count() == 1) || $ecourse_sections->count() == $item->order ? 'disabled' : '' }}>
                                                                <i className="ai-chevron-down"></i>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <a href="{{ route('ecourse-list-materi.edit', ['slug' => $ecourse->slug, 'id' => $item->id]) }}"
                                                            className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                                                            <i className="ai-edit"></i> Edit
                                                        </a>
                                                        <form action="{{ route('ecourse-section.destroy', $item->id) }}"
                                                            method="post" className="d-inline">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit"
                                                                className="btn btn-danger btn-sm d-flex align-items-center gap-2"
                                                                onclick="return confirm('Are you sure to deleted this?')">
                                                                <i className="ai-trash-can"></i>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @else
                                        <tr>
                                            <td colspan="5">
                                                <p className="text-danger text-center mt-3">Belum ada bagian materi
                                                    e-course, kok bisa?</p>
                                            </td>
                                        </tr>
                                    @endif
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div> --}} */}
      </section>
    </Admin>
  );
}
