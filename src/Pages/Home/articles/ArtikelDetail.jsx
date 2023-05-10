import React from 'react';
import artikel1 from '../../../Images/artikel/artikel1.png';
import person1 from '../../../Images/artikel/person1.png';
import Home from '../../../Layouts/Home';

function ArtikelDetail() {
  return (
    <Home>
      <section className="ecourse-list" id="kelas">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="text-center fs-7 fw-semibold">Laravel</p>
              <h2 className="section-title text-center text-dark mb-2">Apa yang baru di Laravel 10</h2>
              <p className="section-description text-center mb-3">Dalam artikel ini kita akan membahas apa saja yang terbaru di Laravel 10</p>
              <div className="d-flex align-items-center justify-content-center gap-2 mb-5">
                <img src={person1} alt="" style={{ width: '40px', height: '40px', objectFit: 'cover' }} className="avatar rounded-circle" />
                <div>
                  <p className="text-dark fw-semibold mb-0">Muhammad Yunus</p>
                  <p className="fs-7 text-secondary mb-0">22 Mar 2023</p>
                </div>
              </div>
              <img src={artikel1} alt="" className="rounded w-100 mb-5" />
              Laravel 9.49 Sejak laravel versi ini rilis, kita bisa membuat perintah make:model tanpa memberikan namanya, walaupun sebenarnya bisa dengan memasukkan nama atau flag nya. Model Berikut ini adalah perintah ketika kita ingin
              membuat model untuk Product. php artisan make:model Ketika kita enter, dulu nya ini akan error, namun sekarang tidak. Karena dia sudah akan langsung bertanya apa nama model kita. Kurang lebih akan seperti ini jika kita terus
              enter.
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default ArtikelDetail;
