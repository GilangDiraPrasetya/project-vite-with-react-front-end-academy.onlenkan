import Admin from '../../../../Layouts/Admin';
import { ArrowLeft, Edit, FacebookFill, Globe, InstagramFill, LinkedinFill, Plus, TiktokFill, TrashCan, TwitterFill, YoutubeFill } from 'akar-icons';
import { Link } from 'react-router-dom';
import person1 from '../../../../Images/artikel/person1.png';
// import ModalEcourse from './Modal-Ecourse';

import kelas1 from '../../../../Images/kelas/kelas1.jpg';
// import kelas2 from '../../../../Images/kelas/kelas2.jpg';

export default function Index() {
  return (
    <Admin>
      <section className="py-4">
        <div className="row align-items-start align-items-md-center justify-content-center justify-content-md-between mb-4">
          <div className="col-md-10">
            <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
              <Link to="/admin-academy/ecourses" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft />
              </Link>
              <h5 className="text-dark m-0">Manajemen Mentor E-Course</h5>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/admin-academy/instructor-ecourse/create" className="btn btn-primary d-flex align-items-center gap-2 float-start float-md-end" style={{ width: 'max-content' }}>
              <Plus /> Buat Baru
            </Link>
          </div>
        </div>

        <div className="card border-0 d-none d-md-block mb-2">
          <div className="card-body">
            <div className="row">
              <div className="col-1">#</div>
              <div className="col-4">Personal Data</div>
              <div className="col-2">Asal</div>
              <div className="col-2">Ecourse</div>
              <div className="col-3">Sosial Media</div>
            </div>
          </div>
        </div>
        <div className="card border-0 mb-2 position-relative instructor">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-4 col-md-1 mb-3 mb-md-0">
                <img src={person1} style={{ width: '36px', height: '36px', objectFit: 'cover' }} className="rounded-circle" alt="Muhammad Yunus Almeida" />
              </div>
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <p className="m-0">Muhammad Yunus Almeida</p>
                <a href="mailto:{{ $item->email }}" target="_blank" className="fs-7" rel="noopener noreferrer">
                  muhammadyunusalmeida@gmail.com
                </a>
                <br />
                <a href="https://wa.me/{{ $item->phone_number }}" target="_blank" className="fs-7" rel="noopener noreferrer">
                  6281231233123
                </a>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <p className="m-0">Onlenkan</p>
                <span className="fs-7 text-secondary">Full-Stack Web Developer</span>
              </div>
              <div className="col-12 col-md-2 mb-3 mb-md-0">
                <a type="button" data-bs-toggle="modal" className="text-primary" data-bs-target="#modalEcourse">
                  2 Ecourse
                </a>
              </div>
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <a
                    href="{{ $item->social_linkedin == null ? '#' : $item->social_linkedin }}"
                    className="d-flex align-items-center justify-content-center bg-primary-opacity text-primary text-decoration-none"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <LinkedinFill />
                  </a>
                  <a
                    href="{{ $item->social_instagram == null ? '#' : $item->social_instagram }}"
                    className="d-flex align-items-center justify-content-center bg-primary-opacity text-primary text-decoration-none"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <InstagramFill />
                  </a>
                  <a
                    href="{{ $item->social_facebook == null ? '#' : $item->social_facebook }}"
                    className="d-flex align-items-center justify-content-center bg-primary-opacity text-primary text-decoration-none"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <FacebookFill />
                  </a>
                  <a
                    href="{{ $item->social_twitter == null ? '#' : $item->social_twitter }}"
                    className="d-flex align-items-center justify-content-center bg-primary-opacity text-primary text-decoration-none"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <TwitterFill />
                  </a>
                  <a
                    href="{{ $item->social_tiktok == null ? '#' : $item->social_tiktok }}"
                    className="d-flex align-items-center justify-content-center bg-primary-opacity text-primary text-decoration-none"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <TiktokFill />
                  </a>
                  <a
                    href="{{ $item->social_youtube == null ? '#' : $item->social_youtube }}"
                    className="d-flex align-items-center justify-content-center bg-primary-opacity text-primary text-decoration-none"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <YoutubeFill />
                  </a>
                  <a
                    href="{{ $item->social_website == null ? '#' : $item->social_website }}"
                    className="d-flex align-items-center justify-content-center bg-primary-opacity text-primary text-decoration-none"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <Globe />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="actions position-absolute" style={{ right: '10px', bottom: '10px' }}>
            <div className="d-flex align-items-center gap-2">
              <Link to="/admin-academy/instructor-ecourse/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                <Edit /> Edit
              </Link>
              <form action="{{ route('instructor-ecourse.destroy', $item->id) }}" method="post" className="d-inline">
                <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onClick="return confirm('Are you sure to deleted this?')">
                  <TrashCan />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <ModalEcourse /> */}
        <div className="modal" id="modalEcourse">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{ backgroundColor: '#ECEFFC' }}>
              <div className="modal-header">
                <h5 className="modal-title">E-Course dari Muhammad Yunus Almeida</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="card border-0 d-none d-md-block mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-1">#</div>
                      <div className="col-5">Informasi E-Course</div>
                      <div className="col-2">Harga</div>
                      <div className="col-2">Jumlah Member</div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                </div>

                <div className="card border-0  mb-2">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-4 col-md-1 mb-3 mb-md-0">
                        <img src={kelas1} style={{ height: 'auto', objectFit: 'cover' }} className="rounded" alt="{{ $ecourse->title }}" />
                      </div>
                      <div className="col-12 col-md-5 mb-3 mb-md-0">
                        <a href="{{ route('ecourses.show', $ecourse->slug) }}">Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</a>
                        <br />
                        <p className="text-secondary fs-7">Full-Stack Web Developer</p>
                      </div>
                      <div className="col-12 col-md-2 mb-3 mb-md-0">Rp. 350,000</div>
                      <div className="col-12 col-md-2 mb-3 mb-md-0">32 Member</div>
                      <div className="col-12 col-md-2 mb-3 mb-md-0">
                        <div className="d-flex align-items-center gap-2">
                          <Link to="/admin-academy/ecourses/1/edit" className="btn btn-warning btn-sm text-white d-flex align-items-center gap-2">
                            <Edit /> Edit
                          </Link>
                          <form action="{{ route('ecourses.destroy', $ecourse->id) }}" method="post" className="d-inline">
                            <button type="submit" className="btn btn-danger btn-sm d-flex align-items-center gap-2" onclick="return confirm('Are you sure to deleted this?')">
                              <TrashCan />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Admin>
  );
}
