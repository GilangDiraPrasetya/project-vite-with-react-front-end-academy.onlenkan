import React from 'react';
import Admin from '../../../Layouts/Admin';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'akar-icons';
import artikel from '../../../Images/artikel/artikel1.png';

export default function Show() {
  return (
    <Admin>
      <section className="py-4">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/artikel/" className="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h4 className="text-dark m-0">Apa yang baru di Laravel 10</h4>
        </div>

        <div className="card border-0 mt-4">
          <div className="card-body p-2 p-md-4">
            <div className="text-secondary mb-5">
              Laravel 9.49 Sejak laravel versi ini rilis, kita bisa membuat perintah make:model tanpa memberikan namanya, walaupun sebenarnya bisa dengan memasukkan nama atau flag nya. Model Berikut ini adalah perintah ketika kita ingin
              membuat model untuk Product. php artisan make:model Ketika kita enter, dulu nya ini akan error, namun sekarang tidak. Karena dia sudah akan langsung bertanya apa nama model kita. Kurang lebih akan seperti ini jika kita terus
              enter. What should the model be named? ❯ Product Would you like any of the following? [none] none ........... ..............0 all .......................... 1 factory ........... ...........2 form requests ........... .....3
              migration ........... .........4 policy ........... ............5 resource controller ...........6 seed .........................7 ❯ 4 INFO Model [app/Models/Product.php] created successfully. INFO Migration
              [database/migrations/2023_02_05_095212_create_products_table.php] created successfully. Controller Sama dengan model, controller juga akan seperti itu. Kita tetap akan di tanya ketika hanya membuat artisan untuk
              make:controller. php artisan make:controller Selanjutnya, dia akan memberi pertanyaan seputar opsi yang diberikan default controller seperti: api, invokable, resource, singleton atau bahkan tidak ada sama sekali, kita bisa
              pilih empty. What should the controller be named? ❯ ProductController Which type of controller would you like: [empty] empty ............................ 0 api............................... 1 invokable
              ........................ 2 resource ......................... 3 singleton ........................ 4 ❯ 3 What model should this resource controller be for? [none] ❯ Product INFO Controller
              [app/Http/Controllers/ProductController.php] created successfully. Bahkan sebenarnya tidak hanya itu, semua perintah yang berbentuk make akan selalu bertanya terkait nama maupun opsi yang di tawarkannya. Make Jika kalian ingin
              tahu apa-apa saja perintah untuk make, kita bisa lakukan perintah list diikuti dengan key nya seperti: php artisan list make Maka harusnya akan muncul daftar perintah seperti ini: make:cast Create a new custom Eloquent cast
              class make:channel Create a new channel class make:command Create a new Artisan command make:component Create a new view component class make:controller Create a new controller class make:event Create a new event class
              make:exception Create a new custom exception class make:factory Create a new model factory make:job Create a new job class make:listener Create a new event listener class make:mail Create a new email class make:middleware
              Create a new middleware class make:migration Create a new migration file make:model Create a new Eloquent model class make:notification Create a new notification class make:observer Create a new observer class make:policy
              Create a new policy class make:provider Create a new service provider class make:request Create a new form request class make:resource Create a new resource make:rule Create a new validation rule make:scope Create a new scope
              class make:seeder Create a new seeder class make:test Create a new test class
            </div>
            <div className="row align-items-center mb-1 fs-7">
              <div className="col-4">Status</div>
              <div className="col-8">: Public</div>
            </div>
            <div className="row align-items-center mb-1 fs-7">
              <div className="col-4">Tanggal Dibuat</div>
              <div className="col-8">: 28 Feb 2023</div>
            </div>
            <div className="row align-items-center mb-1 fs-7">
              <div className="col-4">Dibuat Oleh</div>
              <div className="col-8">: Muhammad Yunus</div>
            </div>
            <div className="row align-items-center mb-1 fs-7">
              <div className="col-4">Terakhir Diperbarui</div>
              <div className="col-8">: 28 Feb 2023 - Muhammad Yunus</div>
            </div>
            <div className="row mb-1 fs-7">
              <div className="col-4">Gambar Utama</div>
              <div className="col-8 d-flex gap-1">
                : <img src={artikel} alt="{{ $article->title }}" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Admin>
  );
}
