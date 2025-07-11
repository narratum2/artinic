import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import React from 'react';

const Hero = React.memo(() => (
  <>
    <Helmet>
      <title>Artinic - Swiss Art Consultancy Since 1881</title>
      <meta name="description" content="Expert art consultancy, mediation, and representation for discerning collectors, including AI art curation and NFT advisory." />
      <meta name="keywords" content="Swiss art consultancy, art trends 2025, NFT art consultancy, sustainable art advisory, AI art curation" />
    </Helmet>
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Artinic: Shaping Art Legacies with 2025 Trends
        </motion.h1>
        <p>Swiss expertise in AI curation, NFTs, sustainable practices, and family office services.</p>
        <a href="/contact" className="cta-button">Request Valuation</a>
      </div>
    </motion.section>
  </>
));

export default Hero;
