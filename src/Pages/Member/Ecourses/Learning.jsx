import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo/logo-official-blue.png';

import { Cross, MoreHorizontalFill, Play, TelegramFill, TwoLineHorizontal } from 'akar-icons';

import video1 from '../../../Images/video1.mp4';
import Footer from '../../../Components/Member/Footer';

export default function Learning() {
  function sidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleClose = document.getElementById('toggleClose');
    const toggleOpen = document.getElementById('toggleOpen');
    const mediaQuerier = window.matchMedia('(max-width: 700px)');

    content.classList.toggle('no-paddingleft');
    if (mediaQuerier.matches) {
      toggleClose.classList.toggle('d-block');
      toggleOpen.classList.toggle('d-none');
      sidebar.classList.toggle('d-block');
      content.classList.toggle('opacity-0');
    } else {
      toggleClose.classList.toggle('d-none');
      toggleOpen.classList.toggle('d-block');
      sidebar.classList.toggle('d-none');
    }
  }
  return (
    <body className="ecourse-content">
      <div className="button-toggle d-flex align-items-center justify-content-between">
        <button type="button" className="btn btn-light toggle-close border-0 bg-transparent" onClick="sidebarToggle()" id="toggleClose">
          <Cross />
        </button>
        <button type="button" className="btn btn-light btn-lg toggle-open border-0 bg-transparent" onClick="sidebarToggle()" id="toggleOpen">
          <TwoLineHorizontal />
        </button>
        <Link href="/member" className="d-block d-md-none">
          <img src={logo} width="50" alt="" />
        </Link>
      </div>
      <div className="sidebar position-fixed px-2 px-md-4 pb-5" id="sidebar">
        <hr className="mb-3" />
        <Link to="/member/kelas-saya" className="text- text-decoration-none fs-7 d-flex gap-3">
          &#128072; Ke Halaman Awal
        </Link>

        {/* @foreach ($ecourse_section as $key => $section)
                @php
                    $key++;
                @endphp */}
        <div className="row align-items-center mt-5 mb-3">
          <div className="col-1">
            <p className="text-secondary fw-medium" style={{ fontSize: '12px' }}>
              {/* {{ strlen($key) == 1 ? '0' . $key : $key }} */}01
            </p>
          </div>
          <div className="col-10">
            <p className="fw-medium text-dark">Introduction Kelas</p>
          </div>
        </div>
        {/* @foreach ($ecourse_contents as $content)
                    @if ($content->ecourse_section_id == $section->id) */}
        <a href="{{ route('member.learning', ['slug_ecourse' => $ecourse->slug, 'slug_content' => $content->id]) }}" className="{{ $content->id == $ecourse_content->id ? 'text-primary' : 'text-secondary' }} text-decoration-none">
          <div className="row mb-2">
            <div className="col-1"></div>
            <div className="col-10">
              <p className="fs-7">
                <div className="d-flex gap-3">
                  {/* <i className="ai-play" style={{fontSize: '10px', marginTop: '5px'}}></i> */}
                  <Play style={{ fontSize: '10px', marginTop: '5px' }} />
                  Perkenalan Mentor
                </div>
              </p>
            </div>
          </div>
        </a>
        {/* @endif
                @endforeach
            @endforeach */}
      </div>
      <div className="paddingleft" id="content">
        <div className="content">
          <h1 className="content-title text-dark text-center text-uppercase mb-3">Perkenalan Mentor</h1>
          <div className="d-flex align-items-center justify-content-center mb-3">
            {/* <i className="ai-more-horizontal-fill fs-5 text-center"></i> */}
            <MoreHorizontalFill fs-5 text-center />
          </div>
          <video controls>
            <source src={video1} type="video/mp4" />
          </video>
          <h5 className="text-dark fw-semibold mb-4 mt-5"></h5>
          Ya, itulah form. Sangat banyak fungsinya dan sangat wajib buat kita ketahui. Tanpa form, kita tidak bisa mengisi formulir, login, nulis status facebook, upload foto di Instagram dan lain sebagainya. Jadi gimana cara buatnya?
          Mudah? Pasti mudah.
          <p className="text-dark mt-5">
            Memiliki Kendala dengan Pembelajaranmu?
            <a href="{{ $ecourse->link_group != null ? $ecourse->link_group : 'https://wa.me/6285159698221' }}" target="_blank" className="btn btn-sm btn-success d-inline-flex align-items-center gap-2">
              <TelegramFill />
              Diskusikan dengan Kami!
            </a>
          </p>
          <Footer />
        </div>
      </div>

      {/* @include('components.member.scripts')
        <script>
            function sidebarToggle() {
                const sidebar = document.getElementById('sidebar');
                const content = document.getElementById('content');
                const toggleClose = document.getElementById('toggleClose');
                const toggleOpen = document.getElementById('toggleOpen');
                const mediaQuerier = window.matchMedia("(max-width: 700px)");
    
                content.classNameList.toggle('no-paddingleft');
                if (mediaQuerier.matches) {
                    toggleClose.classNameList.toggle('d-block');
                    toggleOpen.classNameList.toggle('d-none');
                    sidebar.classNameList.toggle('d-block');
                    content.classNameList.toggle('opacity-0');
                } else {
                    toggleClose.classNameList.toggle('d-none');
                    toggleOpen.classNameList.toggle('d-block');
                    sidebar.classNameList.toggle('d-none');
                }
            }
        </script> */}
    </body>
  );
}
