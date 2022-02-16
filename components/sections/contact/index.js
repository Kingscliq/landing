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

const Contact = () => {
  console.log(contactArea);
  return (
    <section className="bg-white px-0 md:px-16">
      <div className="grid grid-cols-1 h-auto md:grid-cols-3 md:h-[40.125rem] container md:gap-10 items-center ">
        <div className="col-span-1 bg-contact bg-cover h-[40.125rem] mb-16 md:mb-auto px-10 flex items-start flex-col justify-between">
          {/* <div
          className={`col-span-1 bg-["url('${contactArea.src})"] bg-cover h-[40.125rem] mb-16 md:mb-auto px-10 flex items-start flex-col justify-between"`}
        > */}
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
                <ContactInfo />
              </div>
              <div className="mb-[42px]">
                <ContactInfo info="hello@crowdforce.io" icon={mail} />
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
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4">
                <Input
                  label="Firstname"
                  placeholder="Enter First Name"
                  error={true}
                />
                <Input label="Lastname" placeholder="Enter Last Name" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Ex: name@domain.com"
                />
                <Input
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  type="number"
                />
              </div>
              <SmallText className="text-primary font-bold mt-0 md:mt-6 mb-5">
                How can we help?
              </SmallText>
              <div className="grid grid-cols-1 md:grid-cols-3 mt-0 md:mt-6">
                <CheckBox
                  label="General Information"
                  className="mb-4 md:mb-auto"
                  id="genInfo"
                  htmlFor="genInfo"
                />
                <CheckBox
                  label="Pricing Information "
                  className="mb-4 md:mb-auto"
                  id="priceInfo"
                  htmlFor="priceInfo"
                />
                <CheckBox label="Book a live Demo" id="demo" htmlFor="demo" />
              </div>
              <div className="mt-6">
                <TextArea label="Message" />
              </div>

              <SmallText className="text-primary font-bold mt-0 md:mt-6 mb-5">
                Prefered method of communication
              </SmallText>
              <div className="grid grid-cols-3 md:grid-cols-6 mt-0 md:mt-6">
                <CheckBox
                  label="Phone"
                  className="mb-4 md:mb-auto"
                  id="phone-check"
                  htmlFor="phone-check"
                />
                <CheckBox
                  label="Email"
                  className="mb-4 md:mb-auto"
                  id="email-check"
                  htmlFor="email-check"
                />
              </div>
              <Button label="Submit" className="mt-6" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
