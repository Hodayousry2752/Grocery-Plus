import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import HotDealsSection from '../components/home/HotDealsSection';
import NewProductsSection from '../components/home/NewProductsSection';
import FreeDeliverySection from '../components/home/FreeDeliverySection';
import DailyBestSells from '../components/home/DailyBestSells';
import FeaturesSection from '../components/home/FeaturesSection';

const HomePage = () => {
  return (
    <Box >
      <HeroSection />
      <HotDealsSection />
      <NewProductsSection />
      <FreeDeliverySection />
      <DailyBestSells />
      <FeaturesSection />
    </Box>
  );
};

export default HomePage;