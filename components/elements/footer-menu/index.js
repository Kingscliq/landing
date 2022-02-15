import React from 'react';

const FooterMenu = ({ children, title, className }) => {
  return (
    <section className={[className, 'mb-5 md:mb-0'].join(' ')}>
      <h2 className="text-md text-primary font-bold mb-5">
        {title || 'About'}
      </h2>
      <ul className="flex flex-col">{children}</ul>
    </section>
  );
};

export default FooterMenu;
