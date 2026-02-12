"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { LanguageSelector } from "@/components/LanguageSelector";
import { BrandBlock } from "@/components/BrandBlock";
import { Manifesto } from "@/components/Manifesto";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PageFooter } from "@/components/PageFooter";

export default function Home() {
  const { language, setLanguage, content } = useLanguage();

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-text font-sans selection:bg-accent selection:text-white">
      <BackgroundVideo />
      <LanguageSelector language={language} setLanguage={setLanguage} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 w-full pt-20 pb-28">
        <BrandBlock subtitle={content.subtitle} />

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          className="w-[1px] bg-primary/40 my-8"
          aria-hidden="true"
        />

        <Manifesto
          manifesto={content.manifesto}
          date={content.date}
        />

        <WaitlistForm
          placeholder={content.placeholder}
          successMessage={content.success}
        />

        <PageFooter footerText={content.footer} />
      </div>
    </main>
  );
}