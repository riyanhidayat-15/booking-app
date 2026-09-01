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
    <div>
      <HeaderSection
        title="Rooms & rates"
        subtitle=" Lorem ipsum dolor sit amet."
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<RoomSkeleton />}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
