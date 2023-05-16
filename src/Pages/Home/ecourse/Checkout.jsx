import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Play, Edit, WhatsappFill } from 'akar-icons';
import Home from '../../../Layouts/Home';
import kelas1 from '../../../Images/kelas/kelas1.jpg';
import kelas2 from '../../../Images/kelas/kelas2.jpg';
import person from '../../../Images/artikel/person1.png';

import axios from 'axios';

function KelasCheckout() {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    axios.get(`https://api-academy.onlenkan.com/api/get-courses/show/` + slug).then((response) => setData(response.data.course));
  }, []);

  return (
    <Home>
      <form id="form" action="#" method="post" enctype="multipart/form-data">
        <input type="hidden" name="ecourse_id" id="ecourse_id" value={data.id} />
        <input type="hidden" name="voucher" id="voucher" />
        <input type="hidden" name="price" id="price" value={data.price_discount > 0 ? data.price_discount : data.price} />

        <section className="ecourse-detail pt-4">
          <div className="container">
            <div className="breadcrumb d-flex flex-wrap align-items-center gap-2 mb-5">
              <Link to="/" className="fs-7">
                Home
              </Link>
              <ChevronRight />
              <Link to="/kelas" className="fs-7">
                Kelas
              </Link>
              <ChevronRight />
              <Link to={`/kelas/` + data.slug} className="fs-7">
                {data.slug}
              </Link>
              <ChevronRight />
              <p class="text-black fs-7">Checkout</p>
            </div>

            <div className="row justify-content-center">
              <h5 className="text-dark fw-semibold mb-5">Checkout</h5>
              <div className="col-md-4">
                <div className="card bg-white rounded-3 shadow-sm border-0 mb-3">
                  <div className="card-body p-3 p-md-4">
                    <img src="" className="rounded-3 mb-3" alt="" />
                    <h5 className="fw-semibold text-dark">{data.title}</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card bg-white rounded-3 shadow-sm border-0 mb-3">
                  <div className="card-body p-3 p-md-4">
                    <h5 className="fw-semibold text-dark mb-3">Detail Pembayaran</h5>
                    <table className="table">
                      <tr className="pb-2" style={{ verticalAlign: 'middle' }}>
                        <td style={{ color: 'grey' }}>Harga Kelas</td>
                        <td style={{ color: 'black' }}>Rp. 900.000</td>
                      </tr>
                      {/* @if ($voucher != null)
                                        <tr className="pb-2" style="vertical-align: middle">
                                            <td>Masukkan Kode Voucher</td>
                                            <td style="text-dark">
                                                <div className="d-flex gap-1 align-items-center">
                                                    <input type="text" className="form-control form-control-sm"
                                                        placeholder="Masukkan Kode Voucher" id="voucher_code">
                                                    <button className="btn btn-success btn-sm w-50" type="button"
                                                        id="cek-voucher">
                                                        Gunakan
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    @endif */}
                      {/* <tr className="pb-2" id="discount-area"
                                        style={{verticalAlign: 'middle' {data.price_discount == 0 ? 'display: none' : '' }}">
                                        <td>Diskon</td
                                        <td>
                                            <p className="mb-0 text-dark fw-semibold" id="discount">
                                                @if ($ecourse->price > 0)
                                                    {{ $ecourse->price_discount > 0 ? 'Rp. ' . number_format($ecourse->price_discount) : 'Tidak Ada Diskon' }}
                                                @else
                                                    GRATIS
                                                @endif
                                            </p>
                                        </td>
                                    </tr> */}
                      {/* <tr className="pb-2" style="vertical-align: middle">
                                        <td>Total Bayar</td>
                                        <td>
                                            <p className="mb-0 text-dark fw-semibold" id="total">
                                                @if ($ecourse->price > 0)
                                                    Rp.
                                                    {{ $ecourse->price_discount > 0 ? number_format($ecourse->price_discount) : number_format($ecourse->price) }}
                                                @else
                                                    GRATIS
                                                @endif
                                            </p>
                                        </td>
                                    </tr> */}
                    </table>

                    {data.price > 0 && (
                      <div>
                        <h5 className="fw-semibold text-dark mb-3 mt-5">Transfer Pembayaran</h5>
                        <img src="" alt="Bank Mandiri Logo" width="80" className="mb-3" />
                        <p className="text-dark fw-normal">Gamma Kristian</p>
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                          <h5 className="text-dark fw-semibold" id="bankAccountNumber">
                            1430015944976
                          </h5>
                          <div className="d-flex align-items-center gap-2">
                            <i className="ai-copy fs-5" style={{ cursor: 'pointer' }} onClick=""></i>
                            <p className="fs-7 text-secondary" id="copyBtn"></p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="payment">Upload Bukti Pembayaran</label>
                          <input type="file" name="payment" id="payment" accept="image/*" className="form-control" required />
                          <span className="text-secondary fs-7">Harus berupa gambar/image</span>
                        </div>
                      </div>
                    )}

                    <a href="#" className="btn btn-primary py-2 py-md-3 px-3 px-md-4 d-block w-100" data-bs-toggle="modal" data-bs-target="#modalConfirm">
                      {/* {{ data.price > 0 ? 'Konfirmasi Pembayaran' : 'Daftar Sekarang' }} */}Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="modal fade" id="modalConfirm">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body p-3 p-md-4 text-center">
                        <i className="ai-circle-alert fs-1 text-danger"></i>
                        <h5 className="text-dark mt-4 mb-2">
                            {{ $ecourse->price > 0 ? 'Konfirmasi Pembayaran' : 'Daftar Sekarang' }}</h5>
                        <p className="text-secondary mb-3">
                            @if ($ecourse->price > 0)
                                Pastikan kamu telah melakukan pembayaran dengan transfer ke rekening Bank kami! Jika sudah,
                                silahkan konfirmasi pembayaranmu sekarang!
                            @else
                                Klik Daftar Sekarang untuk mendaftar Event ini
                            @endif
                        </p>
                        <button id="submit" type="submit" className="btn btn-primary py-2 py-md-3 px-3 px-md-4">
                            {{ $ecourse->price > 0 ? 'Konfirmasi Pembayaran' : 'Daftar Sekarang' }}
                        </button>
                    </div>
                </div>
            </div>
        </div> */}
      </form>
      {/* <script>
        function copyToClipboardRekening() {
            let element = document.getElementById("bankAccountNumber").innerHTML;
            navigator.clipboard.writeText(element).then(function() {
                console.log("Copied to clipboard");
            }, function() {
                console.log("Failed to copy");
            });

            let copyBtn = document.getElementById("copyBtn");
            copyBtn.innerHTML = "Copied";
        }

        $(document).ready(function() {
            $('#cek-voucher').click(function() {
                var voucher = $('#voucher_code').val();
                var ecourse_id = $('#ecourse_id').val();

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

                $.ajax({
                    url: "{{ route('voucher.get') }}",
                    type: "POST",
                    dataType: "json",
                    data: {
                        voucher: voucher,
                        ecourse_id: ecourse_id
                    },
                    success: function(data) {
                        console.log(data)
                        if (data.item === null) {
                            $('#discount-area').show();
                            $('#discount').html(
                                '<p className="mb-0 text-danger">Voucher Tidak Tersedia</p>')
                        } else {
                            $('#discount-area').show();

                            var total = data.item.ecourse.price - data.item.price_discount;
                            var discountInt = parseInt(data.item.price_discount);

                            $('#discount').text(discountInt.toLocaleString(
                                'id-ID', {
                                    style: 'currency',
                                    currency: 'IDR'
                                }));
                            $('#total').text(total.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            }));
                            $('#voucher').val(data.item.id)
                        }

                    },
                    error: function() {
                        console.log('Get Data Voucher Error')
                    }
                });
            })
        })
    </script> */}
    </Home>
  );
}

export default KelasCheckout;
