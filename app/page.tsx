import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

const services = [
  "Wills",
  "Testamentary Trust Wills",
  "Enduring Powers of Attorney",
  "Appointments of Enduring Guardians",
  "Binding Death Benefit Nominations and Supporting Minutes",
  "Parental Deeds of Loan",
  "Discretionary (Family) Trust with Tailored Terms",
  "Deeds of Removal/Appointment of Appointors and/or Trustees and/or Beneficiaries",
];

const enduringItems = [
  {
    q: "In the ACT",
    a: (
      <p>
        In the ACT an EPA allows you to nominate persons of your trust to deal
        with your financial, personal care, health care and medical research
        matters while you are living.
      </p>
    ),
  },
  {
    q: "In NSW",
    a: (
      <p>
        In NSW, an EPA allows you to nominate persons of your trust to deal with
        your financial matters and an AEG allows you to nominate persons to deal
        with your personal and health care matters while you are living.
      </p>
    ),
  },
  {
    q: "Is an EPA/AEG for you?",
    a: (
      <p>
        If you wish to decide who can deal with your affairs while you are
        living, but you are unable to make these decisions yourself (e.g., due to
        an accident, dementia or Alzheimer disease) then you should put an EPA
        (if you reside in the ACT) or an EPA and AEG (if you reside in NSW) in
        place.
      </p>
    ),
  },
  {
    q: "What happens if you do not have an EPA/AEG?",
    a: (
      <p>
        If you do not have an EPA/AEG in place, and decisions need to be made on
        your behalf it is necessary to file an application with the Guardianship
        Division of the ACT or NSW Civil and Administrative Tribunal, and the
        Tribunal will appoint a &lsquo;willing and able&rsquo; person as your
        financial manager and guardian. Kindly note the Tribunal may nominate a
        professional trustee company, like the Public Trustee as your financial
        manager. If the Tribunal appoints a family member, friend or other
        individual, he or she will be required to report to the Public Trustee at
        least once per year.
      </p>
    ),
  },
];

const trustItems = [
  {
    q: "What does this mean for you?",
    a: (
      <p>
        This means, your Will is not just 8 to 10 pages, but around 25 pages
        long. Under most Australian State and Territory jurisdictions a
        Testamentary Trust can exist for 80 years from the date of death of the
        Testator or Testatrix. In other words, multiple generations of your
        family can benefit from a Testamentary Trust.
      </p>
    ),
  },
  {
    q: "What are the main benefits of a Testamentary Trust?",
    a: (
      <>
        <p>
          A Testamentary Trust can provide the beneficiaries of the Trust with
          asset protection against their personal creditors and estranged
          spouses.
        </p>
        <p>
          A Testamentary Trust provides income splitting opportunities as well as
          tax concessions with regard to income distributions from the
          Testamentary Trust to a beneficiary who is a minor.
        </p>
      </>
    ),
  },
  {
    q: "Is a Testamentary Trust Will for you?",
    a: (
      <>
        <p>If you wish to provide your beneficiaries with</p>
        <ul>
          <li>Asset protection from &lsquo;creditors and predators&rsquo;; and/or</li>
          <li>Income splitting opportunities</li>
        </ul>
        <p>THEN a Testamentary Trust Will is an option for you.</p>
      </>
    ),
  },
];

