import React from 'react'
import Typed from 'typed.js';
import Lumps from "../Asset/lumps.jpg";
import Fines from "../Asset/fines.jpg";
import './home.css';



const home = () => {

  return (
    <>
     <div className="home-container">
      <section className="intro">
        <h1>Welcome to the </h1><span className="element">Iron Ore Classification</span>
        <p>This system identifies whether the ore is Lump or Fine using advanced detection technology.</p>
      </section>
     
      <section className="card-section">
        <div className="card">
          <h3>Lumps</h3>
          <img src={Lumps} alt="Lumps" style={{ width: "89px", maxWidth: "90px",height:"80px" }} />
          <p>Large-sized iron ore (Greater than 10 mm) used directly in blast furnaces.</p>
        </div>
        <div className="card">
          <h3>Fines</h3>
          <img src={Fines} alt="Fines" style={{ width: "80px", maxWidth: "80px" }} />
          <p>Small particles (Less than 10 mm) that need to be sintered before use.</p>
        </div>
      </section>
      </div>
      <div className="info-section">
          <h2>Iron Ore Information</h2>
          <div className="info-cards">
            <div className="info-card">
              {/* <img src={Iron1} alt="Formation" /> */}
              <h4>Formation</h4>
              <p>Iron ores are rocks and minerals from which metallic iron can be extracted. They form through geological processes.</p>
            </div>

            <div className="info-card">
              <h4>Uses</h4>
              <p>Iron ore is primarily used to make steel. It is the foundation of industrial construction and manufacturing.</p>
            </div>

            <div className="info-card">
              <h4>Global Distribution</h4>
              <p>Major producers include Australia, Brazil, China, and India. India has large reserves in Odisha and Jharkhand.</p>
            </div>

            <div className="info-card">
              <h4>Types of Ore</h4>
              <p>Common types include Hematite and Magnetite. These differ in iron content and processing requirements.</p>
            </div>
          </div>
        </div>
            </>
  )
}

export default home
