import { Helmet } from 'react-helmet-async';

const Legal = () => (
  <>
    <Helmet>
      <title>Legal - Artinic</title>
      <meta name="description" content="Privacy Policy, Terms of Use, Cookie Policy, and Imprint for Artinic." />
    </Helmet>
    <section className="legal">
      <h2>Legal Information</h2>
      <div className="card">
        <h3>Privacy Policy</h3>
        <p>Introduction: This Privacy Policy outlines how Artinic GmbH collects, processes, and protects your personal data in compliance with the Swiss Federal Act on Data Protection (nFADP) and the General Data Protection Regulation (GDPR) where applicable.</p>
        <p>Definitions: Personal data means any information relating to an identified or identifiable natural person. Processing includes any operation on personal data.</p>
        <p>Scope and Applicability: This policy applies to all users of artinic.com and our services.</p>
        <p>Types of Personal Data Collected: We collect name, email, and message from contact forms; IP addresses for web analysis (anonymized); cookies with consent.</p>
        <p>Legal Basis for Processing: Consent for cookies; contract fulfillment for consultations; legitimate interests for site functionality.</p>
        <p>Purposes of Data Processing: To provide services, respond to inquiries, analyze usage, and improve the site.</p>
        <p>Data Security Measures: Encryption, access controls, regular audits.</p>
        <p>Data Retention Periods: Contact data retained for 1 year; analytics data for 14 months; as required by law.</p>
        <p>Individual Rights: Access, rectification, deletion, objection under nFADP/GDPR. Contact info@artinic.com.</p>
        <p>International Data Transfers: Data may be transferred to EU/adequate countries with safeguards like standard clauses.</p>
        <p>Contact Information: Data Protection Officer: dpo@artinic.com.</p>
        <p>Updates to Privacy Policy: We may update this policy; changes posted here with date. Last updated: July 11, 2025.</p>
        <p>Under Article 13 of the Swiss Federal Constitution and federal data protection law, everyone is entitled to privacy protection. We retain data only as needed and protect against abuse.</p>
      </div>
      <div className="card">
        <h3>Terms of Use</h3>
        <p>Limitation of Liability: Although care is taken to ensure accuracy, no warranty is given for information reliability. We reserve the right to alter content without notice. No liability for loss from use or technical faults.</p>
        <p>Links: Links to third-party sites are outside our responsibility. Access at your own risk.</p>
        <p>Copyright: Copyright Artinic GmbH. Downloading content does not transfer rights. Reproduction requires written consent.</p>
        <p>This site is for informational purposes. Use at your own risk. Copyright © 2025 Artinic. Last updated: July 11, 2025.</p>
      </div>
      <div className="card">
        <h3>Cookie Policy</h3>
        <p>We use essential cookies for functionality. Analytics cookies require opt-in consent per FDPIC guidelines (February 2025). Categories: Necessary (always on), Performance (opt-in). You can withdraw consent anytime via banner. No tracking without consent.</p>
        <p>For details, see our GDPR-compliant notice. Last updated: July 11, 2025.</p>
      </div>
      <div className="card">
        <h3>Imprint</h3>
        <p>Artinic GmbH</p>
        <p>Sample Street 1</p>
        <p>4051 Basel</p>
        <p>E-Mail: info@artinic.com</p>
        <p>Phone: +41 61 123 4567</p>
        <p>VAT: CHE-123.456.789</p>
        <p>Responsible: [Your Name]</p>
      </div>
    </section>
  </>
);

export default Legal;