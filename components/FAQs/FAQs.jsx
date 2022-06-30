import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import cn from "classnames";
import questionCircleIcon from "../../icons/questionCircle.svg";
import btnTriangleIcon from "../../icons/buttonTriangle.svg";

const FaqsItem = props => {
  const { title, description } = props;
  return (
    <div className='faqs-item'>
      <div className='image'>
        <Image src={questionCircleIcon} alt='O' />
      </div>
      <div className='faqs-item-content'>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};

const FAQs = ({ faqs }) => {
  const [small, setSmall] = useState(false);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth < 993);
    };

    window.onresize = handleResize;
  }, []);
  return (
    <div className='faqs'>
      <div className='faqs-title'>FAQs</div>
      <div className='faqs-items'>
        {faqs.slice(0, 3).map((e, i) => (
          <FaqsItem {...e} key={"item" + i} />
        ))}
      </div>
      <div className={cn("faqs-items-hide", { small }, { hidden: showMore })}>
        {faqs.slice(3, faqs.length).map((e, i) => (
          <FaqsItem {...e} key={"item" + i} />
        ))}
      </div>
      {faqs.length > 3 && small && (
        <Button
          className={cn({ "show-more": showMore })}
          variant='link'
          onClick={() => setShowMore(e => !e)}
        >
          <span className='text'>{showMore ? "Show More" : "Show Less"}</span>
          <div className='btn-arrow'>
            <Image src={btnTriangleIcon} alt='>' />
          </div>
        </Button>
      )}
    </div>
  );
};

export default FAQs;

export const getStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { data } = await axios.get(
    `https://grief-counseling-api.dev-directory.com/api/v1/faqs`
  );
  return { props: data };
};
