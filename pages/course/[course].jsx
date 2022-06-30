import axios from "axios";

import Layout from "../../layout";
import EmbedVideo from "../../components/EmbedVideo";
import AboutCourse from "../../components/AboutCourse";
import PaymentForm from "../../components/PaymentForm";
import Banner from "../../components/Banner";
import ContentOutline from "../../components/ContentOutline";
import OurExperts from "../../components/OurExperts";
import FAQs from "../../components/FAQs";

const CoursePage = ({ pageData, faqs }) => {
  const { headerText, price, videoUrl, experts, title, subTitle, description } =
    pageData;

  console.log("pageData", pageData);
  console.log("faqs", faqs);
  return (
    <Layout>
      <div className={"course-page"}>
        <EmbedVideo url={videoUrl} />
        <AboutCourse
          title={title}
          subTitle={subTitle}
          description={description}
          price={price}
        />
        <PaymentForm price={price} bannerText={headerText} />

        <Banner className='on-page' text={headerText} />
        <ContentOutline />
        <OurExperts experts={experts} />
        <FAQs faqs={faqs} />
      </div>
    </Layout>
  );
};

export default CoursePage;

export const getStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { data: pageData } = await axios.get(
    `https://grief-counseling-api.dev-directory.com/api/v1/courses/${params.course}`
  );
  const { data: faqs } = await axios.get(
    `https://grief-counseling-api.dev-directory.com/api/v1/faqs`
  );
  return { props: { pageData, faqs } };
};

export const getStaticPaths = async () => {
  return {
    paths: ["/course/grief-support"],
    fallback: true,
  };
};
