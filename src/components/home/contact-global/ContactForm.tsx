"use client";

import {
  useState,
  type FormEvent,
} from "react";

import {
  dialCodes,
  regions,
  requestedServices,
} from "./contactData";

import styles from "./ContactGlobalSection.module.css";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

export default function ContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [message, setMessage] = useState("");
  const [servicesError, setServicesError] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const selectedServices =
      formData.getAll("services");

    if (selectedServices.length === 0) {
      setServicesError(true);
      setStatus("error");
      setMessage(
        "Please select at least one service.",
      );
      return;
    }

    setServicesError(false);
    setStatus("submitting");
    setMessage("");

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      dialCode: formData.get("dialCode"),
      phone: formData.get("phone"),
      companyName: formData.get("companyName"),
      companyUrl: formData.get("companyUrl"),
      region: formData.get("region"),
      services: selectedServices,
      projectDetails:
        formData.get("projectDetails"),
      lookingForJob:
        formData.get("lookingForJob"),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error(
          "Submission could not be completed.",
        );
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Thank you! Your submission has been received.",
      );
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className={styles.formColumn}>
      <h2
        id="contact-global-heading"
        className={styles.formHeading}
      >
        Get In Touch
      </h2>

      <form
        className={styles.contactForm}
        onSubmit={handleSubmit}
      >
        <div className={styles.formField}>
          <label
            htmlFor="contact-full-name"
            className={styles.fieldLabel}
          >
            Full Name*
          </label>

          <input
            id="contact-full-name"
            name="fullName"
            type="text"
            className={styles.textInput}
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.formField}>
          <label
            htmlFor="contact-email"
            className={styles.fieldLabel}
          >
            Email*
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            className={styles.textInput}
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.formField}>
          <label
            htmlFor="contact-phone"
            className={styles.fieldLabel}
          >
            Phone Number*
          </label>

          <div className={styles.phoneField}>
            <select
              name="dialCode"
              className={styles.dialCodeSelect}
              aria-label="Country dial code"
              defaultValue="+1"
            >
              {dialCodes.map((dialCode) => (
                <option
                  key={dialCode.label}
                  value={dialCode.value}
                >
                  {dialCode.label}
                </option>
              ))}
            </select>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className={styles.phoneInput}
              placeholder="(201) 555-0123"
              autoComplete="tel"
              required
            />
          </div>
        </div>

        <div className={styles.formField}>
          <label
            htmlFor="contact-company"
            className={styles.fieldLabel}
          >
            Company Name*
          </label>

          <input
            id="contact-company"
            name="companyName"
            type="text"
            className={styles.textInput}
            autoComplete="organization"
            required
          />
        </div>

        <div className={styles.formField}>
          <label
            htmlFor="contact-company-url"
            className={styles.fieldLabel}
          >
            Company URL
          </label>

          <input
            id="contact-company-url"
            name="companyUrl"
            type="url"
            className={styles.textInput}
            placeholder="https://"
            autoComplete="url"
          />
        </div>

        <div className={styles.formField}>
          <label
            htmlFor="contact-region"
            className={styles.fieldLabel}
          >
            Region*
          </label>

          <select
            id="contact-region"
            name="region"
            className={styles.selectInput}
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Region
            </option>

            {regions.map((region) => (
              <option
                key={region}
                value={region}
              >
                {region}
              </option>
            ))}
          </select>
        </div>

        <fieldset
          className={styles.servicesFieldset}
          aria-describedby={
            servicesError
              ? "services-error"
              : undefined
          }
        >
          <legend className={styles.fieldLabel}>
            Services you are looking for*
          </legend>

          <div className={styles.servicesList}>
            {requestedServices.map(
              (service) => {
                const id = `service-${service
                  .toLowerCase()
                  .replaceAll(/[^a-z0-9]+/g, "-")}`;

                return (
                  <label
                    key={service}
                    htmlFor={id}
                    className={
                      styles.checkboxLabel
                    }
                  >
                    <input
                      id={id}
                      type="checkbox"
                      name="services"
                      value={service}
                      className={
                        styles.checkboxInput
                      }
                      onChange={() => {
                        setServicesError(false);
                      }}
                    />

                    <span
                      className={
                        styles.customCheckbox
                      }
                      aria-hidden="true"
                    />

                    <span>{service}</span>
                  </label>
                );
              },
            )}
          </div>

          {servicesError && (
            <p
              id="services-error"
              className={styles.fieldError}
            >
              Select at least one service.
            </p>
          )}
        </fieldset>

        <div className={styles.formField}>
          <label
            htmlFor="contact-project-details"
            className={styles.fieldLabel}
          >
            Project Details*
          </label>

          <textarea
            id="contact-project-details"
            name="projectDetails"
            className={styles.textareaInput}
            maxLength={5000}
            required
          />
        </div>

        <div className={styles.formField}>
          <label
            htmlFor="contact-job-interest"
            className={styles.fieldLabel}
          >
            I am looking for a job at Devsinc*
          </label>

          <select
            id="contact-job-interest"
            name="lookingForJob"
            className={styles.selectInput}
            defaultValue=""
            required
          >
            <option value="" disabled>
              Please Select
            </option>

            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Please wait..."
            : "Submit"}
        </button>

        {message && (
          <p
            className={[
              styles.formMessage,
              status === "success"
                ? styles.formMessageSuccess
                : styles.formMessageError,
            ].join(" ")}
            role="status"
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}