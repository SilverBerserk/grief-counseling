import { Button } from "react-bootstrap";
import buttonArrowIcon from "../../icons/buttonArrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const smoothScroll = id => {
  const y = document.querySelector(id).getBoundingClientRect().y;
  window.scrollTo({
    top: y + window.scrollY - 112,
    behavior: "smooth",
  });
};

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth < 993);
    };

    window.onresize = handleResize;
  }, []);

  return (
    <header className='page-header-wrapper'>
      <div className='page-header'>
        <Button variant='outline-light' className='back-btn'>
          <Image src={buttonArrowIcon} alt='<' />
          <span className='text'>Back</span>
        </Button>
        <Button variant='link' onClick={() => smoothScroll(".content-outline")}>
          {small ? "Content" : "Content Outline"}
        </Button>
        <Button variant='link' onClick={() => smoothScroll(".our-experts")}>
          {small ? "Teachers" : "Meet the Experts"}
        </Button>
        <Button variant='link' onClick={() => smoothScroll(".faqs")}>
          {small ? "Questions" : "FAQs"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
