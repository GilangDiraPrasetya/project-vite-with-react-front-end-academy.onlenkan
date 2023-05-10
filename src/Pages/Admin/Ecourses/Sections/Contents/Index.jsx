import React from 'react';
import Admin from '../../../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Edit, Play, Plus, TrashCan } from 'akar-icons';
import video1 from '../../../../../Images/video1.mp4';

export default function Index() {
  return (
    <Admin>
      <section className="py-4" id="content">
        <div className="row align-items-start align-items-md-center justify-content-center justify-content-md-between mb-4">
          <div className="col-md-10">
            <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
              <Link to="/admin-academy/ecourses/show/section/list" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft />
              </Link>
              <h5 className="text-dark m-0">Manajemen Materi E-Course Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride Bagian Introduction Kelas</h5>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/admin-academy/ecourses/show/section/list/materi/1/create" className="btn btn-primary d-inline-flex align-items-center gap-2 float-start float-md-end">
              <Plus /> Buat Baru
            </Link>
          </div>
        </div>

        {/* @if ($ecourse_contents->count() > 0) */}
        <div className="card border-0 mb-2 d-none d-md-block">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-4">Judul Materi</div>
              <div className="col-3">Video</div>
              <div className="col-2">Posisi</div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        {/* @foreach ($ecourse_contents as $key => $item) */}
        <div className="card border-0 mb-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-1 mb-3 mb-md-0">1</div>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <Link href="{{ route('ecourse-list-content', ['slug' => $ecourse->slug, 'slugSection' => $item->slug]) }}">Perkenalan Mentor</Link>
              </div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                {/* @if (!empty($item->video)) */}
                <a href="#" className="text-decoration-none d-inline-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#video">
                  <Play /> Lihat Video
                </a>
                {/* @else
                                    <p className="m-0 text-danger">Belum Ada Materi Video</p>
                                @endif */}
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <div className="d-flex align-items-center gap-2">
                  <form action="{{ route('ecourse-content.update', $item->id) }}" method="post">
                    <input type="hidden" name="position" value="up" />
                    <input type="hidden" name="ecourse_slug" value="{{ $ecourse->slug }}" />
                    <input type="hidden" name="ecourse_section_slug" value="{{ $ecourse_section->slug }}" />
                    <button className="btn btn-sm btn-light d-flex align-items-center justify-content-center">
                      <ChevronUp />
                    </button>
                  </form>
                  <form action="{{ route('ecourse-content.update', $item->id) }}" method="post">
                    <input type="hidden" name="position" value="down" />
                    <input type="hidden" name="ecourse_slug" value="{{ $ecourse->slug }}" />
                    <input type="hidden" name="ecourse_section_slug" value="{{ $ecourse_section->slug }}" />
                    <button className="btn btn-sm btn-light d-flex align-items-center justify-content-center">
                      <ChevronDown />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-2">
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin-academy/ecourses/show/section/list/materi/1/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                    <Edit /> Edit
                  </Link>
                  <form action="{{ route('ecourse-content.destroy', $item->id) }}" method="post" className="d-inline">
                    <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onClick="return confirm('Are you sure to deleted this?')">
                      <TrashCan />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="video">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Video untuk Perkenalan Mentor
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <video controls>
                  <source src={video1} type="video/mp4" />
                </video>

                <p className="text-secondary mt-5">Pada video ini kita akan berkenalan terlebih dahulu tentang kelas yg akan kita jalani dan siapa mentornya.</p>
              </div>
            </div>
          </div>
        </div>
        {/* @endforeach
        @else
            <p className="text-danger">Belum Ada Materi E-Course</p>
        @endif */}
      </section>
    </Admin>
  );
}
