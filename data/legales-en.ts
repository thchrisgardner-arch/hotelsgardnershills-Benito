/**
 * English version of the legal texts (draft, 2026-11-20). Mirrors data/legales.ts.
 * ⚠ Pending from the client: company name, tax ID (NIT), RNT number, address, final check-in/out times
 * and cancellation policy. To be reviewed by a lawyer before publishing.
 */
import { site } from "@/data/site";
import type { Seccion } from "@/components/layout/LegalPage";

export const UPDATED = "20 November 2026";

const responsible = `Gardners Hills (company name and tax ID to be confirmed), a cabin hotel located in San Benito Abad, Sucre, Colombia. Email: ${site.contact.email}. Phone and WhatsApp: ${site.contact.whatsappLabel}.`;

export const terms: { intro: string; secciones: Seccion[] } = {
  intro:
    "These terms govern the use of this website and accommodation bookings at Gardners Hills. By browsing the site or requesting a booking, you accept what is set out below.",
  secciones: [
    { titulo: "Who we are", parrafos: [responsible, "Tourism service provider registered in Colombia’s National Tourism Registry (RNT number to be confirmed)."] },
    {
      titulo: "Use of the site",
      parrafos: [
        "The purpose of the site is to provide information about the hotel, its cabins and services, and to make booking requests easier. You agree to use it lawfully and not to interfere with how it works.",
        "Photographs, texts, logos and designs belong to Gardners Hills or are used with permission. They may not be reproduced without written consent.",
      ],
    },
    {
      titulo: "Booking requests",
      parrafos: [
        "Requests sent through the site (form, email or WhatsApp) are not confirmed bookings. A booking is confirmed when Gardners Hills confirms it in writing and, where applicable, the agreed deposit has been received.",
        "The confirmation states the cabin, dates, number of guests, total rate including taxes and the payment and cancellation terms.",
      ],
    },
    {
      titulo: "Rates and payments",
      parrafos: [
        "Rates are shown in Colombian pesos (COP) and include applicable taxes unless stated otherwise. They may vary with season, availability and length of stay.",
        "Non-resident foreign guests may be exempt from VAT on accommodation under current regulations, upon presenting the corresponding immigration documents.",
      ],
    },
    {
      titulo: "Cancellations and changes",
      parrafos: [
        "Cancellation terms depend on the rate and season and are communicated before the booking is confirmed. As a general rule, date changes are subject to availability.",
        "Where the law allows it, the right of withdrawal will be exercised under Colombia’s Consumer Statute (Law 1480 of 2011).",
      ],
    },
    {
      titulo: "Arrival, departure and stay",
      lista: [
        "Check-in from 3:00 pm and check-out until 12:00 pm (provisional times; confirmed with the booking).",
        "All guests, including minors, must present an identity document on arrival, as required by Colombian law.",
        "Minors must stay with their parents or with an adult authorised in writing.",
        "Each cabin’s capacity is the one shown on its page and may not be exceeded.",
        "Gardners Hills is a place for rest: please respect the quiet of the other cabins, especially at night.",
        "Smoking is not allowed inside the cabins.",
      ],
    },
    {
      titulo: "Liability",
      parrafos: [
        "Guests are responsible for any damage they cause to the cabins or facilities. Gardners Hills is not responsible for valuables not kept in the safe.",
        "Information on the site is carefully reviewed but may contain errors or change without notice. What is confirmed in writing in the booking prevails over what is published.",
      ],
    },
    {
      titulo: "Protection of minors",
      parrafos: [
        "Gardners Hills rejects the exploitation, pornography, sex tourism and any form of sexual abuse of children and adolescents, in compliance with Colombian Law 679 of 2001 and Law 1336 of 2009. Any case will be reported to the authorities.",
      ],
    },
    { titulo: "Requests, complaints and claims", parrafos: [`You can send requests, complaints, claims or suggestions to ${site.contact.email}. We will reply within the legal time limits.`] },
    { titulo: "Applicable law", parrafos: ["These terms are governed by the laws of the Republic of Colombia."] },
  ],
};

export const privacy: { intro: string; secciones: Seccion[] } = {
  intro:
    "At Gardners Hills we look after your data with the same care we put into your stay. This policy explains what data we collect, what we use it for and how you can exercise your rights, under Colombian Law 1581 of 2012 and Decree 1377 of 2013.",
  secciones: [
    { titulo: "Data controller", parrafos: [responsible] },
    {
      titulo: "Data we collect",
      lista: [
        "Identification and contact data: name, ID document, email, phone and country.",
        "Booking data: dates, number of guests, preferences and special requests.",
        "Payment data, processed by the corresponding financial institutions or payment gateways.",
        "Browsing data collected through cookies, as described in the Cookie policy.",
      ],
    },
    {
      titulo: "What we use it for",
      lista: [
        "Handling requests, bookings, payments and invoicing.",
        "Meeting legal obligations, such as guest registration and reports to migration and tourism authorities.",
        "Responding to requests, complaints and claims.",
        "Sending you information and offers from Gardners Hills, only if you authorise it. You can withdraw that authorisation at any time.",
        "Improving the website and our services.",
      ],
    },
    {
      titulo: "Your rights",
      parrafos: ["As the data subject you can:"],
      lista: [
        "Access, update and correct your data.",
        "Request proof of the authorisation you gave.",
        "Be informed about how your data is used.",
        "Withdraw your authorisation or request deletion of your data when there is no legal duty to keep it.",
        "File complaints with Colombia’s Superintendence of Industry and Commerce.",
      ],
    },
    {
      titulo: "How to exercise them",
      parrafos: [`Write to ${site.contact.email} stating your name, ID document and request. Enquiries are answered within ten (10) business days and claims within fifteen (15) business days, as required by law.`],
    },
    {
      titulo: "Who we share your data with",
      parrafos: [
        "Only with providers that help us deliver the service (for example booking, payment, email or messaging platforms) and with authorities when required by law. These providers may be located outside Colombia; in that case we require adequate levels of protection.",
      ],
    },
    { titulo: "Retention and security", parrafos: ["We keep data for as long as needed for the purposes described and for the periods required by law. We apply reasonable technical and administrative measures to protect it."] },
    { titulo: "Changes to this policy", parrafos: ["We may update this policy. The version in force is always the one published on this site, with its update date."] },
  ],
};

export const cookiesEn: { intro: string; secciones: Seccion[] } = {
  intro: "This site uses cookies: small files stored in your browser. Here we explain which ones we use and how you can manage them.",
  secciones: [
    {
      titulo: "Necessary cookies",
      parrafos: ["They make the site work and remember your preferences, such as whether you have seen the intro animation and your cookie choice. They do not require your consent."],
      lista: ["gh-intro-seen: avoids repeating the intro animation during the same visit.", "gh-cookies: your choice in the cookie notice."],
    },
    {
      titulo: "Analytics cookies",
      parrafos: ["They are only enabled if you accept them. They help us understand, in aggregate, how many people visit the site and which pages they view. We may use Google Analytics; in that case Google processes the data under its own policy."],
    },
    {
      titulo: "How to manage them",
      parrafos: ["You can accept or reject analytics cookies in the notice shown on your first visit. To change your choice, clear the site’s cookies and data in your browser settings and visit again."],
    },
    { titulo: "More information", parrafos: [`If you have questions about cookies or your data, write to ${site.contact.email}.`] },
  ],
};
