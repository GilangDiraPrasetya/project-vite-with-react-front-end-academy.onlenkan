import logo from '.././Images/logo-official-blue.png';
import background from '.././Images/register-image.jpg';
import { EyeOpen } from 'akar-icons';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Link to="/" className="logo">
              <img src={logo} style={{ width: '100px', top: '20px', left: '20px' }} className="position-absolute" alt="" />
            </Link>
            <div className="d-flex align-items-center justify-content-center py-5 py-md-0">
              <div className="mt-5">
                <h3 className="text-dark text-center">Daftar Jadi Member!</h3>
                <p className="text-secondary text-center mb-3">Daftarkan Dirimu dan Jadilah Onleners yg selalu harus Belajar!</p>
                <hr className="mb-5 w-75 mx-auto" />

                <form method="POST" action="">
                  <div className="mb-3">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Nama Lengkap . . ." value="" required autoFocus />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Alamat Email . . ." value="" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone_number">Nomor Telepon/WhatsApp</label>
                    <input type="number" name="phone_number" id="phone_number" className="form-control" placeholder="Ex: 628123456789 . . ." value="" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <div className="input-group">
                      <input type="password" name="password" id="password" className="form-control border-end-0" placeholder="Masukkan Passwordmu . . ." required autoComplete="current-password" />
                      <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }} id="basic-addon1" onClick="viewPassword()">
                        <EyeOpen />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password-confirm">Konfirmasi Password</label>
                    <div className="input-group">
                      <input id="password-confirm" type="password" className="form-control border-end-0" name="password_confirmation" required autoComplete="new-password" />
                      <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }} id="basic-addon1" onClick="viewPasswordConfirm()">
                        <EyeOpen />
                      </span>
                    </div>
                  </div>

                  <button className="btn btn-primary w-100" type="submit">
                    Register
                  </button>
                  <p className="text-secondary text-center mt-2">
                    Telah Memiliki Akun? <Link to="/login">Log In!</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}></div>
        </div>
      </div>
    </>
  );
}

export default Register;
