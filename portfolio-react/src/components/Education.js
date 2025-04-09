import React from 'react';

function Education() {
  return (
    <section className="project" id="project">
      <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
      <p className="quote">"Education is not the learning of facts, but the training of the mind to think."</p>
      <div className="education-container">
        <div className="card">
          <img src="/image/school.png" alt="Government Senior Secondary School in Ropar" />
          <div className="card-content">
            <p>2021 - 2022</p>
            <h3>Govt. Sen. Sec. School (Boys) Ropar</h3>
            <p>10+2 Science</p>
            <p className="gpa">GPA: 85%</p>
          </div>
        </div>
        <div className="card">
          <img src="/image/college.png" alt="Lamrin Tech Skills University campus" />
          <div className="card-content">
            <p>2022 - Present</p>
            <h3>Lamrin Tech Skills University Punjab</h3>
            <p>B.Tech CSE (AI & ML)</p>
            <p className="gpa">SGPA: ...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;