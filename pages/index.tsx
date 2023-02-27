import CardSection from "@/components/CardSection/CardSection";
import Footer from "@/components/Footer/Footer";
import HeroImage from "@/components/HeroSection/HeroImage";
import Navbar from "@/components/HeroSection/Navbar";
import NewPropertiesForRent from "@/components/NewProperties/NewPropertiesForRent";
import NewPropertiesForSale from "@/components/NewProperties/NewPropertiesForSale";
import PropertyWatcher from "@/components/PropertyWatcher/PropertyWatcher";
import { theme } from "@/styles/styles";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <CardSection />
      <NewPropertiesForSale />
      <Divider borderColor={theme.color.other.grayText} />
      <NewPropertiesForRent />
      <PropertyWatcher />
      <Footer />
    </>
  );
}
