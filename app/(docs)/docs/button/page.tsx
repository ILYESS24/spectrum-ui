/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import ButtonCollection from "@/components/aurionui/ButtonCollection";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import { Steppers } from "@/components/ui/steppers";
const page = () => {
  return (
    <div>
      <PageTemplate title="Pre Design Button">
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          withInstall
          codePath="components/aurionui/ButtonCollection.tsx"
          installScript="npx shadcn@latest add button"
          withEnd
        />
        <PageSubTitle>Usage</PageSubTitle>
        <div className="mt-12">
          <ButtonCollection />
        </div>
      </PageTemplate>
    </div>
  );
};

export default page;
