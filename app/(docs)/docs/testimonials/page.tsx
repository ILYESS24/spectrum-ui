import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';

import Testimonial from './testimonialsdemo';

export const metadata: Metadata = baseMetadata({
  title: 'Aurion UI - Testimonials',
  description: 'Aurion UI Testimonials - Real feedback from real users',
});

const DualRangeSliderPage = () => {
  return (
    <PageTemplate title="Testimonials" className='mt-5'>
      <PreviewCodeCard
        path="app/(docs)/docs/testimonials/testimonialsdemo.tsx"
        cli="@aurionui/testimonials"
      >
        <Testimonial />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="app/(docs)/docs/testimonials/testimonialsdemo.tsx"
        withEnd
        installScript="npx shadcn@latest add @aurionui/testimonials"
      />

     
    </PageTemplate>
  );
};

export default DualRangeSliderPage;
