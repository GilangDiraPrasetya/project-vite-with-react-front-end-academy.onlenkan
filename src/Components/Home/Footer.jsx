import logo from '../.././Images/logo-only-official-white.png';
import { FacebookFill, InstagramFill, LinkedinFill, YoutubeFill, TiktokFill } from 'akar-icons';
import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer className="home-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <img src={logo} alt="Onlenkan Logo" className="footer-logo" />

              <div className="d-flex align-items-center gap-3 social-media">
                <a href="https://www.facebook.com/onlenkan/" target="_blank" className="btn d-flex align-items-center justify-content-center">
                  <i className="ai-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/onlenkan_/" target="_blank" className="btn d-flex align-items-center justify-content-center">
                  <i className="ai-instagram-fill"></i>
                </a>
                <a href="https://www.linkedin.com/company/onlenkan-com" target="_blank" className="btn d-flex align-items-center justify-content-center">
                  <i className="ai-linkedin-fill"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCAzhFjJUW_ikWeIfsdDKCFw" target="_blank" className="btn d-flex align-items-center justify-content-center">
                  <i className="ai-youtube-fill"></i>
                </a>
                <a href="https://www.tiktok.com/@onlenkan_?lang=en" target="_blank" className="btn d-flex align-items-center justify-content-center">
                  <i className="ai-tiktok-fill"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <h4 className="footer-title text-white mt-4">Kontak Kami</h4>
              <div className="footer-contact">
                <a href="https://bit.ly/lokasi-kantor-onlenkan" target="_blank" className="footer-text">
                  Jl. Dr.Sutomo No.141, Mangunharjo, Kec. Mayangan, Kota Probolinggo, Jawa Timur 67211
                </a>
                <a href="https://wa.me/6285159698221" target="_blank" className="footer-text">
                  +62 8515 9698 221
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <h4 className="footer-title text-white mt-4">Subscribe</h4>
              <div className="footer-subscribe">
                <p className="footer-text">Daftarkan email anda untuk mendapatkan konsultasi gratis senilai 500rb rupiah</p>
                <form action="#" className="footer-form">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-7 col-md-8">
                      <input type="email" placeholder="Email anda . . ." />
                    </div>
                    <div className="col-5 col-md-4">
                      <button className="btn btn-sm btn-primary rounded-3 float-end" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <hr />

          <p className="footer-copyright text-center text-white-50 mt-3">Copyright &copy; {year} Onlenkan Studio. All right reserved.</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
