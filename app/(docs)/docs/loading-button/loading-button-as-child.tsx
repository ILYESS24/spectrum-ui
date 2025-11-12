import React from "react";
import { LoadingButton } from "@/components/ui/loading-button";

const LoadingButtonAsChild = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <LoadingButton asChild loading>
        <p>As a `p` child</p>
      </LoadingButton>
      <LoadingButton asChild>
        <span>as a `span` child</span>
      </LoadingButton>
      <LoadingButton asChild variant="secondary">
        <span>as a `span` child with `secondary` variant</span>
      </LoadingButton>
    </div>
  );
};

export default LoadingButtonAsChild;
