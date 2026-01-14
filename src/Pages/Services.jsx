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
          {/* STICKY CONTACT BUTTONS */}
<div className="floating-contact">
  {/* WhatsApp Icon */}
  <a 
    href="https://wa.me/message/URO5FLGSHZNON1" 
    className="floating-btn whatsapp-btn" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>

  {/* Phone Icon */}
  <a href="tel:+91XXXXXXXXXX" className="floating-btn phone-btn">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  </a>
</div>
</section>




    </section>
    
  );
}
