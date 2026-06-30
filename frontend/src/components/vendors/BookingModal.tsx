

"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import BookingSuccess from "./BookingSuccess";
import { useAuthStore } from "@/store/authStore";
import { useBookingStore } from "@/store/bookingStore";
import { Booking } from "@/types/booking";


interface BookingModalProps {
  open: boolean;

  onClose: () => void;

  vendorId: number;

  vendorName: string;

  category: string;

  city: string;

  packageName: string;

  price: number;

  guests: number;

  date: string;
}

export default function BookingModal({
  open,
  onClose,
  vendorId,
  vendorName,
  category,
  city,
  packageName,
  price,
  guests,
  date,
}: BookingModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const { user } = useAuthStore();
const { addBooking } = useBookingStore();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () =>
      window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      setLoading(false);
      setSuccess(false);
    }
  }, [open]);

 const handleBooking = () => {
  if (!user) return;

  setLoading(true);

  setTimeout(() => {
    setLoading(false);

    const bookingNumber =
      "WD" +
      new Date().getFullYear() +
      Math.floor(
        100000 + Math.random() * 900000
      );

    setBookingId(bookingNumber);

    // const booking: Booking = {

    //   id: crypto.randomUUID(),

    //   bookingNumber,

    //   customerId: user._id,

    //   vendorId: 0, // We'll replace this with the real vendor id in the next step.

    //   customerName: user.name,

    //   customerEmail: formData.email,

    //   customerPhone: formData.phone,

    //   vendorName,

    //   category: "",

    //   packageName,

    //   eventType: "Wedding",

    //   eventDate: date,

    //   eventTime: "",

    //   venue: "",

    //   city: "",

    //   guests,

    //   brideName: formData.brideName,

    //   groomName: formData.groomName,

    //   specialRequirements:
    //     formData.requirements,

    //   amount: price,

    //   advancePaid: 0,

    //   remainingAmount: price,

    //   paymentStatus: "pending",

    //   bookingStatus: "pending",

    //   createdAt:
    //     new Date().toISOString(),

    //   updatedAt:
    //     new Date().toISOString(),
    // };
const booking: Booking = {
  id: crypto.randomUUID(),

  bookingNumber,

  customerId: user._id,

  vendorId,

  customerName: user.name,

  customerEmail: formData.email,

  customerPhone: formData.phone,

  vendorName,

  category,

  packageName,

  eventType: "Wedding",

  eventDate: date,

  eventTime: "",

  venue: vendorName,

  city,

  guests,

  brideName: formData.brideName,

  groomName: formData.groomName,

  specialRequirements: formData.requirements,

  amount: price,

  advancePaid: 0,

  remainingAmount: price,

  paymentStatus: "pending",

  bookingStatus: "pending",

  createdAt: new Date().toISOString(),

  updatedAt: new Date().toISOString(),
};
    addBooking(booking);

    setSuccess(true);
  }, 2000);
};

const [formData, setFormData] = useState({
  brideName: "",
  groomName: "",
  phone: "",
  email: "",
  requirements: "",
});


const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


const isFormValid =
  formData.brideName.trim() !== "" &&
  formData.groomName.trim() !== "" &&
  formData.phone.trim() !== "" ;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            {success ? (
  <BookingSuccess
    bookingId={bookingId}
    vendorName={vendorName}
    date={date}
    onClose={onClose}
  />
) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-5">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Book Vendor
                    </h2>

                    <p className="mt-1 text-gray-600">
                      Complete your booking details for{" "}
                      <span className="font-semibold text-rose-600">
                        {vendorName}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="rounded-full p-2 transition hover:bg-gray-100"
                  >
                    <X className="h-6 w-6 text-gray-700" />
                  </button>
                </div>

                {/* Body */}
                <div className="grid gap-5 p-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      👰 Bride Name
                    </label>

                    <input
                      type="text"
                      placeholder="Bride Name"
                       name="brideName"
  value={formData.brideName}
  onChange={handleChange}
                      className="h-11 w-full rounded-xl border border-gray-300 px-4 text-gray-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      🤵 Groom Name
                    </label>

                    <input
                      type="text"
                      placeholder="Groom Name"
                      name="groomName"
  value={formData.groomName}
  onChange={handleChange}
                      className="h-11 w-full rounded-xl border border-gray-300 px-4 text-gray-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      📞 Phone
                    </label>

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
  value={formData.phone}
  onChange={handleChange}
                      className="h-11 w-full rounded-xl border border-gray-300 px-4 text-gray-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      📧 Email
                    </label>

                    <input
                      type="email"
                      placeholder="Email Address"
                       name="email"
  value={formData.email}
  onChange={handleChange}
                      className="h-11 w-full rounded-xl border border-gray-300 px-4 text-gray-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      📅 Wedding Date
                    </label>

                    <input
                      value={date}
                      readOnly
                      className="h-11 w-full rounded-xl border bg-gray-100 px-4 text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      📦 Package
                    </label>

                    <input
                      value={packageName}
                      readOnly
                      className="h-11 w-full rounded-xl border bg-gray-100 px-4 text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      👥 Guests
                    </label>

                    <input
                      value={guests}
                      readOnly
                      className="h-11 w-full rounded-xl border bg-gray-100 px-4 text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      🏛 Vendor
                    </label>

                    <input
                      value={vendorName}
                      readOnly
                      className="h-11 w-full rounded-xl border bg-gray-100 px-4 text-gray-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      📝 Special Requirements
                    </label>

                    <textarea
                      rows={3}
                      placeholder="Decoration, Catering, DJ, Photography..."
                       name="requirements"
  value={formData.requirements}
  onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 p-4 focus:border-rose-500 focus:outline-none text-gray-500"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 border-t bg-white px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-700">
                      Estimated Price
                    </span>

                    <span className="text-3xl font-bold text-rose-600">
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <button
  onClick={handleBooking}
  disabled={loading || !isFormValid}
  className="
    w-full
    rounded-xl
    bg-gradient-to-r
    from-rose-500
    to-pink-500
    py-3.5
    text-lg
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-[1.01]
    hover:shadow-lg
    disabled:cursor-not-allowed
    disabled:opacity-50
    disabled:hover:scale-100
    disabled:hover:shadow-none
  "
>
  {loading ? (
    <div className="flex items-center justify-center gap-3">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Processing...
    </div>
  ) : !isFormValid ? (
    "Fill all required fields"
  ) : (
    "Confirm Booking"
  )}
</button>
{!isFormValid && (
  <p className="mt-2 text-center text-sm text-red-500">
    Please fill in Bride Name, Groom Name, Phone, and Email to continue.
  </p>
)}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}