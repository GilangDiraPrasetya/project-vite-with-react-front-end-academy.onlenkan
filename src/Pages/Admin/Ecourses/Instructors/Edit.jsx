import React from 'react';
import Admin from '../../../../Layouts/Admin';
import { ArrowLeft, ChatEdit } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Edit() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/instructor-ecourse" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft/>
          </Link>
          <h5 className="text-dark m-0">
            Edit Mentor <strong>Muhammad Yunus Almeida</strong>
          </h5>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-4">
            <form action="{{ route('instructor-ecourse.update', $instructor->id) }}" method="post" enctype="multipart/form-data">
              <div className="row">
                <p className="text-secondary text-uppercase fw-semibold fs-7 mb-3">contact & informations</p>
                <div className="col-md-8">
                  <div className="mb-3">
                    <label for="name">Nama</label>
                    <input type="text" name="name" id="name" className="form-control" value="Muhammad Yunus Almeida" autofocus required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="photo">Foto</label>
                    <input type="file" name="photo" id="photo" className="form-control" accept="image/*" />
                    <span className="fs-7 text-secondary">Isi jika ingin mengubah foto</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="email">Alamat Email</label>
                    <input type="email" name="email" id="email" className="form-control" value="muhammadyunusalmeida@gmail.com" placeholder="example@example.com" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="phone_number">WhatsApp</label>
                    <input type="number" name="phone_number" id="phone_number" className="form-control" value="6281231233123" placeholder="618123456789" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="from">Asal</label>
                    <input type="text" name="from" id="from" className="form-control" value="Onlenkan" placeholder="Ex: Onlenkan, Probdev etc." required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="position">Posisi</label>
                    <input type="text" name="position" id="position" className="form-control" value="Full-Stack Web Developer" placeholder="Ex: Owner, Programmer, Front-End Dev etc." required />
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <label for="description">Deskripsi</label>
                    <textarea name="description" id="description" cols="30" rows="3" className="form-control">
                      4 Tahun Menjadi Full-Stack Web Developer
                    </textarea>
                  </div>
                </div>

                <hr className="my-5 w-75 mx-auto" />

                <p className="text-secondary text-uppercase fw-semibold fs-7 mb-3">social media</p>

                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="social_linkedin">LinkedIn Link</label>
                    <input type="url" name="social_linkedin" id="social_linkedin" className="form-control" value="https://linkedin.com/muhammadyunusalmeida" placeholder="https://linkedin.com/" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="social_instagram">Instagram Link</label>
                    <input type="url" name="social_instagram" id="social_instagram" className="form-control" value="https://instagram.com/yunusalmeida_" placeholder="https://instagram.com/" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="social_facebook">Facebook Link</label>
                    <input type="url" name="social_facebook" id="social_facebook" className="form-control" value="https://facebook.com/muhammadyunusalmeida" placeholder="https://facebook.com/" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="social_twitter">Twitter Link</label>
                    <input type="url" name="social_twitter" id="social_twitter" className="form-control" value="https://twitter.com/yunusalmeida" placeholder="https://twitter.com/" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="social_tiktok">Tiktok Link</label>
                    <input type="url" name="social_tiktok" id="social_tiktok" className="form-control" value="https://tiktok.com/" placeholder="https://tiktok.com/" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="social_youtube">YouTube Link</label>
                    <input type="url" name="social_youtube" id="social_youtube" className="form-control" value="https://youtube.com/" placeholder="https://youtube.com/" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label for="social_website">Website Link</label>
                    <input type="url" name="social_website" id="social_website" className="form-control" value="https://website.com" placeholder="https://" />
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-primary d-flex align-items-center gap-2" type="submit">
                    <ChatEdit />
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Admin>
  );
}
