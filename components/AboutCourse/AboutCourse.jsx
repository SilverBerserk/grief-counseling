import Image from "next/image";
import clockIcon from "../../icons/clock.svg";
import heartIcon from "../../icons/heart.svg";
import connectedPeopleIcon from "../../icons/connectedPeople.svg";

const items = [
  { icon: clockIcon, text: "Over 36 hours of content" },
  {
    icon: heartIcon,
    text: "Access to a series ranging across all potential avenues of grief support, so there is something of use for everyone",
  },
  {
    icon: connectedPeopleIcon,
    text: "A wide array of experts in grief, experts in healing, and advice from peers who have gone through similar experiences",
  },
];

const DescriptionItem = ({ icon, text }) => {
  return (
    <div className='item'>
      <div className='image'>
        <Image src={icon} alt='icon' />
      </div>
      <div className='text'>{text}</div>
    </div>
  );
};

const AboutCourse = ({ title, subTitle, description, price }) => {
  return (
    <div className='about-course'>
      <div className='header'>
        <h3 className='title'>{title}</h3>
        <div className='price'>{price + "$"}</div>
      </div>

      <h5 className='subtitle'>{subTitle}</h5>
      <div className='description'>{description}</div>
      <div className='items'>
        {items.map((e, i) => (
          <DescriptionItem key={"item" + i} icon={e.icon} text={e.text} />
        ))}
      </div>
    </div>
  );
};

export default AboutCourse;
