const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p style={{ margin: 0, fontSize: '0.85rem' }}>
        © {currentYear} Balaji Vinothkumar • All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;