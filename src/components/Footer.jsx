const Footer = () => {
  // In a dynamic app, "Last Updated" can be misleading.
  // A simple copyright year is often clearer.
  // If you want to show a build date, that requires build-time environment variables.
  const currentYear = new Date().getFullYear();
  const lastUpdatedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long'
  }).format(new Date()); // This shows the date the user loaded the page.

  return (
    <footer>
      <p style={{ paddingTop: '20px' }}>
        © {currentYear} Balaji Vinothkumar • All Rights Reserved <br />
        <small>Last Updated: <span id="last-updated">{lastUpdatedDate}</span></small>
      </p>
    </footer>
  );
};

export default Footer;