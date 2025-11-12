import {
  PageSubTitle,
  PageTemplate,
} from "@/app/(docs)/docs/components/page-template";
import { Steppers } from "@/components/ui/steppers";
import PreviewCodeCard from "@/app/(docs)/docs/components/preview-code-card";
import { Metadata } from "next";
import { baseMetadata } from "@/app/(docs)/layout-parts/base-metadata";
import Usage from "@/app/(docs)/docs/components/usage";
import Navbardemo from "./navbardemo";
import CircularNavbar from "./usage/circular";
import Tabnavbar from "./usage/tabnavbar";
import Floatingnavbar from "./usage/floatingnavbar";
import Sidenavbar from "./usage/sidenav";

export const metadata: Metadata = baseMetadata({
  title: "Aurion UI-Navbar",
  description:
    "An enhancement slider that allows you to select a range of values.",
});

const DualRangeSliderPage = () => {
  return (
    <PageTemplate title="Navbars">
      <PreviewCodeCard
        path="app/(docs)/docs/navbar/navbardemo.tsx"
        cli="@aurionui/navbar-demo"
      >
        <Navbardemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="app/(docs)/docs/navbar/navbardemo.tsx"
        withEnd
        installScript="npm i lucide-react"
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Circular Navbar"
        path="app/(docs)/docs/navbar/usage/circular.tsx"
        cli="@aurionui/circular-navbar"
      >
        <CircularNavbar />
      </Usage>
      <Usage
        title="Tab Navbar"
        path="app/(docs)/docs/navbar/usage/tabnavbar.tsx"
        cli="@aurionui/tab-navbar"
      >
        <Tabnavbar />
      </Usage>
      <Usage
        title="Floating Navbar"
        path="app/(docs)/docs/navbar/usage/floatingnavbar.tsx"
        cli="@aurionui/floating-navbar"
      >
        <Floatingnavbar />
      </Usage>
      <Usage
        title="Sidebar Navbar"
        path="app/(docs)/docs/navbar/usage/sidenav.tsx"
        cli="@aurionui/sidebar-navbar"
      >
        <Sidenavbar />
      </Usage>
    </PageTemplate>
  );
};

export default DualRangeSliderPage;
