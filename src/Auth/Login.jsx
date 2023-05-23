// import logo from '.././Images/logo-official-blue.png';
// import background from '.././Images/login-image.jpg';
// import { EyeOpen } from 'akar-icons';
// import { Link } from 'react-router-dom';

// function Login() {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row align-items-center">
//           <div className="col-md-6">
//             <Link to="/" className="logo">
//               <img src={logo} style={{ width: '100px', top: '20px', left: '20px' }} className="position-absolute" alt="" />
//             </Link>
//             <div className="d-flex align-items-center justify-content-center py-5 py-md-0">
//               <div className="mt-5">
//                 <h3 className="text-dark text-center">Selamat Datang Kembali!</h3>
//                 <p className="text-secondary text-center mb-3">
//                   Selamat Datang Kembali Onleners! <br className="d-none d-md-block" /> Silahkan Login untuk Melanjutkan Pembelajaranmu!.
//                 </p>
//                 <hr className="mb-5 w-75 mx-auto" />

//                 <form method="POST" action="">
//                   <div className="mb-3">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" name="email" id="email" className="form-control" placeholder="Alamat Email . . ." value="" required autoFocus />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password">Password</label>

//                     <div className="input-group">
//                       <input type="password" name="password" id="password" className="form-control border-end-0" placeholder="Masukkan Passwordmu . . ." required autoComplete="current-password" />
//                       <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }} id="basic-addon1" onClick="viewPassword()">
//                         <EyeOpen />
//                       </span>
//                     </div>
//                   </div>
//                   <button className="btn btn-primary w-100" type="submit">
//                     Login
//                   </button>
//                   <p className="text-secondary text-center mt-2 mb-3">
//                     Belum Memiliki Akun? <Link to="/register">Daftar!</Link>
//                   </p>
//                   <p className="text-secondary text-center fs-7">
//                     Lupa Password?
//                     <a
//                       target="_blank"
//                       href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20min!%0ASaya%20ingin%20mengganti%20password%20saya%20di%20Academy%20Onlenkan%0ABerikut%20identitas%20saya%0ANama%20%3A%20*nama*%0AEmail%20%3A%20*email*"
//                     >
//                       Chat Admin!
//                     </a>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from '.././Images/logo-official-blue.png';
import background from '.././Images/login-image.jpg';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //define state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //define state validation
  const [validation, setValidation] = useState([]);

  //define history
  const navigate = useNavigate();

  //function "loginHanlder"
  const loginHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('email', email);
    formData.append('password', password);

    //send data to server
    await axios
      .post('https://api-academy.onlenkan.com/api/register', formData)
      .then((response) => {
        //set token on localStorage
        localStorage.setItem('token', response.data.token);

        //redirect to dashboard
        navigate('/admin-academy');
      })
      .catch((error) => {
        //assign error to state "validation"
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
