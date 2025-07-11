import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Helmet } from 'react-helmet-async';
import React, { useRef, useMemo } from 'react';

const ArtModel = React.memo(({ color }) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
});

const Portfolio = React.memo(() => {
  const colors = useMemo(() => ['#D4AF37', '#003366'], []);
  return (
    <>
      <Helmet>
        <title>Portfolio - Artinic</title>
        <meta name="description" content="Explore our curated art collections with interactive 3D previews." />
        <meta name="keywords" content="art portfolio, Swiss art collections, 3D art previews" />
      </Helmet>
      <section className="portfolio">
        <h2>Portfolio</h2>
        <p>Discover our curated collections, from historical masterpieces to modern trends.</p>
        <div className="gallery">
          <div className="3d-preview" style={{ height: '400px', width: '100%' }}>
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <ArtModel color={colors[0]} />
              <OrbitControls />
            </Canvas>
          </div>
          <div className="project">
            <h3>Modern Pop Art Collection</h3>
            <img loading="lazy" src="/assets/pop-art.webp" alt="Pop art collection" width="300" />
            <p>Curated for a private collector, featuring Warhol-inspired pieces.</p>
          </div>
          <div className="project">
            <h3>Eco-Art Installation</h3>
            <img loading="lazy" src="/assets/eco-art.webp" alt="Eco-friendly art installation" width="300" />
            <p>Sustainable art for a corporate office in Basel.</p>
          </div>
        </div>
      </section>
    </>
  );
});

export default Portfolio;