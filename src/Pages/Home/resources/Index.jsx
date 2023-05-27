import React from 'react';  

import Home from '../../../Layouts/Home';
import ButtonCategories from './Button-Category';
import ListResources from './List-Resources';

function SourceCode() {
  return (
    <Home>
      <section className="ecourse-list" id="kelas">
        <div className="container">
          <h2 className="section-title text-dark text-center mb-2">Source Code</h2>
          <p className="section-description text-center">High Quality Projects. Working Faster & Better.</p>

          <div className="row mt-5">
            <div className="col-12">
              <ButtonCategories />
            </div>

            <ListResources />
          </div>
        </div>
      </section>
    </Home>
  );
}

export default SourceCode;
