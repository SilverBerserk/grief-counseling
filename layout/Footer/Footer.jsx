const Footer = () => {
  return (
    <footer className='page-footer'>
      <a
        href=''
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Return to Top
      </a>
      <div>
        <a href='mailto:email@support.com'>email@support.com</a>
        <a href='tel:XXX-XXX-XXXX'>XXX-XXX-XXXX</a>
      </div>
      <div>2501 Parmenter St Middleton, Wisconsin 53562, US</div>
    </footer>
  );
};

export default Footer;
