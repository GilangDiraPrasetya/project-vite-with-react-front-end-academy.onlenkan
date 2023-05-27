import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Home from '../../../Layouts/Home';

import code1 from '../../../Images/code/code1.png';

function Checkout() {
  const [copied, setCopied] = useState(false);

  const copyToClipboardRekening = () => {
    const element = document.getElementById('bankAccountNumber').textContent;
    navigator.clipboard
      .writeText(element)
      .then(() => {
        console.log('Copied to clipboard');
        setCopied(true);
      })
      .catch(() => {
        console.log('Failed to copy');
      });
  };

  return (
    <Home>
      <form id="form" onSubmit="">
        <input type="hidden" name="resource_id" value="" />
        <input type="hidden" name="status" value="UNPAID" />

        <section className="ecourse-detail pt-4">
          <div className="container">
            <div className="breadcrumb d-flex flex-wrap align-items-center gap-2 mb-5">
              <Link to="/" className="fs-7">
                Home
              </Link>
              <i className="ai-chevron-right fs-7"></i>
              <Link to="/source-code" className="fs-7">
                Source Code
              </Link>
              <i className="ai-chevron-right fs-7"></i>
              <Link to="/source-code/detail" className="fs-7">
                Website Travel Probvel
              </Link>
              <i className="ai-chevron-right fs-7"></i>
              <p className="text-black fs-7">Checkout</p>
            </div>

            <div className="row justify-content-center">
              <h5 className="text-dark fw-semibold mb-5">Checkout</h5>
              <div className="col-md-4">
                <div className="card bg-white rounded-3 shadow-sm border-0 mb-3">
                  <div className="card-body p-3 p-md-4">
                    <img src={code1} className="rounded-3 mb-3" alt="" />
                    <h5 className="fw-semibold text-dark">Website Travel Probvel</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card bg-white rounded-3 shadow-sm border-0 mb-3">
                  <div className="card-body p-3 p-md-4">
                    <h5 className="fw-semibold text-dark mb-3">Detail Pembayaran</h5>
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <p className="text-secondary">Harga Event</p>
                      <p className="text-secondary">Rp. 50.000,00</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-5">
                      <p className="text-secondary">Total Bayar</p>
                      <p className="text-dark fw-semibold fs-5">Rp. 50.000,00</p>
                    </div>

                    <h5 className="fw-semibold text-dark mb-3">Transfer Pembayaran</h5>
                    <img src="" alt="Bank Mandiri Logo" width="80" className="mb-3" />
                    <p className="text-dark fw-normal">Gamma Kristian</p>
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                      <h5 className="text-dark fw-semibold" id="bankAccountNumber">
                        1430015944976
                      </h5>
                      <div className="d-flex align-items-center gap-2">
                        <i className="ai-copy fs-5" style={{ cursor: 'pointer' }} onClick={copyToClipboardRekening}></i>
                        <p className="fs-7 text-secondary">{copied ? 'Copied' : ''}</p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="payment" className="text-start d-block">
                        Upload Bukti Pembayaran
                      </label>
                      <input type="file" accept="image/*" name="payment" id="payment" className="form-control" required />
                    </div>
                    <a href="#" className="btn btn-primary py-2 py-md-3 px-3 px-md-4 d-block w-100" data-bs-toggle="modal" data-bs-target="#modalConfirm">
                      Konfirmasi Pembayaran
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="modal fade" id="modalConfirm">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-3 p-md-4 text-center">
                <i className="ai-circle-alert fs-1 text-danger"></i>
                <h5 className="text-dark mt-4 mb-2">Konfirmasi Pembayaran</h5>
                <p className="text-secondary mb-3">Pastikan kamu telah melakukan pembayaran dengan transfer ke rekening Bank kami! Jika sudah, silahkan konfirmasi pembayaranmu sekarang!</p>
                <button id="submit" type="submit" className="btn btn-primary py-2 py-md-3 px-3 px-md-4">
                  Konfirmasi Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Home>
  );
}

export default Checkout;
