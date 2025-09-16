"use client";

import { useEffect, useState } from "react";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { sendEmail } from "@/_actions/send-email-actions";
import ButtonType from "@/_components/ui/buttons/button-type";

const ContactFormComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  return (
    <div className="bg-pink px-7 py-10 -mx-7 tablet:mx-0 tablet:py-5">
      {!showEmailSubmitted && (
        <p className="mb-8 text-white">
          Fill out the form below and our team will get back to you ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <p className="pb-5 text-white desktop:h-[450px]">
          Your email has been sent, we will be in touch soon.
        </p>
      ) : (
        <form
          className="flex flex-col gap-8"
          action={async (formData) => {
            try {
              setError(null);
              setIsSubmitting(true);

              if (!executeRecaptcha) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (!executeRecaptcha) {
                  setError(
                    "Security verification unavailable. Please refresh the page and try again."
                  );
                  return;
                }
              }

              const recaptchaToken = await executeRecaptcha("contact_form");
              formData.append("recaptchaToken", recaptchaToken);

              const result = await sendEmail(formData);

              if (result.success) {
                setShowEmailSubmitted(true);
              } else {
                setError(
                  result.error || "Failed to send message. Please try again."
                );
              }
            } catch (err) {
              setError("An unexpected error occurred. Please try again.");
              console.error("Contact form error:", err);
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          <input type="hidden" name="_honey" className="hidden" />
          <label
            htmlFor="emailAddress"
            className="grid gap-4 text-paragraph font-semibold text-white"
          >
            Email:
            <input
              type="email"
              id="emailAddress"
              name="email"
              className="bg-white px-4 py-3 rounded-md font-light text-black/75 border-none"
              autoComplete="email"
              required
            />
          </label>
          <label
            htmlFor="fullName"
            className="grid gap-4 text-paragraph font-semibold text-white"
          >
            Name:
            <input
              type="text"
              id="fullName"
              name="name"
              className="bg-white px-4 py-3 rounded-md font-light text-black/75 border-none"
              autoComplete="name"
              required
            />
          </label>
          <label
            htmlFor="phoneNumber"
            className="grid gap-4 text-paragraph font-semibold text-white"
          >
            Phone:
            <input
              type="tel"
              id="phoneNumber"
              name="phone"
              className="bg-white px-4 py-3 rounded-md font-light text-black/75 border-none"
              autoComplete="phone"
            />
          </label>

          {!showMessage ? (
            <ButtonType
              type="button"
              cssClasses="mt-4"
              onClick={() => setShowMessage(true)}
              colorBlack
            >
              Next
            </ButtonType>
          ) : (
            <>
              <label
                htmlFor="message"
                className="grid gap-4 text-paragraph font-semibold text-white"
              >
                Message:
                <textarea
                  id="message"
                  name="message"
                  className="bg-white px-4 py-3 rounded-md font-light text-black/75 border-none"
                  rows={5}
                  required
                ></textarea>
              </label>
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-md p-3">
                  <p className="text-[14px] text-red-600">{error}</p>
                </div>
              )}
              <ButtonType
                type="submit"
                cssClasses="mt-4"
                colorBlack
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </ButtonType>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactFormComponent;
