import React, { useState } from 'react';

function ButtonCategories() {
  //   const [selectedCategory, setSelectedCategory] = useState(null);

  //   const handleCategorySelect = (category) => {
  //     setSelectedCategory(category);
  //   };

  return (
    <div className="dropdown mb-5 d-block mx-auto" style={{ width: 'max-content' }}>
      <button className="btn border border-secondary text-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {/* {selectedCategory ? selectedCategory.name : 'Pilih Kategori'} */} Pilih Kategori
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="">
            Semua Kategori
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="">
            HTML CSS (0)
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="">
            HTML CSS BOOTSTRAP (3)
          </a>
        </li>
        {/* {categories.map((category) => (
          <li key={category.id}>
            <a className="dropdown-item fs-7" href={route('home.resource.category', category.slug)} onClick={() => handleCategorySelect(category)}>
              {category.name} ({category.resource_count})
            </a>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default ButtonCategories;
