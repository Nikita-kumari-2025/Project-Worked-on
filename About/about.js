// import React from "react";
// import cimfrImage from "../Asset/CSIR-CIMFR Main Building Photo.jpg";
// import "./about.css";
// const about = () => {
//   return (
//     <>
//     <div className="about-section">
//       <div className="about-header">Profile</div>

//       <div className="about-image">
       
//       <img src={cimfrImage} alt="CIMFR Building" style={{ width: "100%", maxWidth: "800px" }} />
      
//       </div>

//       <div className="about-content">
//         <p>
//           <strong>CSIR-Central Institute of Mining and Fuel Research (CIMFR), Dhanbad </strong>, a constituent laboratory under the aegis of Council of Scientific and Industrial Research (CSIR), New Delhi aims to provide R&D inputs for the entire coal-energy chain encompassing exploration, mining and utilization. The laboratory also strives to develop mineral based industries to reach the targeted production for country’s energy security and growth with high standards of safety, economy and cleaner environment.In view of the National Missions recently declared by the Government of India, CIMFR has re-aligned its vision, missions and policies and also redefined targets for shortand long terms. This would promote rapid sustainable national techno-economic growth withequal emphasis on self-sustenance. CSIR-CIMFR is located in the town of Dhanbad, known as coal capital of India of Jharkhand state of India. It is strategically situated in the Damodar basin of Eastern part of the country which is endowed with rich coal deposits and hosts several large mineral based industries.
//          </p>
//       </div>
//     </div>
  
//     </>
//   );
// };
// export default about;

import React from "react";
import cimfrImage from "../Asset/CSIR-CIMFR Main Building Photo.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-header">About the Project</div>

        <div className="about-image">
          <img
            src={cimfrImage}
            alt="CIMFR Building"
            style={{ width: "100%", maxWidth: "800px", borderRadius: "12px" }}
          />
        </div>

        <div className="about-content">
          <p>
            <strong>CSIR-Central Institute of Mining and Fuel Research (CIMFR)</strong> is a premier R&D institute under the Council of Scientific and Industrial Research (CSIR), located in Dhanbad, the coal capital of India. The institute plays a key role in developing technologies across the entire coal-energy value chain — from exploration and mining to processing and utilization — with a commitment to safety, environmental sustainability, and energy security.
          </p>

          <p>
            The <strong>Iron Ore Classification System</strong> developed by CSIR-CIMFR is an innovative solution aimed at automating the identification of iron ore as either <em>Lumps</em> or <em>Fines</em> using advanced machine learning and computer vision techniques. The system enables:
          </p>

          <ul>
            <li>Fast and accurate classification of ore types using image analysis</li>
            <li>Integration with logistics to track truck and driver details</li>
            <li>Support for image capture via webcam or file upload</li>
            <li>Automated prediction reports and digital record keeping</li>
          </ul>

          <p>
            This technology addresses the growing need for <strong>automation, precision, and transparency</strong> in the mineral industry, supporting India's mission for <em>Digital Mines</em> and sustainable resource management.
          </p>

          <p>
            Located in the <strong>Damodar Valley coal belt</strong>, CIMFR is strategically positioned to cater to mineral-rich industries in eastern India. With a focus on innovation and national development, CSIR-CIMFR continues to lead in research for cleaner, safer, and more efficient resource utilization.
          </p>
        </div>
      </div>
      <div className="about-details">

  <section className="about-section-block tech-stack">
    <h2>Technology Stack</h2>
    <div className="tech-list">
      <div className="tech-item"> React.js (Frontend UI)</div>
      <div className="tech-item"> Flask & Python (Backend & Model)</div>
      <div className="tech-item">PyTorch (AI Model for Ore Detection)</div>
      <div className="tech-item"> MongoDB (Data Storage)</div>
      <div className="tech-item"> Webcam/File Upload (Image Input)</div>
    </div>
  </section>

  <section className="about-section-block">
    <h2>Stakeholders</h2>
    <div className="stakeholder-cards">
      <div className="stakeholder-card">
        <h4>🧑‍🏭 Mine Operators</h4>
        <p>Upload ore data, track and verify classification reports.</p>
      </div>
      <div className="stakeholder-card">
        <h4>🚚 Transport Managers</h4>
        <p>Record truck data and ensure delivery accuracy.</p>
      </div>
      <div className="stakeholder-card">
        <h4>🏛️ Government Bodies</h4>
        <p>Access compliance reports and track mineral movement.</p>
      </div>
    </div>
  </section>


</div>

    </>
  );
};

export default About;
