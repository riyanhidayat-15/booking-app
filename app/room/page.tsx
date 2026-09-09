import HeaderSection from "@/components/HeaderSection";
import Main from "@/components/Main";
import RoomSkeleton from "@/components/RoomSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Rooms & rates",
  description: "Choose your best room today",
};

const RoomPage = () => {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <HeaderSection
        title="Rooms & rates"
        subtitle="Lorem ipsum dolor sit amet."
      />
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6">
        <Suspense fallback={<RoomSkeleton />}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
