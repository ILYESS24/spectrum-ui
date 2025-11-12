import React from "react";

import { PageSubTitle, PageTemplate } from "../components/page-template";
import { Steppers } from "@/components/ui/steppers";

import CardCollection from "@/components/aurionui/cards";
const page = () => {
  return (
    <div>
      <PageTemplate title="Pre Design Cards">
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          withInstall
          codePath="components/aurionui/cards.tsx"
          installScript="npx shadcn@latest add card"
          withEnd
        />
        <PageSubTitle>Usage</PageSubTitle>
        <div className="mt-12">
          <CardCollection />
        </div>
      </PageTemplate>
    </div>
  );
};

export default page;
