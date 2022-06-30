import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { post } from "../../services/api";
import cn from "classnames";
import Banner from "../Banner";

const PaymentForm = ({ price, bannerText }) => {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    scope: "gift",
    courseSlug: "grief-support",
  });

  const handleSubmit = event => {
    event.preventDefault();

    setLoad(true);

    post(`https://grief-counseling-api.dev-directory.com/api/v1/orders`, values)
      .then(res => {
        router.push(res.stripe_url);
      })
      .catch(err => {
        setErrors(err.userMessage);
        console.log(err.userMessage);
      })
      .finally(setLoad(false));
  };

  return (
    <Form className='payment-form' onSubmit={handleSubmit} noValidate>
      <div className='title'>
        <h3 className='title-price'>{`$${price}`}</h3>
        <div className='title-description'>For one year of access</div>
      </div>
      <div className='step1'>
        <div className='step-title'>1. Who is this for ?</div>
        <Form.Check
          name='radiobtn1'
          type='radio'
          label='A gift'
          id='agift'
          checked={values.scope === "gift"}
          disabled={load}
          onChange={() => setValues(e => ({ ...e, scope: "gift" }))}
        />
        <Form.Check
          name='radiobtn2'
          type='radio'
          label='Myself'
          id='myself'
          disabled={load}
          checked={values.scope === "self"}
          onChange={() => setValues(e => ({ ...e, scope: "self" }))}
        />
      </div>
      <div className='step2'>
        <div className='step-title'>2. Where is this going?</div>
        <Row>
          <Col offset={1}>
            <Form.Label>Recipient First Name</Form.Label>
            <span className={cn("error-label", { show: errors?.firstName })}>
              {errors?.firstName}
            </span>
            <Form.Control
              className={cn({
                "is-invalid": errors?.firstName,
              })}
              name='firstName'
              placeholder='John'
              disabled={load}
              onChange={e =>
                setValues(v => ({ ...v, firstName: e.target.value }))
              }
            />
          </Col>
          <Col>
            <Form.Label>Recipient Last Name</Form.Label>
            <span className={cn("error-label", { show: errors?.lastName })}>
              {errors?.lastName}
            </span>
            <Form.Control
              className={cn({ "is-invalid": errors?.lastName })}
              name='lastName'
              placeholder='Doe'
              disabled={load}
              onChange={e =>
                setValues(v => ({ ...v, lastName: e.target.value }))
              }
            />
          </Col>
        </Row>
        <div className='email-field-wrapper'>
          <Form.Label>Recipient Email</Form.Label>
          <span className={cn("error-label", { show: errors?.email })}>
            {errors?.email}
          </span>
          <Form.Control
            className={cn({ "is-invalid": errors?.email })}
            name='email'
            type='email'
            placeholder='name@website.com'
            disabled={load}
            onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
          />
        </div>
      </div>
      <Button type='submit' disabled={load}>
        {load && (
          <Spinner
            as='span'
            animation='border'
            size='sm'
            role='status'
            aria-hidden='true'
          />
        )}
        {"  Checkout"}
      </Button>
      <Banner className='on-form' text={bannerText} />
    </Form>
  );
};

export default PaymentForm;
