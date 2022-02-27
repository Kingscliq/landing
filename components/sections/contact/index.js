import Image from 'next/image';
import React from 'react';
import { facebook, linkedIn, mail, map, twitter } from '../../../assets/icons';
import { contactArea } from '../../../assets/images';
import Button from '../../elements/button';
import CheckBox from '../../elements/checkbox';
import ContactInfo from '../../elements/contact-info';
import Input from '../../elements/input';
import { SmallText, Subheading } from '../../elements/text';
import TextArea from '../../elements/textarea';

import { useForm, Controller } from 'react-hook-form';

const Contact = () => {
  // const {handleSubmit, error, } = useForm();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    // reValidateMode: 'onChange'
  });

  // <Controller
  // name={`TermsAndConditions`}
  // control={control}
  // rules={{
  //   required: {
  //     value: true,
  //     message: 'Please accept the terms and conditions'
  //   }
  // }}
  // render={({ field: { value, onChange, name } }) => (
  //   <input
  //     type='checkbox'
  //     name={name}
  //     value={value}
  //     onChange={(e) => onChange(e.target.checked)}/>

  // const onSubmit = data => console.log(data);

  return (
    <section className="bg-white px-0 md:px-16">
      <div className="grid grid-cols-1 h-auto md:grid-cols-3 md:h-[40.125rem] container md:gap-10 items-center ">
        <div
          className="col-span-1 bg-contact bg-cover h-[40.125rem] mb-16 md:mb-auto px-10 flex items-start flex-col justify-between"
          data-aos="flip-right"
        >
          <div>
            <Subheading className="text-white mt-20 mb-5">
              Contact us today
            </Subheading>
            <SmallText className="text-white mb-16">
              Fill up the form and our team will get back to you within 24
              hours.
            </SmallText>
            <div>
              <div className="mb-[42px]">
                <ContactInfo info="+234 902 092 4600" />
              </div>
              <div className="mb-[42px]">
                <ContactInfo info="mobileforms@crowdforce.io" icon={mail} />
              </div>
              <div className="mb-[42px]">
                <ContactInfo
                  info="Plot 265, S.E. Asebe Street, Abuja"
                  icon={map}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-11">
            <div>
              <Image src={linkedIn} />
            </div>
            <div className="ml-[39px]">
              <Image src={facebook} />
            </div>
            <div className="ml-[39px]">
              <Image src={twitter} />
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <form
              onSubmit={handleSubmit(data => {
                console.log(data);
                console.log(errors);
              })}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4">
                <Controller
                  name="firstname"
                  defaultValue={''}
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Firstname is Required',
                    },
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <Input
                      label="Firstname"
                      placeholder="Enter First Name"
                      error={errors?.firstname}
                      required
                      onChange={e => onChange(e)}
                      name={name}
                      value={value}
                      inputRef={ref}
                      message={errors?.firstname?.message}
                    />
                  )}
                />
                <Controller
                  name="lastname"
                  defaultValue={''}
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Lastname is Required',
                    },
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <Input
                      label="Lastname"
                      placeholder="Enter Last Name"
                      error={errors?.lastname}
                      required
                      onChange={e => onChange(e)}
                      name={name}
                      value={value}
                      inputRef={ref}
                    />
                  )}
                />
                <Controller
                  name="email"
                  defaultValue={''}
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <Input
                      label="Email"
                      placeholder="Ex: name@domain.com"
                      error={errors?.email}
                      required
                      onChange={e => onChange(e)}
                      name={name}
                      value={value}
                      type="email"
                      inputRef={ref}
                      message={errors?.email?.message}
                    />
                  )}
                />

                <Controller
                  name="phone"
                  defaultValue={''}
                  control={control}
                  rules={{
                    value: true,
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <Input
                      label="Phone Number"
                      placeholder="Enter Phone Number"
                      required
                      onChange={e => onChange(e)}
                      name={name}
                      value={value}
                      type="number"
                      inputRef={ref}
                    />
                  )}
                />
              </div>
              <SmallText className="text-primary font-bold mt-0 md:mt-6 mb-5">
                How can we help?
              </SmallText>
              <div className="grid grid-cols-1 md:grid-cols-3 mt-0 md:mt-6">
                <Controller
                  name="generalInfo"
                  defaultValue={false}
                  control={control}
                  rules={{
                    value: true,
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <CheckBox
                      label="General Information"
                      className="mb-4 md:mb-auto"
                      id="genInfo"
                      htmlFor="genInfo"
                      value={value}
                      onChange={e => onChange(e.target.checked)}
                      name={name}
                      checkref={ref}
                    />
                  )}
                />
                <Controller
                  name="priceInfo"
                  control={control}
                  rules={{
                    value: true,
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <CheckBox
                      label="Pricing Information "
                      className="mb-4 md:mb-auto"
                      id="priceInfo"
                      htmlFor="priceInfo"
                      value={value}
                      onChange={e => onChange(e.target.checked)}
                      name={name}
                      checkref={ref}
                    />
                  )}
                />
                <Controller
                  name="demo"
                  control={control}
                  rules={{
                    value: true,
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <CheckBox
                      label="Book a live Demo"
                      id="demo"
                      htmlFor="demo"
                      value={value}
                      onChange={e => onChange(e.target.checked)}
                      name={name}
                      checkref={ref}
                    />
                  )}
                />
              </div>
              <div className="mt-6">
                <Controller
                  name="message"
                  defaultValue={''}
                  control={control}
                  rules={{
                    value: true,
                    required: {
                      value: true,
                      message: 'oops! message is required',
                    },
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <TextArea
                      label="Message"
                      value={value}
                      onChange={onChange}
                      ref={ref}
                      error={errors?.message}
                      message={errors?.message.message}
                    />
                  )}
                />
              </div>

              <SmallText className="text-primary font-bold mt-0 md:mt-6 mb-5">
                Prefered method of communication
              </SmallText>
              <div className="grid grid-cols-3 md:grid-cols-6 mt-0 md:mt-6">
                <Controller
                  name="phoneSelected"
                  defaultValue={''}
                  control={control}
                  rules={{
                    value: true,
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <CheckBox
                      label="Phone"
                      className="mb-4 md:mb-auto"
                      id="phone-check"
                      htmlFor="phone-check"
                      value={value}
                      onChange={e => onChange(e.target.checked)}
                      name={name}
                      checkref={ref}
                    />
                  )}
                />
                <Controller
                  name="EmailSelected"
                  defaultValue={''}
                  control={control}
                  rules={{
                    value: true,
                  }}
                  render={({ field: { value, onChange, name, ref } }) => (
                    <CheckBox
                      label="Email"
                      className="mb-4 md:mb-auto"
                      id="email-check"
                      htmlFor="email-check"
                      value={value}
                      onChange={e => onChange(e.target.checked)}
                      name={name}
                      checkref={ref}
                    />
                  )}
                />
              </div>
              <Button label="Submit" type="submit" className="mt-6" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
