import { sanityFetch } from "@/sanity/lib/live";
import { contactDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import AboutImage from "../pages/about/about-david-image";
import Link from "next/link";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import MD10 from "../logo/md-10";

export default async function Contact() {
  const { data: contactDavidData } = await sanityFetch({
    query: contactDavidQuery,
  });

  if (!contactDavidData) {
    notFound();
  }

  const { contactIllustration, imageDimensions } = contactDavidData;

  return (
    <>
      <h2 className="sticky top-12 z-30 mt-4 self-start px-x leading-10 mix-blend-difference invert md:left-8 md:top-16 md:px-8">
        Contact
      </h2>
      <div className="sticky bottom-0 left-0 flex min-h-[100dvh] w-full flex-col justify-end bg-stone-200 px-x pb-12 md:px-8">
        {/* <div className="z-30 mb-6 h-24 bg-green-200">
          <h2 className="sticky top-16 w-fit self-start whitespace-nowrap pt-1 text-4xl leading-10 mix-blend-difference invert">
            Contact
          </h2>
        </div> */}
        <div className="grid grid-cols-12 content-end gap-x-0 gap-y-8 text-2xl md:gap-x-20 md:text-3xl lg:text-4xl">
          <div className="order-1 col-span-12 col-start-1 lg:col-span-6">
            <div className="relative flex h-full flex-col justify-between pt-8 before:absolute before:left-0 before:top-0 before:h-1 before:w-12 before:bg-black before:content-['']">
              <div className="relative flex flex-col gap-y-4">
                <a
                  href={`mailto:${contactDavidData.contact?.email}`}
                  className=""
                >
                  {contactDavidData.contact?.email}
                </a>
                <h3 className="">{contactDavidData.contact?.mobileNumber}</h3>
                {/* {contactDavidData.address && (
                  <h3 className="leading-tight">
                    {contactDavidData.address?.[0]?.street}{" "}
                    {contactDavidData.address?.[0]?.number}, <br />
                    {contactDavidData.address?.[0]?.postalCode}{" "}
                    {contactDavidData.address?.[0]?.city}
                  </h3>
                )} */}
                <div className="flex flex-row gap-4">
                  <Link
                    href={"https://www.instagram.com/osloco/"}
                    target="_blank"
                    className="flex gap-1"
                  >
                    {/* <SiInstagram /> */}
                    Instagram
                    <svg
                      className="mt-1 h-auto w-5 md:w-6 xl:w-7"
                      // width="9"
                      // height="8"
                      viewBox="0 0 9 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"
                        fill="black"
                      ></path>
                    </svg>
                  </Link>
                  {/* <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61572319984075&locale=nl_BE"
                    }
                    target="_blank"
                  >
                    <SiFacebook />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="order-3 col-span-12 col-start-1 flex items-end gap-x-12 text-base tracking-tight lg:col-span-6 lg:text-xl">
            <div className="flex items-center gap-2">
              <h4>© 2025 David van Loon</h4>
              <p>–</p>
              <div className="flex items-center gap-2">
                <p>website by </p>
                <Link
                  href={"www.mickdellaert.com"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="pb-1"
                >
                  <MD10 />
                </Link>
              </div>
            </div>
          </div>
          <div className="order-2 col-span-12 col-start-1 content-end items-end md:col-span-8 md:col-start-1 lg:col-span-6 lg:col-start-7 lg:row-span-2">
            {contactIllustration && (
              <AboutImage
                data={contactIllustration}
                dimensions={imageDimensions}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
