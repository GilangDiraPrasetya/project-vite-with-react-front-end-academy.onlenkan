import React from 'react'
import Admin from '../../../../Layouts/Admin'
import { Link } from 'react-router-dom'
import { ArrowLeft, Plus } from 'akar-icons'

export default function Create() {
  return (
    <Admin>
    <section class="py-4">
        <div class="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
            <Link to="/admin-academy/kategori-source-code"
                class="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft/>
            </Link>
            <h5 class="text-dark m-0">Tambah Kategori Baru</h5>
        </div>

        <div class="card border-0 mt-4">
            <div class="card-body p-4">
                <form action="{{ route('kategori-source-code.store') }}" method="post" enctype="multipart/form-data">

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="name">Nama Kategori</label>
                                <input type="text" name="name" id="name" class="form-control"
                                    placeholder="Ex: HTML CSS" autofocus required />
                            </div>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-primary d-flex align-items-center gap-2" type="submit">
                                <Plus/>Simpan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </Admin>
  )
}
