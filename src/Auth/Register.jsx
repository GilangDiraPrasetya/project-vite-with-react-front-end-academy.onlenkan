// import logo from '.././Images/logo-official-blue.png';
// import background from '.././Images/register-image.jpg';
// import { EyeOpen } from 'akar-icons';
// import { Link } from 'react-router-dom';

// function Register() {
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
//                 <h3 className="text-dark text-center">Daftar Jadi Member!</h3>
//                 <p className="text-secondary text-center mb-3">Daftarkan Dirimu dan Jadilah Onleners yg selalu harus Belajar!</p>
//                 <hr className="mb-5 w-75 mx-auto" />

//                 <form method="POST" action="">
//                   <div className="mb-3">
//                     <label htmlFor="name">Nama Lengkap</label>
//                     <input type="text" name="name" id="name" className="form-control" placeholder="Nama Lengkap . . ." value="" required autoFocus />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" name="email" id="email" className="form-control" placeholder="Alamat Email . . ." value="" required />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="phone_number">Nomor Telepon/WhatsApp</label>
//                     <input type="number" name="phone_number" id="phone_number" className="form-control" placeholder="Ex: 628123456789 . . ." value="" required />
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
//                   <div className="mb-3">
//                     <label htmlFor="password-confirm">Konfirmasi Password</label>
//                     <div className="input-group">
//                       <input id="password-confirm" type="password" className="form-control border-end-0" name="password_confirmation" required autoComplete="new-password" />
//                       <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }} id="basic-addon1" onClick="viewPasswordConfirm()">
//                         <EyeOpen />
//                       </span>
//                     </div>
//                   </div>

//                   <button className="btn btn-primary w-100" type="submit">
//                     Register
//                   </button>
//                   <p className="text-secondary text-center mt-2">
//                     Telah Memiliki Akun? <Link to="/login">Log In!</Link>
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

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import background from '.././Images/register-image.jpg';
import logo from '.././Images/logo-official-blue.png';

const Register = () => {
  <script src="https://unpkg.com/akar-icons-fonts"></script>;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  //function "registerHanlder"
  const registerHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    //send data to server
    await axios
      .post('https://api-academy.onlenkan.com/api/register', formData)
      .then(() => {
        //redirect to login page
        navigate('/login');
        // console.log(formData);
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
              <h3 className="text-dark text-center">Daftar Jadi Member!</h3>
              <p className="text-secondary text-center mb-3">Daftarkan Dirimu dan Jadilah Onleners yg selalu harus Belajar!</p>
              <hr className="mb-5 w-75 mx-auto" />

              <form onSubmit={registerHandler}>
                <div className="mb-3">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input type="text" name="name" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Lengkap . . ." required autoFocus />
                </div>
                {validation.name && <div className="alert alert-danger">{validation.name[0]}</div>}

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Alamat Email . . ." required />
                </div>
                {validation.email && <div className="alert alert-danger">{validation.email[0]}</div>}

                <div className="mb-3">
                  <label htmlFor="phone_number">Nomor Telepon/WhatsApp</label>
                  <input type="number" name="phone_number" id="phone_number" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Ex: 628123456789 . . ." required />
                </div>
                {validation.phoneNumber && <div className="alert alert-danger">{validation.phoneNumber[0]}</div>}

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
                    <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                      <i className={passwordVisible ? 'ai-eye-slashed' : 'ai-eye-open'}></i>
                    </span>
                  </div>
                  {validation.password && <div className="alert alert-danger">{validation.password[0]}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password-confirm">Konfirmasi Password</label>
                  <div className="input-group">
                    <input
                      type={confirmPasswordVisible ? 'text' : 'password'}
                      id="password-confirm"
                      className="form-control border-end-0"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      name="password_confirmation"
                      required
                      autoComplete="new-password"
                    />
                    <span className="input-group-text bg-white border-start-0" style={{ cursor: 'pointer' }} onClick={toggleConfirmPasswordVisibility}>
                      <i className={confirmPasswordVisible ? 'ai-eye-slashed' : 'ai-eye-open'}></i>
                    </span>
                  </div>
                  {validation.passwordConfirmation && <div className="alert alert-danger">{validation.passwordConfirmation[0]}</div>}
                </div>

                <button id="submit" className="btn btn-primary w-100" type="submit">
                  Register
                </button>
                <p className="text-secondary text-center mt-2">
                  Telah Memiliki Akun? <Link to="/login">Log In!</Link>
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

export default Register;
