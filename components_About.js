import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import React from 'react';

const timelineEvents = [
  { year: 1881, event: 'Founded in Basel, pioneering traditional art consultancy.' },
  { year: '1900s', event: 'Expanded global networks for collectors.' },
  { year: 2025, event: 'Leading in AI, NFTs, and sustainable art trends.' },
];

const About = React.memo(() => (
  <>
    <Helmet>
      <title>About - Artinic</title>
      <meta name="description" content="Our 140-year legacy in Swiss art consultancy, now embracing AI, NFTs, and sustainability." />
      <meta name="keywords" content="Swiss art consultancy, art history, sustainable art" />
    </Helmet>
    <section className="about">
      <h2>About Artinic</h2>
      <p>Since 1881, Artinic has been a beacon of Swiss precision in art consultancy, connecting collectors, artists, and institutions with unparalleled expertise.</p>
      <h3>Our Legacy</h3>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
        {timelineEvents.map((event, i) => (
          <motion.li key={i} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            <strong>{event.year}:</strong> {event.event}
          </motion.li>
        ))}
      </motion.ul>
      <p>Committed to sustainability, we integrate eco-friendly practices in art curation.</p>
    </section>
  </>
));

export default About;
