import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/FooterGuest';

// Import data JSON
import productsData from '../Data/Product.json';
import customersData from '../Data/Customer.json';

const LandingPage = () => {
  const testimoniTerpilih = customersData.slice(0, 5);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: productsData[1]?.image || "/src/assets/sate.jpg", name: "Sate Maranggi Cianjur" },
    { image: productsData[0]?.image || "/src/assets/rendang.jpg", name: "Rendang Mandeh" },
    { image: productsData[2]?.image || "/src/assets/gudeg.jpg", name: "Gudeg Asli Wijilan" },
    { image: productsData[3]?.image || "/src/assets/betutu.jpg", name: "Ayam Betutu Gilimanuk" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  const alasanTestimoni = [
    { alasan: "Rasa rempahnya benar-benar berani dan asli nusantara! Sate Marangginya empuk banget, bumbunya meresap sampai ke serat daging terdalam." },
    { alasan: "Pengiriman super cepat dan kurirnya ramah. Kemasannya rapi banget pakai wadah food-grade tebal jadi makanan masih hangat pas sampai rumah!" },
    { alasan: "Sangat higienis! Susah cari makanan tradisional yang bersihnya sedetail ini di platform online. Gudegnya tidak terlalu manis, pas sekali di lidah." },
    { alasan: "Porsi paket keluarganya pas dan hemat banget untuk makan malam bareng. Potongan daging Rendangnya besar-besar dan teksturnya lembut." },
    { alasan: "Aplikasi dan proses pemesanannya gampang banget, tidak ribet. Pilihan menunya lengkap dari berbagai daerah, mengobati rasa kangen kuliner kampung." }
  ];

  return (
    <div style={{ 
      fontFamily: '"Plus Jakarta Sans", sans-serif', 
      color: '#2b2b2b', 
      backgroundColor: '#fff',
      position: 'relative',
      overflowX: 'hidden' 
    }}>
      
      {/* 🛠️ SISTEM STYLE & HOVER EFFECT */}
      <style>{`
        @keyframes floatHero {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes capsuleFloatOne {
          0% { transform: translateY(0px) rotate(-35deg); }
          50% { transform: translateY(-25px) rotate(-33deg); }
          100% { transform: translateY(0px) rotate(-35deg); }
        }
        @keyframes capsuleFloatTwo {
          0% { transform: translateY(0px) rotate(-35deg); }
          50% { transform: translateY(20px) rotate(-37deg); }
          100% { transform: translateY(0px) rotate(-35deg); }
        }
        .hero-floating-element { animation: floatHero 5s infinite ease-in-out; }
        .hover-card-eat {
          background-color: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          border: 1px solid #f3f3f3;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          z-index: 2;
        }
        .hover-card-eat:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 40px rgba(243, 156, 18, 0.15);
          border-color: #fbe2b5;
        }
        .btn-orange-primary {
          background-color: #f39c12;
          color: #fff;
          transition: all 0.3s ease;
        }
        .btn-orange-primary:hover {
          background-color: #e67e22;
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(243, 156, 18, 0.3);
        }
        .nav-link {
          text-decoration: none;
          color: #555;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #f39c12; }
        .btn-login-link {
          text-decoration: none;
          color: #555;
          font-weight: 700;
          transition: all 0.2s ease;
        }
        .btn-login-link:hover { color: #f39c12; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Ornamen Latar Belakang */}
      <div style={{ position: 'absolute', width: '140px', height: '420px', background: 'linear-gradient(135deg, #dcd1ff 0%, #c4b5fd 100%)', borderRadius: '100px', top: '40px', left: '-60px', zIndex: 1, transform: 'rotate(-35deg)', pointerEvents: 'none', opacity: 0.8, animation: 'capsuleFloatOne 9s infinite ease-in-out' }} />

      {/* 1. NAVBAR / HEADER (YANG SUDAH DIRAPIKAN) */}
      <header style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        borderBottom: '1px solid rgba(243, 156, 18, 0.08)', 
        width: '100%'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', // ✨ Memperbaiki typo huruf kapital 'C' agar layout melebar ke ujung
          alignItems: 'center', 
          padding: '20px 40px' 
        }}>
          
          {/* Sisi Kiri: Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '26px', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
              🍜 <span style={{ color: '#f39c12' }}>SEDAP</span>
            </span>
          </div>

          {/* Sisi Tengah: Menu Navigasi Utama */}
          <nav style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
            <a href="#hero" className="nav-link" style={{ color: '#f39c12' }}>Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#produk" className="nav-link">Restaurants Menu</a>
            <a href="#testimoni" className="nav-link">Contacts</a>
          </nav>

          {/* Sisi Kanan: Autentikasi Kontrol */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link to="/login" className="btn-login-link">
              Log In
            </Link>
            
            <Link to="/register" className="btn-orange-primary" style={{ 
              textDecoration: 'none', 
              padding: '12px 28px', 
              borderRadius: '8px', 
              fontWeight: '700', 
              fontSize: '14px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.5px' 
            }}>
              REGISTER
            </Link>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '90px 40px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '50px', position: 'relative', zIndex: 2 }}>
        <div style={{ flex: '1.1', minWidth: '320px' }}>
          <h1 style={{ fontSize: '64px', fontWeight: '800', lineHeight: '1.1', color: '#1a1a1a', marginBottom: '25px' }}>
            The Best <br /> Tradisional Food <br /> <span style={{ color: '#f39c12' }}>In Your Home</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#777', lineHeight: '1.6', marginBottom: '40px', maxWidth: '480px' }}>
            Sedap menghadirkan kelezatan makanan tradisional nusantara pilihan dengan cita rasa asli, langsung diantar hangat ke depan pintu rumah Anda.
          </p>
          <div style={{ display: 'flex', backgroundColor: '#fff', padding: '10px 12px', borderRadius: '12px', boxShadow: '0 15px 30px rgba(0,0,0,0.06)', maxWidth: '500px', alignItems: 'center', border: '1px solid #f1f1f1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, paddingLeft: '10px' }}>
              <span style={{ color: '#aaa', fontSize: '18px' }}>🔍</span>
              <input type="text" placeholder="Choose a menu or restaurant..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '15px', color: '#555' }} />
            </div>
            <a href="#produk" className="btn-orange-primary" style={{ textDecoration: 'none', padding: '14px 28px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap' }}>Search Now</a>
          </div>
        </div>

        <div style={{ flex: '0.9', minWidth: '320px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div className="hero-floating-element" style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#f39c12', borderRadius: '40px', transform: 'rotate(-3deg)', zIndex: -1, top: '20px', left: '10px' }} />
            <div style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', overflow: 'hidden', position: 'relative', height: '420px', width: '100%' }}>
              {heroSlides.map((slide, index) => (
                <img 
                  key={index}
                  src={slide.image} 
                  alt={slide.name} 
                  style={{ 
                    width: '100%', height: '100%', objectFit: 'cover', borderRadius: '32px',
                    position: 'absolute', top: 0, left: 0, padding: '12px', boxSizing: 'border-box',
                    transition: 'opacity 0.8s ease-in-out',
                    opacity: currentSlide === index ? 1 : 0,
                    zIndex: currentSlide === index ? 2 : 1
                  }} 
                />
              ))}
            </div>

            <div style={{ position: 'absolute', top: '25%', right: '-30px', backgroundColor: '#fff', padding: '12px 20px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 3 }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#f39c12' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontWeight: '800', fontSize: '14px', color: '#1a1a1a' }}>50+ Menus</p>
                <p style={{ margin: 0, fontSize: '11px', color: '#888' }}>In your area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" style={{ backgroundColor: 'rgba(250, 250, 250, 0.4)', padding: '120px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>
            About <span style={{ color: '#f39c12' }}>Our Service</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8', maxWidth: '780px', margin: '0 auto' }}>
            Misi kami di <strong>Sedap</strong> adalah mendistribusikan cita rasa resep legendaris Indonesia dengan kemudahan modern. dan membuat seluruh masakan indonesia menjadi makanan ter SEDAP di dunia
          </p>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION */}
      <section id="produk" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Popular Traditional Dishes</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '35px' }}>
          {productsData.map((item) => (
            <div key={item.id} className="hover-card-eat">
              <div style={{ height: '240px', width: '100%', backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '19px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>{item.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', fontWeight: '800', color: '#f39c12' }}>{item.price}</span>
                  <button className="btn-orange-primary" style={{ border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="testimoni" style={{ backgroundColor: 'rgba(250, 250, 250, 0.5)', padding: '100px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a' }}>What Our Customers Say</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {testimoniTerpilih.map((customer, index) => (
              <div key={index} className="hover-card-eat" style={{ flex: '1', minWidth: '310px', maxWidth: '390px', padding: '35px' }}>
                <p style={{ color: '#555', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '25px' }}>
                  "{alasanTestimoni[index]?.alasan || customer.review}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={customer.avatar || `https://i.pravatar.cc/150?img=${index + 20}`} alt={customer.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f39c12' }} />
                  <div>
                    <h5 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700', color: '#1a1a1a' }}>{customer.name}</h5>
                    <span style={{ fontSize: '12px', color: '#f39c12' }}>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />

    </div>
  );
};

export default LandingPage;