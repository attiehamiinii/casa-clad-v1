import React from "react";
import services3Data from "../../data/services3.json";
import Link from "next/link";
import { NextSeo, BreadcrumbJsonLd, FAQPageJsonLd } from "next-seo";
const Services3 = ({ bigTitle, grid }) => {
  return (
    <>
        <NextSeo
        title="CasaClad | ACM Panel Installation"
        description="Certified ACM cladding installers serving Toronto & GTA. Supply, fabrication, installation, and maintenance. Request a free quote."
        canonical="https://casaclad.ca/services"
        openGraph={{
          url: "https://casaclad.ca/services",
          title: "CasaClad | ACM Panel Installation",
          description:
            "ACM (Aluminum Composite) cladding specialists for commercial & residential projects in Toronto.",
         
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: "Home", item: "https://casaclad.ca/" },
          { position: 2, name: "Services", item: "https://casaclad.ca/services" },
          { position: 3, name: "ACM Panel Installation", item: "https://casaclad.ca/services" },
        ]}
      />

      {/* Service schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ACM Panel Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "CasaClad",
              "areaServed": ["Toronto", "Thornhill", "Markham", "Vaughan", "Richmond Hill", "GTA"],
              "url": "https://casaclad.ca"
            },
            "serviceType": "Aluminum Composite Panel (ACM) cladding installation",
            "areaServed": { "@type": "AdministrativeArea", "name": "Toronto" }
          }),
        }}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "How long does ACM panel installation take?",
            acceptedAnswerText:
              "Small storefronts can be completed in 1–2 weeks; larger commercial projects vary by scope.",
          },
          {
            questionName: "Do you supply and install ACM panels?",
            acceptedAnswerText:
              "Yes. We provide full-service supply, fabrication, and installation with warranties.",
          },
          {
            questionName: "Which areas do you serve?",
            acceptedAnswerText:
              "Toronto, Thornhill, North York, Richmond Hill, Markham, Vaughan, and the GTA.",
          },
        ]}
      />
         <section
    id="services"
    className={`${!grid ? "services" : "services-grid"} section-padding ${
        !grid ? "bg-gray" : "pt-0"
      } `}
    >
      <div className="container">
        {!bigTitle ? (
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  Best Features
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Services
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center">
            <h3>Best Features.</h3>
            <div className="tex-bg">Services</div>
          </div>
        )}

        <div className="row">
          {services3Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className={item.icon} style={{
                  width: "50px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}> 
                  <img src={item.icon} alt={item.title} />
                </span>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.content}</p>
                <Link href={item.link}>
                  <a className={`more ${!grid ? "custom-font" : ""} mt-30`}>
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
 
};

export default Services3;
