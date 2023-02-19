import CardSection from "@/components/CardSection/CardSection";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HeroSection/Hero";
import Navbar from "@/components/HeroSection/Navbar";
import NewPropertiesForRent from "@/components/NewProperties/NewPropertiesForRent";
import NewPropertiesForSale from "@/components/NewProperties/NewPropertiesForSale";
import PropertyWatcher from "@/components/PropertyWatcher/PropertyWatcher";
import { theme } from "@/styles/styles";
import { Divider } from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      <NewPropertiesForSale />
      <Divider borderColor={theme.color.other.grayText} />
      <NewPropertiesForRent />
      <PropertyWatcher />
      <Footer />
    </>
  );
}
