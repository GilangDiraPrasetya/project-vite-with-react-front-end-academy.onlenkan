import React from 'react';
import Member from '../../../Layouts/Member';
import EcourseCard from './Ecourse-Card';
import { ThumbsUp } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <Member>
      <section className="py-4">
        <h4 className="text-dark">Kelas Saya</h4>
        {/* @if ($members->count() > 0) */}
        <div className="row mt-5">
          {/* @foreach ($members as $item) */}
          <div className="col-md-3"><EcourseCard/></div>
          {/* @endforeach */}
        </div>
        <Link to="/member/kelas-saya/1" className="mt-5 btn btn-light btn-sm d-flex align-items-center gap-2" style={{ maxWidth: 'max-content' }}>
         <ThumbsUp/> Beri Review Kami!
        </Link>
        {/* @else */}
        {/* <p className="text-danger text-center">
          Kamu Belum Memiliki Kelas!
          <a href="{{ route('home.ecourse') }}">Katalog Kelas!</a>
        </p> */}
        {/* @endif */}
      </section>
    </Member>
  );
}
