import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/images/logo/logo-official-blue.png';
import background from '../assets/images/login-image.jpg';

import Api from '../Api';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    await Api.post('login', formData)
      .then((response) => {
        // console.log(response.data.success);
        if (response.data.success === true) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('email', response.data.email);

          navigate('/');
        } else {
          setValidation(response.data);
        }
      })
      // })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Link to="/" className="logo">
            <img src={logo} style={{ width: '100px', top: '20px', left: '20px' }} className="position-absolute" alt="" />
          </Link>
          <div className="d-flex align-items-center justify-content-center py-5 py-md-0">
            <div className="mt-5">
              <h3 className="text-dark text-center">Selamat Datang Kembali!</h3>
              <p className="text-secondary text-center mb-3">
                Selamat Datang Kembali Onleners! <br className="d-none d-md-block" /> Silahkan Login untuk Melanjutkan Pembelajaranmu!.
              </p>
              <hr className="mb-5 w-75 mx-auto" />
              {validation.message && <div className="alert alert-danger">{validation.message}</div>}

              <form onSubmit={loginHandler}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Alamat Email . . ." required autoFocus />
                </div>
                {validation.email && <div className="alert alert-danger">{validation.email[0]}</div>}
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      id="password"
                      className="form-control border-end-0"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan Passwordmu . . ."
                      required
                      autoComplete="current-password"
                    />
                    <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }} id="basic-addon1" onClick={togglePasswordVisibility}>
                      <i className={passwordVisible ? 'ai-eye-slashed' : 'ai-eye-open'} id="eye"></i>
                    </span>
                  </div>
                  {validation.password && <div className="alert alert-danger">{validation.password[0]}</div>}
                </div>

                <button id="submit" className="btn btn-primary w-100" type="submit">
                  Login
                </button>
                <p className="text-secondary text-center mt-2 mb-3">
                  Belum Memiliki Akun? <Link to="/register">Daftar!</Link>
                </p>
                <p className="text-secondary text-center fs-7">
                  Lupa Password?
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20min!%0ASaya%20ingin%20mengganti%20password%20saya%20di%20Academy%20Onlenkan%0ABerikut%20identitas%20saya%0ANama%20%3A%20*nama*%0AEmail%20%3A%20email"
                  >
                    Chat Admin!
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 d-none d-md-block"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            minHeight: '100vh',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
