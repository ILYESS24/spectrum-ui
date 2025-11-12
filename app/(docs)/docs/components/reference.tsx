import React from "react";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

interface ReferenceProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  text?: string;
}

export const Reference = ({ icon, text, ...props }: ReferenceProps) => {
  return (
    <span {...props}>
      <Badge variant="secondary" className="flex gap-2">
        {icon}
        {text}
      </Badge>
    </span>
  );
};

export const ReferenceBorder = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("mb-5 flex gap-3", className)} />;
};
