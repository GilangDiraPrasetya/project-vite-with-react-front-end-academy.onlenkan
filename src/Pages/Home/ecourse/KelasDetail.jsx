import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Play, Edit, WhatsappFill } from 'akar-icons';
import Home from '../../../Layouts/Home';
import kelas1 from '../../../Images/kelas/kelas1.jpg';
import kelas2 from '../../../Images/kelas/kelas2.jpg';
import person from '../../../Images/artikel/person1.png';

import axios from 'axios';

function KelasDetail() {
  const [data, setData] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    // axios.get(`https://api-academy.onlenkan.com/api/get-courses/show/belajar-nodejs-dari-dasar-hingga-mahir`).then((response) => setData(response.data.course));
    axios.get(`https://api-academy.onlenkan.com/api/get-courses/show/` + slug).then((response) => setData(response.data.course));
  }, []);

  console.log(data);

  return (
    <Home>
      <section className="ecourse-detail pt-4">
        <div className="container">
          <div className="breadcrumb d-flex flex-wrap align-items-center gap-2 mb-4">
            <Link to="/" className="fs-7">
              Home
            </Link>
            <ChevronRight />
            <Link to="/kelas" className="fs-7">
              Kelas
            </Link>
            <ChevronRight />
            <p className="text-black fs-7">{data.title}</p>
          </div>

          <h2 className="fs-3 fw-semibold text-dark mb-3">{data.title}</h2>
          <span className="bg-soft-blue text-primary fs-7 rounded-3" style={{ padding: '8px 20px', fontWeight: '500px' }}>
            {data.category}
          </span>

          <div className="row mt-5">
            <div className="col-md-6">
              <img src={kelas1} alt="" className="rounded-3 mb-5" />
              <h4 className="fs-5 mb-2">Deskripsi Kelas</h4>
              {data.description}
            </div>

            <div className="col-md-6">
              <h4 className="fs-5 mb-2">Konten Kelas</h4>
              <div className="accordion mb-5" id="accordionContent">
                {data.course_sections?.map((section) => {
                  return (
                    <div className="accordion-item border-0 p-0 border-bottom" style={{ borderColor: '#7a7a7a' }}>
                      <p className="fs-6 fw-semibold accordion-header" id="headingOne">
                        <button className={`accordion-button text-dark bg-white border-none shadow-none ${section.order !== 1 && 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#section${section.id}`}>
                          {section.title}
                        </button>
                      </p>
                      <div id={`section${section.id}`} className={`accordion-collapse collapse ${section.order === 1 && 'show'}`}>
                        <div className="accordion-body">
                          {section.course_contents.map((content) => {
                            if (content.course_section_id === section.uuid) {
                              return (
                                <div className="text-secondary d-flex align-items-center gap-3 border-bottom border-light py-2">
                                  <span className="bg-secondary text-white p-2 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '24px', height: '24px' }}>
                                    <i className="ai-play" style={{ fontSize: '14px', marginLeft: '2px' }}></i>
                                  </span>
                                  {content.title}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="card mb-3 mb-md-5">
                <div className="card-body p-3 p-md-4 d-none d-md-block">
                  {data.price_discount > 0 ? (
                    <>
                      <span className="fs-7 text-danger text-decoration-line-through fw-semibold">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price_discount)}</span>
                      <h5 className="fw-semibold fs-4">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price)}</h5>
                    </>
                  ) : (
                    <h5 className="fw-semibold m-0">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price)}</h5>
                  )}
                  {/* {data.member > 0 ? (
                    <a href={route('member.kelas-saya')} className="btn btn-primary d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4 mb-2 mt-4">
                      <i className="ai-edit"></i>
                      Lanjutkan Pembelajaran
                    </a>
                  ) : (
                    <a href={route('home.ecourse.checkout', ecourse.slug)} className="btn btn-primary d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4 mb-2 mt-4">
                      <i className="ai-edit"></i>
                      Checkout Kelas
                    </a>
                  )} */}
                  <a href="" className="btn btn-primary d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4 mb-2 mt-4">
                    <Edit />
                    Lanjutkan Pembelajaran
                  </a>
                  <Link to={`/kelas/` + data.slug + `/checkout`} className="btn btn-primary d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4 mb-2 mt-4">
                    <Edit />
                    Checkout Kelas
                  </Link>
                  <a
                    href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20min!%20Saya%20mau%20bertanya%20tentang%20kelas%20*`${data.title}`*%0A%0A"
                    className="btn btn-outline-success d-flex align-items-center gap-2 w-100 py-2 py-md-3 px-2 px-md-4"
                  >
                    <WhatsappFill />
                    Tanya Kelas
                  </a>
                </div>
                <hr className="my-1 d-none d-md-block" />
                <div className="card-body p-3 p-md-4">
                  <h5 className="fs-6 fw-semibold">Mentor Kelas</h5>

                  {/* <div className="d-flex align-items-center gap-2">
                    <img src={person} alt="" className="rounded-circle" style={{ objectFit: 'cover', width: 36, height: 36 }} />
                    <div>
                      <p className="text-dark">{data.instructor.name}</p>
                      <span className="text-secondary fs-7">
                        {data.instructor.position} at {data.instructor.from}
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default KelasDetail;
