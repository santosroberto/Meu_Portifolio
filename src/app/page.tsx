import { Hero } from "@/components/home/Hero";
import { Problems } from "@/components/home/Problems";
import { Cases } from "@/components/home/Cases";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Stack } from "@/components/home/Stack";
import { CtaContact } from "@/components/home/CtaContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Cases />
      <Process />
      <Services />
      <About />
      <Stack />
      <CtaContact />
    </>
  );
}
