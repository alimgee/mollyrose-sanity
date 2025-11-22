// mollyrose-web/src/components/Footer.tsx

export default function Footer() { // <--- MUST have 'export default'
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MollyRose. All rights reserved.</p>
        {/* Add any other footer content or links here */}
      </div>
    </footer>
  );
}

