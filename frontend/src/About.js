import React from 'react';
import './About.css';
import { FaEnvelope, FaPhoneAlt, FaUserTie, FaUsers, FaLightbulb, FaHandsHelping, FaGlobe, FaBalanceScale, FaMapMarkerAlt, FaRegBuilding, FaQuoteLeft, FaRegCheckCircle, FaRegHeart, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const aboutData = {
  mission: `"अपना नौगांव" is a non-profit organization dedicated to improving the lives of villagers through sustainable social, environmental, and economic initiatives. Our mission is to foster community well-being, promote environmental cleanliness, alleviate poverty, and ensure the welfare of both people and animals. We work to empower local communities by offering education, healthcare, skill development, and support for vulnerable groups. Through collaboration with volunteers, donors, and partners, we strive to create a compassionate, healthy, and self-sustaining environment. Together, we aim to build a brighter future for all.`,
  vision: [
    'Empowerment of the Community',
    'Environmental Sustainability and Cleanliness',
    'Improvement in Social and Economic Well-being',
  ],
  values: [
    { icon: <FaBalanceScale />, label: 'Transparency' },
    { icon: <FaRegHeart />, label: 'Compassion' },
    { icon: <FaHandsHelping />, label: 'Inclusivity' },
    { icon: <FaGlobe />, label: 'Sustainability' },
    { icon: <FaRegCheckCircle />, label: 'Empowerment' },
  ],
  story: `Founded in 2022 by passionate villagers, Apna Naugaon began as a small initiative to address local challenges. Over the years, it has grown into a vibrant NGO, impacting thousands of lives through education, healthcare, and community development. Our journey is a testament to the power of collective action and hope.`,
  impact: [
    { label: 'Villagers Helped', value: '1200+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Volunteers', value: '150+' },
    { label: 'Communities Reached', value: '8+' },
  ],
  partners: [
    { name: 'Helping Hands Foundation', logo: null },
    { name: 'Green Earth Trust', logo: null },
    { name: 'Local Panchayat', logo: null },
  ],
  howToHelp: [
    { icon: <FaHandsHelping />, label: 'Volunteer with Us' },
    { icon: <FaRegHeart />, label: 'Donate' },
    { icon: <FaGlobe />, label: 'Partner/Collaborate' },
    { icon: <FaFacebook />, label: 'Share on Social Media' },
  ],
  legal: {
    regNo: 'NGO/UP/2022/123456',
    compliance: 'Registered under Societies Registration Act, 1860',
  },
  testimonials: [
    { quote: 'Apna Naugaon changed my life by providing education for my children.', name: 'Ramesh, Beneficiary' },
    { quote: 'Volunteering here gave me a sense of purpose and community.', name: 'Priya, Volunteer' },
    { quote: 'Their transparency and impact are truly inspiring.', name: 'Amit, Donor' },
  ],
  location: {
    address: 'Village Naugaon, Akbarpur-Shergarh Road, Mathura, Uttar Pradesh, India',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d77.6666666!3d27.6666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjfCsDM5JzU5LjAiTiA3N8KwMzknNTkuOSJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
  },
  contact: [
    { icon: <FaEnvelope />, label: 'E-mail', value: 'spritepersonal1109@gmail.com' },
    { icon: <FaPhoneAlt />, label: 'Mobile', value: '+91 7451932209' },
    { icon: <FaFacebook />, label: 'Facebook', value: 'facebook.com/apnaugaon' },
    { icon: <FaInstagram />, label: 'Instagram', value: 'instagram.com/apnaugaon' },
    { icon: <FaTwitter />, label: 'Twitter', value: 'twitter.com/apnaugaon' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/company/apnaugaon' },
  ],
  team: {
    founder: { name: 'Sprite Nestorial Sisodia', icon: <FaUserTie /> },
    cofounders: [
      { name: 'Akash Sisodia', icon: <FaUsers /> },
      { name: 'Sunil Kumar', icon: <FaUsers /> },
    ],
  },
};

const About = () => (
  <div className="about-container">
    <h2 className="about-title">About Us</h2>
    <div className="about-main">
      <div className="about-left">
        <div className="about-card mission-card">
          <FaLightbulb className="about-icon" />
          <h3>Our Mission</h3>
          <p>{aboutData.mission}</p>
        </div>
        <div className="about-card vision-card">
          <h3>Our Vision</h3>
          <ul>
            {aboutData.vision.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
        <div className="about-card values-card">
          <h3>Core Values</h3>
          <ul>
            {aboutData.values.map((v, i) => (
              <li key={i}>{v.icon} {v.label}</li>
            ))}
          </ul>
        </div>
        <div className="about-card story-card">
          <h3>Our Story</h3>
          <p>{aboutData.story}</p>
        </div>
        <div className="about-card impact-card">
          <h3>Impact & Achievements</h3>
          <ul>
            {aboutData.impact.map((item, i) => (
              <li key={i}><strong>{item.value}</strong> {item.label}</li>
            ))}
          </ul>
        </div>
        <div className="about-card partners-card">
          <h3>Partners & Supporters</h3>
          <ul>
            {aboutData.partners.map((p, i) => (
              <li key={i}>{p.logo ? <img src={p.logo} alt={p.name} /> : <FaRegBuilding />} {p.name}</li>
            ))}
          </ul>
        </div>
        <div className="about-card help-card">
          <h3>How You Can Help</h3>
          <ul>
            {aboutData.howToHelp.map((h, i) => (
              <li key={i}>{h.icon} {h.label}</li>
            ))}
          </ul>
        </div>
        <div className="about-card legal-card">
          <h3>Legal & Registration</h3>
          <p><strong>Reg. No:</strong> {aboutData.legal.regNo}</p>
          <p>{aboutData.legal.compliance}</p>
        </div>
      </div>
      <div className="about-right">
        <div className="about-card founder-card">
          <h3>Founder</h3>
          <div className="about-team-member">{aboutData.team.founder.icon} {aboutData.team.founder.name}</div>
        </div>
        <div className="about-card cofounders-card">
          <h3>Co-Founders</h3>
          <ul>
            {aboutData.team.cofounders.map((c, i) => (
              <li key={i}>{c.icon} {c.name}</li>
            ))}
          </ul>
        </div>
        <div className="about-card testimonials-card">
          <h3>Testimonials</h3>
          <ul>
            {aboutData.testimonials.map((t, i) => (
              <li key={i}><FaQuoteLeft style={{marginRight: 6}} /> "{t.quote}" <br /><span style={{fontSize: '0.95em', color: '#388e3c'}}>- {t.name}</span></li>
            ))}
          </ul>
        </div>
        <div className="about-card contact-card">
          <h3>Contact Us</h3>
          <ul>
            {aboutData.contact.map((c, i) => (
              <li key={i}>{c.icon} <span>{c.label}:</span> {c.value}</li>
            ))}
          </ul>
        </div>
        <div className="about-card location-card">
          <h3>Location</h3>
          <p><FaMapMarkerAlt /> {aboutData.location.address}</p>
          <div className="about-map-embed">
            <iframe
              src={aboutData.location.mapEmbed}
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NGO Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About; 