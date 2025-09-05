import PageTitleHeader from "@/components/common/PageTitleHeader";
import AddressCard from "@/components/contact/AddressCard";
import ContactForm from "@/components/contact/ContactForm";
import { addresses } from "@/data/Contact";


export default function ContactSection() {

  return (
    <section className="">
      <PageTitleHeader
        heading="Get in Touch With Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <div className="container-wrapper padding-wrapper-y">
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start w-full  max-w-[95vw] lg:max-w-[85vw] mx-auto">
          {/* Left Side - Form */}
          <div className="bg-gray-50 shadow-md rounded-2xl lg:sticky lg:top-30 w-full lg:w-1/2 p-4">
            <ContactForm />
          </div>

          {/* Right Side - Address Cards */}
          <div className="w-full lg:w-1/2 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 justify-items-center">
            {addresses.map((address) => (
              <AddressCard key={address.id} data={address} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
