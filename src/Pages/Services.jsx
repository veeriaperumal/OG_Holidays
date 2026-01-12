import "./Services.css";

export default function Services() {
  return (
    <section className="services-hero">
      <h1>Services</h1>

      <p>
        Explore our domestic, international, and group travel services
        <br />
        designed to make every trip smooth and memorable
      </p>

      <section className="domestic-section">
  <div className="domestic-pill">Domestic</div>

  <div className="domestic-grid">
    <div className="domestic-card">
      <img src="/images/goa.png" alt="Goa" />
      <p>GOA</p>
    </div>

    <div className="domestic-card">
      <img src="/images/manali.png" alt="Manali" />
      <p>MANALI</p>
    </div>

    <div className="domestic-card">
      <img src="/images/shimla.png" alt="Shimla" />
      <p>SHIMLA</p>
    </div>

    <div className="domestic-card">
      <img src="/images/shirdi.png" alt="Shirdi" />
      <p>SHIRDI</p>
    </div>
     <div className="domestic-card">
      <img src="/images/delhi.png" alt="Delhi" />
      <p>DELHI</p>
    </div>

    <div className="domestic-card">
      <img src="/images/pondicherry.png" alt="Pondicherry" />
      <p>PONDICHERRY</p>
    </div>

    <div className="domestic-card">
      <img src="/images/agra.png" alt="Agra" />
      <p>AGRA</p>
    </div>

    <div className="domestic-card">
      <img src="/images/jaipur.png" alt="Jaipur" />
      <p>JAIPUR</p>
    </div>
  </div>
</section>
<section className="international-section">
  <div className="international-pill">International</div>

  <div className="international-grid">
    <div className="international-card">
      <img src="/images/thailand.png" alt="Thailand" />
      <p>THAILAND</p>
    </div>

    <div className="international-card">
      <img src="/images/singapore.png" alt="Singapore" />
      <p>SINGAPORE</p>
    </div>

    <div className="international-card">
      <img src="/images/malayasia.png" alt="Malaysia" />
      <p>MALAYASIA</p>
    </div>

    <div className="international-card">
      <img src="/images/vietnam.png" alt="Vietnam" />
      <p>VIETNAM</p>
    </div>
    
  </div>
  <div className="international-center-grid">
    <div className="international-card">
      <img src="/images/bali.png" alt="Bali" />
      <p>BALI</p>
    </div>

    <div className="international-card">
      <img src="/images/dubai.png" alt="Dubai" />
      <p>DUBAI</p>
    </div>

    <div className="international-card">
      <img src="/images/srilanka.png" alt="Sri Lanka" />
      <p>SRI LANKA</p>
    </div>
  </div>
</section>
<section className="group-section">
  <div className="group-pill">Group Travel</div>

  <div className="group-grid">
    <div className="group-card">
      <img src="/images/collegeiv.png" alt="College IV" />
      <p>COLLEGE IV</p>
    </div>

    <div className="group-card">
      <img src="/images/corporate.png" alt="Corporate" />
      <p>CORPORATE</p>
    </div>

    <div className="group-card">
      <img src="/images/spirituaktour.png" alt="Spiritual Tour" />
      <p>SPIRITUAL TOUR</p>
    </div>
  </div>
</section>




    </section>
    
  );
}
