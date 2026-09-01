import { getReservationByUserId } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const MyReserveList = async () => {
  const reservation = await getReservationByUserId();

  if (!reservation) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      {reservation.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gray-100 px-4 py-2.5">
            <h1 className="truncate text-sm font-medium text-gray-900">
              Reservation ID: #{item.id}
            </h1>
            <div className="flex shrink-0 gap-1 text-sm font-normal text-gray-700">
              <span>Status</span>
              <span className="font-bold uppercase">
                {item.Payment?.status}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col md:flex-row">
            <div className="relative h-56 w-full shrink-0 md:h-auto md:w-1/3">
              <Image
                src={item.Room.image}
                fill
                alt="image room"
                className="object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-between p-4">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                  <span className="text-gray-500">Price</span>
                  <span>{formatCurrency(item.price)}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                  <span className="text-gray-500">Arrival</span>
                  <span>{formatDate(item.startDate.toISOString())}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                  <span className="text-gray-500">Departure</span>
                  <span>{formatDate(item.endDate.toISOString())}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                  <span className="text-gray-500">Duration</span>
                  <span>
                    {differenceInCalendarDays(item.endDate, item.startDate)}
                    <span className="ml-1">Night</span>
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-gray-200 pt-2.5 text-sm font-semibold text-gray-900">
                  <span className="font-medium text-gray-500">Subtotal</span>
                  <span>
                    {item.Payment && formatCurrency(item.Payment.amount)}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                {item.Payment?.status === "unpaid" ? (
                  <Link
                    href={`/checkout/${item.id}`}
                    className="rounded-md bg-orange-400 px-6 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-500"
                  >
                    Pay Now
                  </Link>
                ) : (
                  <Link
                    href={`/myreservation/${item.id}`}
                    className="rounded-md bg-orange-400 px-6 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-500"
                  >
                    View Detail
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReserveList;
