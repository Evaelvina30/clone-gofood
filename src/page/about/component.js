import React from 'react';

const siswa = ['Fifit', 'Rere', 'Evan', 'Eval', 'Malicha', 'Yuan'];
function About() {
  return (
    <React.Fragment>
      {siswa.map(item => {
        return <h1>{item}</h1>;
      })}
    </React.Fragment>
  );
}

export default About;
