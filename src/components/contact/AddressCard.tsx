import { MapPin, Mail, Phone } from "lucide-react";

interface Address {
    id: number;
    country: string;
    address: string;
    email: string;
    phone: string;
    mapUrl: string;
}

interface Props {
    data: Address;
}

export default function AddressCard({ data }: Props) {
    return (
        <div className="bg-gray-100 flex flex-col gap-3 p-5 rounded-2xl shadow-md w-full sm:w-full text-md font-semibold">
            {/* Country & Map */}
            <iframe
                src={data.mapUrl}
                width="100%"
                height="200"
                loading="lazy"
                className="rounded-lg"
                style={{ border: 0 }}
            ></iframe>

            <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                {data.country}
            </h3>

            {/* Address */}
            <p className="text-gray-700">{data.address}</p>

            {/* Email */}
            <p className="flex items-center gap-2 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-gray-600" /> {data.email}
            </p>

            {/* Phone */}
            <p className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-gray-600" /> {data.phone}
            </p>
        </div>
    );
}
