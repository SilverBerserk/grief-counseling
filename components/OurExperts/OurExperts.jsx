import Image from "next/image";
import { Accordion } from "react-bootstrap";
import accordionArrowIcon from "../../icons/accordionArrow.svg";

const ExpertItem = ({
  avatar,
  firstName,
  lastName,
  profession,
  description,
}) => {
  return (
    <div className='expert-item'>
      <img src={avatar} className='image' alt='avatar' />
      <div className='expert-item-content'>
        <div className='name'>{firstName + " " + lastName}</div>
        <div className='profession'>{profession}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
};

const OurExperts = ({ experts }) => {
  return (
    <div className='our-experts'>
      <div className='title'>Our Experts</div>
      <Accordion defaultActiveKey={0}>
        {experts.map((e, i) => (
          <Accordion.Item eventKey={i} key={"item" + i}>
            <Accordion.Header>
              <div className='accordion-arrow'>
                <Image src={accordionArrowIcon} />
              </div>
              <div className='accordion-title'>
                <b>{e.type}</b> - {e.description}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {e.persons?.map((p, i) => (
                <ExpertItem {...p} key={"person" + i} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default OurExperts;
