import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: '60px 20px 20px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* Kontak */}
        <div>
          <h3 style={{ color: '#38bdf8', marginBottom: '20px' }}>Sedap.</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#cbd5e1' }}>
            Menghadirkan cita rasa autentik kuliner nusantara langsung ke meja makan Anda.
          </p>
          <p style={{ fontSize: '14px', marginTop: '15px' }}>📍 Jl. Kuliner Nusantara No. 45, Jakarta</p>
          <p style={{ fontSize: '14px' }}>📞 +62 812-3456-7890</p>
          <p style={{ fontSize: '14px' }}>✉️ support@sedap-culinary.com</p>
        </div>

        {/* Navigasi Footer singkat */}
        <div>
          <h4 style={{ marginBottom: '20px', borderBottom: '2px solid #38bdf8', paddingBottom: '5px', display: 'inline-block' }}>Tautan</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
            <li><a href="#hero" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tentang Kami</a></li>
            <li><a href="#produk" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Menu Unggulan</a></li>
            <li><a href="#testimoni" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Ulasan</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 style={{ marginBottom: '20px', borderBottom: '2px solid #38bdf8', paddingBottom: '5px', display: 'inline-block' }}>Ikuti Kami</h4>
          <div style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
            <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>🌐 Instagram</a>
            <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>📘 Facebook</a>
            <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>🐦 Twitter</a>
          </div>
        </div>

        {/* Partner */}
        <div>
          <h4 style={{ marginBottom: '20px', borderBottom: '2px solid #38bdf8', paddingBottom: '5px', display: 'inline-block' }}>Mitra Pembayaran & Logistik</h4>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', filter: 'grayscale(100%) brightness(100%)' }}>
            <img src="/src/assets/gojek.jpg" alt="Gojek" style={{ height: '25px' }} />
            <img src="/src/assets/grab2.jpg" alt="Grab" style={{ height: '20px' }} />
            <img src="/src/assets/bca.jpg" alt="BCA" style={{ height: '22px' }} />
          </div>
        </div>

      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #334155', margin: '40px 0 20px 0' }} />
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>&copy; 2026 Sedap Nusantara. All Rights Reserved. Tugas UTS.</p>
    </footer>
  );
};

export default Footer;