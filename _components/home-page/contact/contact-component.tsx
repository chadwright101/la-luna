"use client";

import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";
import ContactFormComponent from "./contact-form-component";
import SectionHeading from "@/_lib/utils/section-heading";
import MapComponent from "./map-component";
import LayoutWrapper from "@/_lib/utils/layout-wrapper";
import SocialIcons from "@/_components/ui/social-icons";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ContactComponent = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    >
      <section>
        <LayoutWrapper cssClasses="grid gap-8 tablet:gap-10 tablet:grid-cols-2">
          <SectionHeading cssClasses="tablet:col-span-2">
            Contact
          </SectionHeading>
          <div className="grid gap-8 place-self-start w-full">
            <div className="grid gap-8 tablet:gap-3">
              <div className="grid gap-2 tablet:grid-cols-[75px_1fr] justify-items-start">
                <h3 className="text-subheading">Email:</h3>
                <ShowEmailAddress />
              </div>
              <div className="grid gap-2 tablet:grid-cols-[75px_1fr] justify-items-start">
                <h3 className="text-subheading">Phone:</h3>
                <ShowPhoneNumber />
              </div>
              <SocialIcons black cssClasses="tablet:mt-5 desktop:mt-0" />
            </div>
            <ContactFormComponent />
          </div>
          <MapComponent cssClasses="w-full aspect-square tablet:aspect-auto" />
        </LayoutWrapper>
      </section>
    </GoogleReCaptchaProvider>
  );
};

export default ContactComponent;
