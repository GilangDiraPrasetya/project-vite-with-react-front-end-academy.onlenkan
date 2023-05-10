import React from 'react';
import Admin from '../../../Layouts/Admin';
import { ArrowLeft } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function Edit() {
  return (
    <Admin>
      <section class="py-4">
        <div class="d-flex flex-md-row flex-column align-items-start align-items-md-center gap-3">
          <Link to="/admin-academy/vouchers" class="btn btn-light d-flex align-items-center justify-content-center">
            <ArrowLeft />
          </Link>
          <h5 class="text-dark m-0">Edit Voucher YUNUSALMEIDA</h5>
        </div>

        <div class="card border-0 mt-4">
          <div class="card-body p-4">
            <form action="{{ route('vouchers.update', $item->id) }}" method="post">
              <div class="mb-3">
                <label for="for">Voucher Untuk?</label>
                <select name="for" id="for" class="form-control">
                  <option value="SEMUA E-COURSE" id="choice-ecourse-all">
                    Semua E-Course
                  </option>
                  <option value="SALAH SATU E-COURSE" id="choice-ecourse">
                    Salah Satu E-Course
                  </option>
                  <option value="EVENT" id="choice-event">
                    Event
                  </option>
                </select>
              </div>
              <div class="mb-3" id="ecourse-option">
                <label for="ecourse_id">E-Course</label>
                <select name="ecourse_id" id="ecourse_id" class="form-control">
                  <option value="{{ $ecourse->id }}">Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</option>
                  <option value="{{ $ecourse->id }}">Mastering Laravel | From Zero to Hero</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="code_voucher">Kode Voucher</label>
                <input type="text" name="code_voucher" value="YUNUSALMEIDA" id="code_voucher" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="price_discount">Harga Diskon</label>
                <input type="number" name="price_discount" value="50000" id="price_discount" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="status">Status</label>
                <select name="status" id="status" class="form-control">
                  <option value="ACTIVE">Aktif</option>
                  <option value="NONACTIVE">Tidak Aktif</option>
                </select>
              </div>
              <button class="btn btn-primary d-flex align-items-center gap-2" type="submit">
                <i class="ai-plus"></i> Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* @push('addon-script')
    <script>
        $(document).ready(function() {
            $('#for').on('change', function() {
                var selected = $(this).val();

                if (selected == 'SALAH SATU E-COURSE') {
                    $('#ecourse-option').show();
                    $('#event-option').hide();
                    console.log('salah satu ecourse')
                } else if (selected == 'EVENT') {
                    $('#ecourse-option').hide();
                    $('#event-option').show();
                } else {
                    $('#ecourse-option').hide();
                    $('#event-option').hide();
                }
            })
        })
    </script>
@endpush */}
    </Admin>
  );
}
