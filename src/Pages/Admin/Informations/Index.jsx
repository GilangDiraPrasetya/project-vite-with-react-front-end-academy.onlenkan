import Admin from '../../../Layouts/Admin';
import { Plus } from 'akar-icons';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <Admin>
      <section className="py-4">
        <h5 className="text-dark">Informasi Platform</h5>
        <p className="text-secondary mb-3">Update Informasi pada Platform</p>
        <div className="d-flex align-items-center gap-2 flex-wrap mb-4">
          <Link to="/admin-academy/informasi/create" className="btn btn-primary d-inline-flex align-items-center gap-2">
            <Plus /> Buat Baru
          </Link>
        </div>

        <p className="text-danger">Belum Ada Informasi</p>
      </section>
    </Admin>
  );
}
