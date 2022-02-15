import Link from 'next/link';
import React from 'react';
import FooterMenu from '../../elements/footer-menu';
import { SmallText } from '../../elements/text';

const FooterOne = () => {
  return (
    <section className="container grid md:grid-cols-4 pt-28">
      <FooterMenu className="mb-5 md:mb-0">
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">Company</SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">Terms</SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Privacy Policy
          </SmallText>
        </Link>
      </FooterMenu>
      <FooterMenu title="Industry">
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Banks & Fintech
          </SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Field Agents
          </SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Government
          </SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Market Research
          </SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Non-Profits
          </SmallText>
        </Link>
      </FooterMenu>
      <FooterMenu title="Products">
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">Payforce</SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            MobileForms
          </SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Our Network
          </SmallText>
        </Link>
      </FooterMenu>
      <FooterMenu title="Resources">
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Help/Supports
          </SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Case Studies
          </SmallText>
        </Link>
        <Link href="/">
          <SmallText className="text-sm mb-3 text-primary">
            Developers
          </SmallText>
        </Link>
      </FooterMenu>
    </section>
  );
};

export default FooterOne;
