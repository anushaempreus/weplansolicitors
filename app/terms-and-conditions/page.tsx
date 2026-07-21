import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms of use for the WEPlan Solicitors website, including disclaimers, intellectual property, liability and jurisdiction.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <section className="legal-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Terms and Conditions</h1>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <h2>Terms binding</h2>
          <p>
            By accessing and using this website, you agree to be bound by and
            observe these terms of use, as varied from time to time (Terms).
          </p>

          <h2>Suspension or termination of access</h2>
          <p>
            Glomb Solicitors Pty Limited trading as WEPlan Solicitors (in the
            following WEPlan Solicitors, we, our or us) reserves the right to
            suspend or terminate access to this Website at its absolute
            discretion, at any time.
          </p>

          <h2>Not legal advice</h2>
          <p>
            Content on this web site, and any publications referred to, is
            provided as general guidance and information only. It is not intended
            to nor does it constitute legal advice and must not be relied upon. No
            person should rely on, act or refrain from acting on the basis of the
            material on this web site.
          </p>
          <p>
            Content on this web site may contain errors and omissions and is
            subject to change. WEPlan Solicitors makes no warranties and accepts
            no responsibility for any loss, cost or damage you may suffer as a
            result or your reliance on any part of this web site (including any as
            to the quality, accuracy, completeness or fitness for any particular
            purpose of such material) or in relation to any material of a third
            party.
          </p>
          <p>
            You should seek professional legal advice before acting or relying on
            any information on this web site, any publications on this web site,
            or any other publications referred to.
          </p>
          <p>
            Your access to and your use of this web site does not, of itself, give
            rise to a relationship of lawyer and client.
          </p>

          <h2>No endorsement</h2>
          <p>
            In this web site, any frames, links or other references to other web
            sites, persons or information are produced solely for convenience.
            Those references are not an endorsement of those parties or their
            products or services. WEPlan Solicitors does not warrant the accuracy
            or suitability of any information contained in this or any other web
            site.
          </p>
          <p>
            WEPlan Solicitors is not responsible for the operation, security
            levels, content or any other aspect of any third party websites.
          </p>

          <h2>No warranty and limitation of liability</h2>
          <p>
            WEPlan Solicitors gives no warranty or representations about this web
            site, any content on this website, or any content referred to on this
            website.
          </p>
          <p>
            WEPlan Solicitors gives no warranty or representations that the files
            contained in or referred to in this web site are secure, free of
            viruses, malware, corruption or other defects or security issues.
          </p>
          <p>
            To the maximum extent permitted under law, WEPlan Solicitors excludes
            any and all liability which may arise directly or indirectly in
            connection with the use of this web site, its content, or any other
            information referred to. You agree that we will not be liable for, and
            expressly release us from, any direct, indirect, consequential,
            special punitive or other loss, damage, cost or other liability
            whatsoever (including through negligence) arising out of, or in
            connection with, the use of this web site, its contents, or any
            information referred to, including as a result of damage to your or
            another person&apos;s computer system or the transmission of any
            computer viruses, malware, corruption or other defect or security
            issues.
          </p>
          <p>
            In the event liability cannot, by law, be excluded, the liability of
            WEPlan Solicitors will be limited to the lesser of removing or
            replacing the defective file, or as provided for under the Competition
            and Consumer Act 2010 (Cth).
          </p>
          <p>
            You indemnify and agree to keep us indemnified against any loss or
            damage or costs incurred by us in connection with your breach of these
            Terms, any other legal obligation by you, and your use of or conduct
            on this web site.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Our compliance with privacy legislation is set out in our separate{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          <h2>Intellectual property</h2>
          <p>
            This web site contains intellectual property (including trademarks,
            confidential information and copyright, together with any goodwill,
            reputation, moral rights, and intellectual property rights).
          </p>
          <p>
            Any intellectual property on this web site is owned by WEPlan
            Solicitors or third parties.
          </p>
          <p>
            Unless required under law, you must not copy, reproduce, transmit,
            display or otherwise distribute any intellectual property on this web
            site, in whole or in part, without first obtaining our prior written
            consent.
          </p>

          <h2>Comments</h2>
          <p>
            You must not post any comments on this web site where there is a
            possibility of that comment being harmful, defamatory, illegal or
            otherwise objectionable.
          </p>
          <p>
            By uploading, transmitting, posting or otherwise making available any
            comments you:
          </p>
          <ul>
            <li>
              grant us a non-exclusive, worldwide, royalty-free, perpetual, licence
              to use, reproduce, edit and/or exploit such comments for any
              commercial or non-commercial purpose;
            </li>
            <li>
              warrant that in providing your comments will not have breached any
              laws or regulations or these Terms; and
            </li>
            <li>
              you give your unconditional and irrevocable consent to any act by us
              which would otherwise, but for your consent, infringe your moral
              rights (as defined by the Copyright Act 1968) which you may have in
              respect of your comments.
            </li>
          </ul>
          <p>We reserve the right (but have no obligation) to:</p>
          <ul>
            <li>
              prevent the upload, transmission, posting or otherwise making
              available any comment;
            </li>
            <li>
              review, modify, reformat, reject or remove any comments uploaded,
              posted, transmitted or otherwise made available through this web site
              that, in our opinion, violates these Terms or otherwise has the
              potential to harm, endanger or violate the rights of any person; and
            </li>
            <li>
              monitor the use of this web site, and store or disclose any
              information that we collect, including in order to investigate
              compliance with these Terms or for the purposes of any police
              investigation or governmental request.
            </li>
          </ul>
          <p>
            You agree to accept full responsibility for any comment you upload,
            post, transmit or otherwise make available on this web site and you
            agree that we will not be liable for any such comment uploaded,
            posted, transmitted or otherwise made available on this web site.
          </p>
          <p>You must not post comments containing links or references to other services.</p>
          <p>
            We are not to be taken as having endorsed any opinion, advice or
            statement made by you.
          </p>

          <h2>Jurisdiction</h2>
          <p>
            These Terms of Access are governed by the laws in force of the
            Australian Capital Territory, Australia.
          </p>
          <p>
            You agree to submit to the non-exclusive jurisdiction of the Courts of
            the Australian Capital Territory, Australia in respect to any claim
            made by either party against the other which in any way arises out of
            these Terms.
          </p>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
}
