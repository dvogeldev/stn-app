// src/components/PageLayout.tsx
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeaderConfig, getHeaderConfig } from '@/lib/headerConfig';

interface PageLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  headerConfig?: HeaderConfig;
  headerVariant?: 'default' | 'clean' | 'custom';
}

export function PageLayout({ 
  children, 
  showHeader = true, 
  showFooter = true,
  headerConfig,
  headerVariant = 'default'
}: PageLayoutProps) {
  // Use provided config or get from variant
  const finalHeaderConfig = headerConfig || getHeaderConfig(headerVariant);
  return (
    <>
      {showHeader && <Header config={finalHeaderConfig} />}
      <main>
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  );
}