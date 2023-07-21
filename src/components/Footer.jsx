import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img src={logo} alt="hoobank" className="w-64 h-16 object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map(({ title, links }) => (
          <div key={title} className={`flex flex-col ss:my-0 my-4 min-w-36`}>
            <h4 className="font-poppins font-medium text-lg text-white">
              {title}
            </h4>
            <ul className="list-none mt-4">
              {links.map(({ name }, index) => (
                <li
                  key={name}
                  className={`font-poppins font-normal text-normal text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-lg text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map(({ id, icon, link }, index) => (
          <img
            key={id}
            src={icon}
            alt={id}
            className={`w-6 h-6 object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
