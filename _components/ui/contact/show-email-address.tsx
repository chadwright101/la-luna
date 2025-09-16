"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { fetchEmailAddress } from "@/_actions/contact-actions";
import { showContactProps } from "@/_types/general-types";

const ShowEmailAddress = ({ buttonClasses, linkClasses }: showContactProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowEmailAddress = async () => {
    setShowSpinnerEmail(true);

    try {
      let recaptchaToken: string | undefined;

      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("fetch_email");
      }

      const emailAddress =
        (await fetchEmailAddress(recaptchaToken)) || "Email not found";
      setShowEmail(emailAddress);
    } catch (error) {
      console.error("Error fetching email:", error);
      setShowEmail("Email not available");
    }

    setShowSpinnerEmail(false);
  };

  if (showEmail === "Show email address") {
    return (
      <button
        onClick={() => handleShowEmailAddress()}
        className={classNames(
          "px-2 text-left -mx-2 text-paragraph text-link-blue py-3 -my-3 leading-[125%] hover:tablet:opacity-80 hover:cursor-pointer desktop:p-0 desktop:m-0",
          buttonClasses
        )}
        aria-label="Show email address"
      >
        {showSpinnerEmail ? <div className="spinner"></div> : showEmail}
      </button>
    );
  } else {
    return (
      <Link
        href={`mailto:${showEmail}`}
        className={classNames(
          "px-2 text-left self-center -mx-2 text-paragraph py-3 -my-3 leading-[125%] hover:tablet:opacity-80 hover:cursor-pointer desktop:p-0 desktop:m-0",
          linkClasses,
          showEmail === "Email not available"
            ? "pointer-events-none text-black"
            : "text-link-blue"
        )}
      >
        {showEmail}
      </Link>
    );
  }
};

export default ShowEmailAddress;
