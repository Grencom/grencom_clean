import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const features = [
  ["Solar PV + optional battery", "Full project delivery & grant help", "Maintenance, monitoring included", "€350–€800/month for 5–10 years"],
  ["Zero-cost rooftop or battery install", "Earn €100–€600/month or get lower energy bills", "System fully maintained by Grencom", "Optional EV and Club upgrades"],
  ["Direct ownership = highest ROI", "Grant support included", "€14,000–€30,000 investment (after subsidy)", "Payback in 4–6 years"],
  ["Annual report, badge, green map", "Tariff switching & monitoring (Opt./Pro)", "EV-sharing & events (Pro tier)", "€15–€69/month depending on tier"]
];

const solutionDescriptions = [
  "Predictable pricing, green savings, full-service package.",
  "No cost to you — earn rent or get reduced energy bills.",
  "Maximize ROI with asset ownership and grants.",
  "Your green identity — rewards, badge, visibility."
];

const solutionIcons = ["⚡", "🌞", "💼", "🏆"];

export default function GrencomLandingPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [message, setMessage] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);

  const headerStyle = {
    background: "#004225",
    padding: "1rem 2rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  };

  const navStyle = {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  const prefillAuditMessage = () => {
    setMessage("Hi Grencom team, I'd like to request a free audit for my business. Please get in touch with me.");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const mapContainer = L.DomUtil.get("greenmap");
    if (mapContainer != null && mapContainer._leaflet_id != null) {
      mapContainer._leaflet_id = null; // reset Leaflet internal id
    }
    
    const map = L.map("greenmap").setView([46.5, 13], 6);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const icon = L.icon({
      iconUrl: "/logos/GrencomChampion.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });

    const randomCoords = [
      [48.2, 16.37], [47.07, 15.43], [47.5, 19.05], [46.26, 20.14], [46.36, 17.78],
      [47.5, 21.6], [46.95, 7.45], [44.83, 20.42], [46.3, 16.34], [47.15, 19.52],
      [45.44, 12.33], [45.07, 7.69], [46.05, 11.12], [48.31, 14.3], [46.2, 6.15],
      [47.6, 18.95], [46.07, 13.23], [47.8, 13.04], [45.3, 9.2], [44.87, 13.85],
      [46.06, 13.85], [48.15, 17.12], [48.73, 19.14], [48.71, 21.26]
    ];

    randomCoords.forEach(([lat, lon]) => {
      L.marker([lat, lon], { icon }).addTo(map).bindPopup("Grencom Champion");
    });
  }, []);

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Grencom</h1>
        <nav style={navStyle}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Solutions</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Impact</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Newsletter</a>
          <a href="#blog" style={{ color: "white", textDecoration: "none" }}>Blog</a>
        </nav>
      </header>

      
            {/* Hero Section */}
      <section style={{ background: "#f3f4f6", padding: "4rem 2rem", textAlign: "center", position: "relative" }}>
        <img src="/logos/grencom-logo.png" alt="Grencom Logo" style={{ maxWidth: "150px", marginBottom: "1rem", position: "absolute", top: "2rem", left: "2rem" }} />
        <h1 style={{ fontSize: "2.5rem", color: "#004225" }}>Clean Energy. Local Power. One Simple Plan.</h1>
        <p style={{ fontSize: "1.125rem", marginTop: "1rem", color: "#333" }}>
          We help small businesses cut energy costs, earn from their rooftops, and get seen for going green – with no upfront investment.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <button onClick={prefillAuditMessage} style={{ background: "#00704a", color: "white", padding: "0.75rem 1.5rem", border: "none", borderRadius: "6px", fontSize: "1rem", cursor: "pointer" }}>
            Ask for Free Audit
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ background: "#edf6f2", padding: "3rem", borderRadius: "1rem", marginBottom: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0.5rem", color: "#004225" }}>How It Works</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
          You stay in control — we guide you at every step from audit to installation and beyond.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {["Free Audit", "Pick a Plan", "Installation", "Champions Club"].map((title, index) => (
            <div key={index} style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <div style={{ color: "#00704a", fontWeight: 700, marginBottom: "0.5rem" }}>Step {index + 1}</div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ color: "#555" }}>
                {[
                  "We assess your rooftop or site potential at no cost.",
                  "Choose PowerPlan, Host Program, or Ownership — we’ll design it.",
                  "We manage the full install including permits and grid.",
                  "Enjoy your savings, insights, badge and perks."
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions for SMEs Section */}
      <section style={{ background: "#f4f8f9", padding: "4rem 2rem" }}>
        <h2 style={{ textAlign: "center", color: "#004225", fontSize: "2rem", marginBottom: "2rem" }}>Solutions for SMEs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          {["PowerPlan Subscription", "Energy Host Program", "Direct Ownership", "Champions Club"].map((title, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
              <h3 style={{ color: "#004225", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{solutionIcons[i]}</span>
                {title}
              </h3>
              <p style={{ color: "#555", marginTop: "0.5rem" }}>{solutionDescriptions[i]}</p>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ margin: "1rem 0", background: "#00695C", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "6px", cursor: "pointer" }}
              >
                {openIndex === i ? "Hide features" : "Learn more"}
              </button>
              {openIndex === i && (
                <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                  {features[i].map((point, j) => (
                    <li key={j} style={{ paddingBottom: "0.5rem", color: "#333" }}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      

      
      {/* Testimonials Section */}
      <section style={{ background: "#f3f4f6", padding: "3rem 2rem", borderRadius: "1rem", marginTop: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#004225", marginBottom: "2rem" }}>What Our Customers Say</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", maxWidth: 1000, margin: "0 auto" }}>
          {[{
            name: "Eva – Bakery",
            text: "The rooftop install was smooth, and now our energy bills are lower.",
            image: "/testimonials/eva.jpg"
          }, {
            name: "Janus – Butcher",
            text: "Grencom’s monitoring tools help us understand and optimize.",
            image: "/testimonials/janus.jpg"
          }, {
            name: "Gerard – Warehouse",
            text: "Hosting the panels brings in extra passive income.",
            image: "/testimonials/gerard.jpg"
          }, {
            name: "Sophie – Cafe Owner",
            text: "Our visibility badge helped attract eco-minded customers.",
            image: "/testimonials/sophie.jpg"
          }].map((testimonial, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <img src={testimonial.image} alt={testimonial.name} style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }} />
              <blockquote style={{ fontStyle: "italic", color: "#333", marginBottom: "1rem" }}>{testimonial.text}</blockquote>
              <footer style={{ fontWeight: 600, color: "#004225" }}>{testimonial.name}</footer>
            </div>
          ))}
        </div>
      </section>

{/* Real Impact Section */}
      <section style={{ background: "#f0fdf4", padding: "3rem 2rem", borderRadius: "1rem", marginTop: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#004225", marginBottom: "2rem" }}>Real Impact</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {[
            { label: "€2,500/year", desc: "Average savings per SME" },
            { label: "€600", desc: "Yearly income from roof rental" },
            { label: "20+ shops", desc: "Listed on the Green Map" },
            { label: "4–6 years", desc: "Payback period if purchasing" }
          ].map((item, index) => (
            <div key={index} style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#00704a" }}>{item.label}</h3>
              <p style={{ color: "#555" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Logos Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
 style={{ background: "linear-gradient(to bottom, #f0fdf4, #ffffff)", padding: "3rem 2rem", borderRadius: "1rem", marginTop: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#004225", marginBottom: "2rem" }}>Our Trusted Partners</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
          {[...Array(7)].map((_, i) => (
            <img
              key={i}
              src={`/partners/partner${i + 1}.png`}
              alt={`Partner ${i + 1}`}
              style={{ height: 60, transition: "transform 0.3s ease, box-shadow 0.3s ease", borderRadius: "8px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Footer Section */}

      {/* Green Map Section */}
      <section style={{ background: "#e0f7fa", padding: "3rem 2rem", borderRadius: "1rem", marginTop: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#004225", marginBottom: "1rem" }}>Join the Green Map</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
          See who’s already saving energy locally and promote your green profile.
        </p>
        <div id="greenmap" style={{ height: "500px", width: "100%", borderRadius: "10px" }}></div>
      </section>

      {/* Contact Section */}
      <section style={{ background: "#edf7ed", padding: "3rem 2rem", borderRadius: "1rem", marginTop: "4rem" }}>
  <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#004225", marginBottom: "0.5rem" }}>Contact Us</h2>
  <p style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Let’s explore your energy potential.</p>
  <form action="mailto:grencombdm@gmail.com" method="POST" encType="text/plain" style={{ maxWidth: 500, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
    <input name="Name" placeholder="Name" required style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }} />
    <input name="Email" placeholder="Email" type="email" required style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }} />
    <textarea
      name="Message"
      placeholder="Message"
      rows={4}
      required
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
    />
    <button type="submit" style={{ background: "#00704a", color: "white", padding: "0.75rem", border: "none", borderRadius: "6px", fontSize: "1rem", cursor: "pointer" }}>
      Send Message
    </button>
  </form>
      </section>

      {/* Blog Section */}
      <section id="blog" style={{ background: "#fdfcfb", padding: "3rem 2rem", borderRadius: "1rem", marginTop: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#004225", marginBottom: "2rem" }}>From Our Blog</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {[{
            title: "5 Ways to Cut Your Energy Bills in 2025",
            excerpt: "Discover smart strategies for SMEs to reduce monthly costs while going green.",
            link: "#"
          }, {
            title: "How Rooftop Hosting Works",
            excerpt: "Turn unused roof space into revenue. We explain how hosting solar makes it easy.",
            link: "#"
          }, {
            title: "Direct Solar Ownership vs. Subscription",
            excerpt: "Not sure which model fits your business? We break down the pros and cons.",
            link: "#"
          }].map((post, i) => (
            <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <h3 style={{ color: "#004225" }}>{post.title}</h3>
              <p style={{ color: "#555" }}>{post.excerpt}</p>
              <a href={post.link} style={{ color: "#00704a", textDecoration: "underline" }}>Read more</a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: '#004225', color: 'white', padding: '2rem', marginTop: '4rem', textAlign: 'center' }}>
      <div>
          <p>📍 Grencom, 1037 Budapest, Montevideo utca 10., Hungary</p>
          <p>📞 +420 723 950 467</p>
          <p>✉️ grencombdm@gmail.com</p>
        </div>
        <p>&copy; {`${new Date().getFullYear()} Grencom. All rights reserved.`}</p>
        <button onClick={() => setShowPrivacy(true)} style={{ background: 'transparent', color: 'white', textDecoration: 'underline', border: 'none', marginTop: '1rem', cursor: 'pointer' }}>
          Privacy Policy
        </button>

  
      </footer>

      {showPrivacy && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '500px', textAlign: 'left' }}>
            <h2 style={{ color: '#004225' }}>Privacy Policy</h2>
            <p style={{ marginTop: '1rem', color: '#333' }}>
              We respect your privacy. Your information will be used only to respond to your inquiries or improve your experience. We do not sell or share your data.
            </p>
            <button
              onClick={() => setShowPrivacy(false)}
              style={{ marginTop: '1.5rem', background: '#00704a', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
