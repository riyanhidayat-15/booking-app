"use client";

import { creeateReserve } from "@/lib/action";
import { DisabledDateProps, RoomDetailProps } from "@/types/room";
import clsx from "clsx";
import { useActionState, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReserveForm = ({
  room,
  disabledDate,
}: {
  room: RoomDetailProps;
  disabledDate: DisabledDateProps[];
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  const [state, formAction, isPending] = useActionState(
    creeateReserve.bind(
      null,
      room.id,
      room.price,
      startDate ?? new Date(),
      endDate ?? new Date(),
    ),
    null,
  );

  const excludeDates = disabledDate.map((item) => ({
    start: item.startDate,
    end: item.endDate,
  }));

  return (
    <div>
      <form action={formAction}>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-900"
          >
            Arrival - Departure
          </label>

          <DatePicker
            id="date"
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange
            onChange={handleDateChange}
            excludeDateIntervals={excludeDates}
            dateFormat="dd-MM-yyyy"
            wrapperClassName="w-full"
            className="py-2 px-4 rounded-md border border-gray-300 w-full"
            placeholderText="Select arrival - departure"
            shouldCloseOnSelect={false}
          />

          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.messageDate}</p>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Your Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            className="py-2 px-4 rounded-md border border-gray-300 w-full"
            placeholder="Full name"
          />

          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="text"
            name="phone"
            className="py-2 px-4 rounded-md border border-gray-300 w-full"
            placeholder="Phone Number"
          />

          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.phone}</p>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={clsx(
            "px-10 py-3 text-center font-semibold text-white w-full bg-orange-400 rounded-sm cursor-pointer hover:bg-orange-500",
            {
              "opacity-50 cursor-progress": isPending,
            },
          )}
        >
          {isPending ? "Loading.." : "Reserve"}
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
