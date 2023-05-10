import React from 'react'
import Admin from '../../../Layouts/Admin'
import { ArrowLeft, Plus } from 'akar-icons'
import { Link } from 'react-router-dom'

export default function Create() {
  return (
    <Admin>
    <section className="py-4">
        <div className="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
            <Link to="/admin-academy/source-code" className="btn btn-light d-flex align-items-center justify-content-center">
                <ArrowLeft/>
            </Link>
            <h5 className="text-dark m-0">Tambah Source Code Baru</h5>
        </div>

        <div className="card border-0 mt-4">
            <div className="card-body p-4">
                <form action="{{ route('source-code.store') }}" method="post" enctype="multipart/form-data">

                    <div className="row">
                        <div className="col-md-8">
                            <div className="mb-3">
                                <label for="title">Judul Code*</label>
                                <input type="text" name="title" id="title" className="form-control"
                                    placeholder="Ex: Template Admin" required autofocus />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="category">Kategori</label>
                                <select name="resource_category_id" id="category" className="form-control">
                                        <option value="{{ $item->id }}">HTML CSS</option>
                                        <option value="{{ $item->id }}">HTML CSS BOOTSTRAP</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="files">File*</label>
                                <input type="file" name="files" id="files" className="form-control"
                                    placeholder="Usahakan RAR Atau ZIP" accept=".zip,.rar,.7z,.gz" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="image">Gambar Utama</label>
                                <input type="file" name="image" id="image" className="form-control" accept="image/*"
                                    required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="preview">Gambar Preview</label>
                                <input type="file" name="preview" id="preview" className="form-control" accept="image/*"
                                    required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="preview">Link Preview (Jika Ada)</label>
                                <input type="text" name="link_preview" id="link_preview" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="price">Harga</label>
                                <input type="number" name="price" id="price" className="form-control" />
                                <span className="text-secondary fs-7">Kosongkan jika gratis!</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="price_discount">Diskon</label>
                                <input type="number" name="price_discount" id="price_discount" className="form-control" />
                                <span className="text-secondary fs-7">Kosongkan jika tidak ada diskon!</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label for="available_for">Target Pasar</label>
                                <select name="available_for" id="available_for" className="form-control">
                                    <option value="EVERYONE">Semua Orang</option>
                                    <option value="MEMBER ONLY">Hanya Member Kelas</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-3">
                                <label for="description">Deskripsi</label>
                                <textarea name="description" id="description" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-primary d-flex align-items-center gap-2" type="submit">
                               <Plus/>Simpan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

{/* @push('addon-script')
    <script src="https://cdn.tiny.cloud/1/bkzhihdwuw99i70iz5u9348ydtexd08xhsqm10ovsvk37vxk/tinymce/6/tinymce.min.js"
        referrerpolicy="origin"></script>
    <script>
        tinymce.init({
            selector: '#description',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat ',
        });
    </script>
@endpush */}
    </Admin>
  )
}
