import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How WEPlan Solicitors collects, uses, stores and protects your personal, financial and sensitive information under the Australian Privacy Principles.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <section className="legal-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Our commitment to protecting your privacy and personal information</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <p>WEPlan Solicitors is committed to protecting your privacy.</p>
          <p>
            This page sets out our privacy policy in respect of any personal,
            financial and sensitive information collected about you, and what we
            may do with that information.
          </p>
          <p>
            Any personal, financial and sensitive information that we collect
            about you will only be used in the manner permitted by law. Our
            commitment in respect of personal, financial and sensitive information
            is to abide by the Australian Privacy Principles for the protection of
            personal information, as set out in the Privacy Act.
          </p>
          <p>
            In addition, WEPlan Solicitors is bound by legal obligations of
            confidentiality and legal professional privilege. We will continue to
            treat and protect information we receive in accordance with these
            obligations.
          </p>

          <h2>Personal information</h2>
          <p>Personal information means information which can be used to identify you.</p>
          <p>
            Personal information we collect or hold about you may include your
            name, date of birth, address, contact details, account details,
            occupation, and any other information we may need to identify you or
            provide our services. It may also include an opinion about you,
            sensitive information or financial or credit information.
          </p>
          <p>
            We may collect personal information from you directly, or via your use
            of our services. We will only collect personal information, which is
            reasonably necessary for, or directly related to, our functions and
            activities (unless the collection of personal information is required
            or authorised by or under any Australian law or a court order).
          </p>

          <h2>Financial information</h2>
          <p>
            We may collect and hold financial information. The kinds of
            information that we collect or hold about you may include details of
            your assets and liabilities and financial structures connected to you,
            for example details of companies and trusts. If we collect or hold
            financial information, we do so to assist in the preparation of your
            documents (unless the collection of financial information is required
            or authorised by or under any Australian law or a court order).
          </p>

          <h2>Sensitive information</h2>
          <p>
            Sensitive information is any information about a person&apos;s racial
            or ethnic origin, political opinion, membership of a political
            association, religious beliefs or affiliations, philosophical beliefs,
            membership of a professional, or trade association, membership of a
            trade union, sexual preferences or practices, criminal record or
            health information.
          </p>
          <p>
            We will collect sensitive information with the relevant
            individual&apos;s consent (unless the collection of sensitive
            information is required or authorised by or under any Australian law
            or a court order) and where the collection is reasonably necessary.
          </p>

          <h2>Do we disclose your personal, financial and/or sensitive information?</h2>
          <p>
            We may disclose your personal, financial and/or sensitive information
            to the following parties:
          </p>
          <ul>
            <li>our professional and financial advisers;</li>
            <li>
              service providers for the purposes of providing services requested
              by us;
            </li>
            <li>
              our web hosting company, and other companies that provide
              information and infrastructure systems to us;
            </li>
            <li>anybody who represents you;</li>
            <li>any affiliated company;</li>
            <li>anyone you have given us consent to disclose such information; and/or</li>
            <li>
              the use or disclosure of the information is required or authorised by
              or under an Australian Law or court order.
            </li>
          </ul>
          <p>
            Before we disclose any personal, financial and/or sensitive
            information about you to another person or organisation, we will take
            all reasonable steps to satisfy ourselves that:
          </p>
          <ul>
            <li>
              (a) the person or organisation has a commitment to protecting your
              personal, financial and/or sensitive information at least equal to
              our commitment, or
            </li>
            <li>(b) you have consented to us making the disclosure.</li>
          </ul>
          <p>
            We may use &ldquo;cloud&rdquo; storage to store your information we
            hold about you. The cloud storage and the IT servers may be located
            outside Australia.
          </p>

          <h2>
            Accuracy, storage, security and destruction of personal, financial
            and/or sensitive information
          </h2>
          <p>
            We will take reasonable steps to protect your personal, financial and
            sensitive information by storing it in a secure environment. We may
            store your personal information in paper and electronic form. We will
            also take reasonable steps to protect such information from misuse,
            loss and unauthorised access, modification or disclosure.
          </p>
          <p>
            Any personal, financial and/or sensitive information that has not been
            used or disclosed for a period of seven (7) years will be securely
            destroyed, unless we are requested by or under any Australian law or a
            court order to keep such information for a longer period of time.
          </p>

          <h2>Updating your personal information</h2>
          <p>
            It is important that your personal information is accurate and up to
            date. We therefore ask you to inform us if any of your personal
            information has changed.
          </p>
          <p>
            Please contact us if you wish to make changes to your personal
            information.
          </p>

          <h2>Access and correction to your information</h2>
          <p>
            You may request access to any personal, financial and/or sensitive
            information that we hold about you at any time. We will endeavour to
            respond promptly following your request. However, we may need to
            contact other entities to properly investigate your request.
          </p>
          <p>
            There may be situations where we are not required to provide you with
            access to your personal information, for example, if the information
            relates to existing or anticipated legal proceedings, or if your
            request is vexatious.
          </p>

          <h2>Change in our privacy policy</h2>
          <p>We may change this privacy policy from time to time.</p>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
}