const processItems = [
  {
    q: "What is the process to get your documents in place?",
    a: (
      <p>
        The process comprises an initial meeting, providing you with a summary
        letter of the discussions during the initial meeting in plain English
        together with draft documents and a signing meeting.
      </p>
    ),
  },
  {
    q: "What happens during the initial meeting?",
    a: (
      <>
        <p>
          During the initial meeting we will ask you a lot of questions to find
          out your estate planning wishes, concerns and objectives as well as
          your personal and financial circumstances. We do not ask all those
          questions because we are curious, but it helps us to understand the
          bigger picture and to provide you with options how you may structure
          your Will and other estate planning documents.
        </p>
        <p>
          We do not expect that you can answer all questions we will ask you
          during our initial meeting. Additional information, instructions and/or
          documents can be provided by you after the initial meeting.
        </p>
      </>
    ),
  },
  {
    q: "Do you need to bring any documents to the initial meeting?",
    a: (
      <>
        <p>The answer is NO.</p>
        <p>
          However if it is easy for you it would be helpful if you could bring
          the following documents to our initial meeting:
        </p>
        <ul>
          <li>Details of ownership of any real property you may own</li>
          <li>Most recent member statement of your superannuation fund</li>
          <li>
            If you are a member of a self-managed superannuation fund, copy of the
            current terms/rules of the Fund
          </li>
          <li>Details of any life insurance you may have</li>
          <li>
            Copy of the Deed establishing your family trust and any Deed of
            Amendment
          </li>
          <li>
            Copy of any Shareholder Agreement should you conduct a business via a
            company together with another person
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "What happens after the initial meeting?",
    a: (
      <p>
        We will provide you with a detailed written summary of our discussions
        during the initial meeting and, if you have provided us with sufficient
        instructions, drafts of your Will and other estate planning documents for
        your review. Naturally you can contact us should you have any queries
        regarding the summary letter and/or draft documents.
      </p>
    ),
  },
];

const NextStep = ({ duration }: { duration: string }) => (
  <div className="nextstep" data-reveal>
    <span className="eyebrow center">The Next Step</span>
    <h4>Let&apos;s arrange a meeting</h4>
    <p>
      Arrange a meeting at a location of your choosing. Meetings typically take{" "}
      {duration} and can be face-to-face or online.
    </p>
    <a href="#contact" className="btn">
      Make an Appointment
    </a>
  </div>
);

const whyCards = [
  { n: "01", title: "Experience", body: "We have over 25 years' experience in the area of Wills and Estate Planning." },
  { n: "02", title: "Specialists", body: "All we do is Wills and Estate Planning." },
  {
    n: "03",
    title: "Fixed Fee",
    body: "We work on a fixed fee basis so you can ask as many questions as often as you like without being scared that this will increase the bill amount.",
  },
  { n: "04", title: "24 / 7", body: "We have no nine to five policy — so we fit in your calendar (including the weekend)." },
  {
    n: "05",
    title: "Flexible",
    body: "You decide where we meet: at your home, your office, the office of any of your other professional advisers, or via Zoom or Teams (for the initial meeting only).",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Testamentary Trust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Testamentary Trust is similar to a discretionary (family) trust, but it becomes operative only upon your death. The terms of the Testamentary Trust — who controls it, who the beneficiaries are, and who receives the trust fund when it is wound up — are included in your Will, and you decide how flexible or fixed the terms are.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Enduring Power of Attorney / Appointment of Enduring Guardians?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The law applicable to enduring powers of attorney (EPA) and appointments of enduring guardians (AEG) is State law, so the documents you put in place differ between the States and Territories. In the ACT an EPA lets you nominate people to deal with your financial, personal care, health care and medical research matters while you are living; in NSW an EPA covers financial matters and an AEG covers personal and health care matters.",
      },
    },
    {
      "@type": "Question",
      name: "What is the process to get your documents in place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process comprises an initial meeting, a summary letter of the discussions in plain English together with draft documents, and a signing meeting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to bring any documents to the initial meeting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. However, if it is easy for you it can help to bring details of any real property, your most recent superannuation member statement, any self-managed super fund rules, life insurance details, your family trust deed and amendments, and any shareholder agreement.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <span id="top" />
      <Header />
      <Reveal />

      {/* Hero */}
      <section className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow" data-reveal>
              Wills &amp; Estate Planning Specialists
            </span>
            <h1 data-reveal data-delay="1">
              Kerstin Glomb <em>Wills and Estate Planning</em>
            </h1>
            <p className="hero-sub" data-reveal data-delay="2">
              Kerstin Glomb and team are the wills and estate planning
              specialists. Make an enquiry about your Will and estate planning
              today.
            </p>
            <div className="hero-actions" data-reveal data-delay="3">
              <a href="#contact" className="btn btn-lg">
                Enquire Now
              </a>
              <a href="tel:0448760662" className="btn btn-lg btn-outline">
                Call 0448 760 662
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          Scroll
          <span />
        </div>
      </section>

      {/* Trust bar */}
      <section className="trustbar">
        <div className="container">
          <div className="trust-item">
            <span className="t-num">25+</span>
            <span className="t-label">Years specialising in Wills &amp; Estate Planning</span>
          </div>
          <div className="trust-item">
            <span className="t-num">4</span>
            <span className="t-label">Jurisdictions served — ACT, NSW, QLD &amp; VIC</span>
          </div>
          <div className="trust-item">
            <span className="t-num">Fixed</span>
            <span className="t-label">Transparent fixed-fee pricing, no surprises</span>
          </div>
          <div className="trust-item">
            <span className="t-num">7 days</span>
            <span className="t-label">Flexible hours — face-to-face or online</span>
          </div>
        </div>
      </section>

      {/* Intro + 3 cards */}
      <section className="section intro">
        <div className="container">
          <div className="intro-head" data-reveal>
            <span className="eyebrow">WEPlan Solicitors</span>
            <h2>Estate planning that reflects your wishes</h2>
            <p className="lead">
              Our team ensures that your Will and estate plan reflects your
              wishes, objectives and needs. We are specialised in this area of
              law, because all we do is providing advice on Wills and estate
              planning.
            </p>
          </div>
          <div className="cards-3">
            {[
              { href: "#enduring", idx: "01", title: "Enduring Power of Attorney", img: "/images/Kerstin-Glomb.png" },
              { href: "#trust", idx: "02", title: "Testamentary Trust", img: "/images/3-generations-of-hands-stacked-small.jpg" },
              { href: "#process", idx: "03", title: "What is the process?", img: "/images/seniorhappycoupleshaking_90832.jpg" },
            ].map((c, i) => (
              <a
                key={c.href}
                href={c.href}
                className="card-img"
                style={{ backgroundImage: `url(${c.img})` }}
                data-reveal
                data-delay={i + 1}
              >
                <div className="card-body">
                  <span className="card-idx">{c.idx}</span>
                  <div className="card-title">{c.title}</div>
                  <span className="card-arrow">Learn more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section services">
        <div className="container">
          <div className="intro-head" data-reveal>
            <span className="eyebrow">Our Services</span>
            <h2>A specialised area of law</h2>
            <p className="lead">
              We only deal with Wills and estate planning. Take a look at the
              topics that fall into this specialised area.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <div className="svc" key={s} data-reveal data-delay={(i % 2) + 1}>
                <span className="svc-icon">
                  <DocIcon />
                </span>
                <div className="svc-text">
                  <span className="svc-n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo" data-reveal>
              <Image
                src="/images/Kerstin-Glomb-1.jpg"
                alt="Kerstin Glomb, Principal of WEPlan Solicitors"
                width={520}
                height={620}
              />
            </div>
            <div data-reveal data-delay="1">
              <span className="eyebrow">Our Team</span>
              <div className="about-name">Kerstin Glomb</div>
              <div className="about-role">Principal</div>
              <p>
                Kerstin Glomb is the principal of WEPlan Solicitors who has been
                practising in the area of Wills and Estate Planning for over 25
                years. During her practise, Kerstin has assisted clients of all
                shapes and sizes in the ACT, NSW, QLD and VIC including:
              </p>
              <details className="reveal-details">
                <summary>View Kerstin&apos;s Client Groups</summary>
                <ul className="client-list">
                  <li>clients with complex personal circumstances (blended families)</li>
                  <li>
                    clients who wish to provide asset protection and/or tax
                    flexibility for their beneficiaries
                  </li>
                  <li>
                    clients with children who require a high level of protection,
                    e.g., children with a disability or children who have an
                    addiction or children who are easily manipulated
                  </li>
                  <li>
                    clients with complex financial circumstances (group of
                    companies, family trusts, self-managed superannuation fund)
                  </li>
                  <li>
                    clients in high risk professions (e.g., medical practitioners,
                    clients acting as directors of companies).
                  </li>
                </ul>
              </details>
              <p>
                Kerstin has been described by her clients as diligent, patient and
                making the estate planning process as easy as possible. Kerstin
                uses plain English and drawings during the meetings to make it
                easier for her clients to become aware of and address all issues
                of their estate planning, find out about different options to
                address their estate planning objectives and to make informed
                decisions.
              </p>
              <p>
                For Kerstin there are no silly questions and she encourages you to
                ask any question as often as you like, because it is most
                important for her that at the time of signing your documents, you
                understand them and the documents reflect your wishes, objectives
                and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enduring Power of Attorney */}
      <section id="enduring" className="section topic light">
        <div className="container">
          <div className="topic-head" data-reveal>
            <span className="eyebrow center">Enduring Power of Attorney</span>
            <h2>What is an Enduring Power of Attorney / Appointment of Enduring Guardians?</h2>
            <p className="lead">
              The law applicable to enduring powers of attorney (EPA) and
              appointments of enduring guardians (AEG) is State law. This means
              the documents you put into place differ between the States and
              Territories.
            </p>
          </div>
          <div data-reveal>
            <Accordion items={enduringItems} />
          </div>
          <NextStep duration="1hr" />
        </div>
      </section>

      {/* Testamentary Trust */}
      <section id="trust" className="section topic dark">
        <div className="container">
          <div className="topic-head" data-reveal>
            <span className="eyebrow center on-dark">Testamentary Trust</span>
            <h2>What is a Testamentary Trust?</h2>
            <p className="lead">
              A Testamentary Trust is similar to a discretionary (family) trust,
              but a Testamentary Trust becomes operative only upon your death. The
              terms of the Testamentary Trust (e.g., who controls it, who are the
              beneficiaries, who receives the trust fund when the trust is wound
              up) are included in your Will and you decide how flexible or fixed
              the terms are.
            </p>
          </div>
          <div data-reveal>
            <Accordion items={trustItems} />
          </div>
          <NextStep duration="1.5hrs" />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section topic light">
        <div className="container">
          <div className="topic-head" data-reveal>
            <span className="eyebrow center">Our Process</span>
            <h2>We&apos;re here to help you through it</h2>
            <p className="lead">
              We&apos;re here to help you through the process. Take a look at some
              frequently asked questions.
            </p>
          </div>
          <div data-reveal>
            <Accordion items={processItems} />
          </div>
          <NextStep duration="1hr" />
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="section why">
        <div className="container">
          <div className="why-head" data-reveal>
            <span className="eyebrow center">Why Choose Us</span>
            <h2>Experience, fixed fees &amp; flexibility</h2>
            <p className="lead">
              We provide experience, fixed fees, flexible hours and meeting
              options.
            </p>
          </div>
          <div className="why-grid">
            {whyCards.map((c, i) => (
              <div className="why-card" key={c.n} data-reveal data-delay={(i % 3) + 1}>
                <span className="why-n">{c.n}</span>
                <div className="why-title">{c.title}</div>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-grid">
            <div data-reveal>
              <span className="eyebrow on-dark">Get In Touch</span>
              <h2>We look forward to hearing from you</h2>
              <p className="lead">
                Our team is ready to meet with you to discuss your wishes,
                concerns and objectives. We like to make it as easy as possible
                for you, therefore we are happy to meet face-to-face, at a
                location of your choosing, or online via Zoom or Teams.
              </p>
              <div className="contact-info">
                <a href="tel:0448760662">
                  <span>
                    <span className="ci-label">Call us</span>
                    <span className="ci-val">0448 760 662</span>
                  </span>
                </a>
                <a href="mailto:kerstin@wpsolicitors.au">
                  <span>
                    <span className="ci-label">Email us</span>
                    <span className="ci-val">kerstin@wpsolicitors.au</span>
                  </span>
                </a>
              </div>
            </div>
            <div data-reveal data-delay="1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
}
