import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import React, { useMemo } from 'react';

const servicesData = [
  { title: 'Consultancy', desc: 'Strategic art investments with AI-driven insights and 2025 trends like digital collectibles.' },
  { title: 'Mediation', desc: 'Discreet global transactions, including NFT deals.' },
  { title: 'Representation', desc: 'Worldwide showcasing with focus on sustainable and minimalism art.' },
  { title: 'Custom Framing', desc: 'Bespoke frames for mixed media and retro revival pieces.' },
  { title: 'Art Interior', desc: 'Climate art and abstract landscapes integrated into spaces.' },
  { title: 'Family Office', desc: 'Holistic management with blockchain for generational wealth.' },
];

const Services = React.memo(() => {
  const memoizedServices = useMemo(() => servicesData, []);
  return (
    <>
      <Helmet>
        <title>Services - Artinic</title>
        <meta name="description" content="Art consulting services including AI curation, NFT advisory, and sustainable art management." />
        <meta name="keywords" content="art consultancy, art mediation, NFT art consultancy, sustainable art advisory, AI art curation, art trends 2025" />
      </Helmet>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {memoizedServices.map((service, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              role="article"
              aria-labelledby={`service-${i}`}
            >
              <h3 id={`service-${i}`}>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <a href="/contact" className="cta-button">Request Free Art Trends Guide</a>
      </section>
    </>
  );
});

export default Services;
