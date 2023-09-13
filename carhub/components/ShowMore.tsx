"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  //   will be used to implement show more functionality
  const handleNaviagtion = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNaviagtion}
        />
      )}
    </div>
  );
};

export default ShowMore;
