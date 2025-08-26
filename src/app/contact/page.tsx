import AddressCard from "@/components/contact/AddressCard";
import ContactForm from "@/components/contact/ContactForm";
import { addresses } from "@/data/Contact";
import Link from "next/link.js";


export default function ContactSection() {

  return (
    <section className="">
      <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6 text-sm text-gray-700 flex gap-2 font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <span>{'>'}</span>
          <Link href="/careers" className="hover:underline">Contact Us</Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-2 sm:py-4 lg:py-6">
          <div className="flex flex-col gap-8 items-center justify-center min-h-[30vh]">
            {/* Text Content */}
            <div className="text-black text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Get in Touch With Us
              </h1>
            </div>
          </div>
        </section>
      </div>


      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start w-full px-2 lg:px-8 py-10 max-w-[95vw] lg:max-w-[85vw] mx-auto">
        {/* Left Side - Form */}
        <div className="bg-gray-50 shadow-md rounded-2xl lg:sticky lg:top-20 w-full lg:w-1/2 p-4">
          <ContactForm />
        </div>

        {/* Right Side - Address Cards */}
        <div className="w-full lg:w-1/2 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 justify-items-center">
          {addresses.map((address) => (
            <AddressCard key={address.id} data={address} />
          ))}
        </div>
      </div>
    </section>
  );
}
