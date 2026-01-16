import React from 'react';
import { Box, Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
  showImage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showImage = true }) => {
  return (
    <Container maxWidth="xl" className="min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left side with image (only on large screens) */}
        {showImage && (
          <Box className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-green-500 to-blue-600 items-center justify-center p-12">
            <div className="text-white max-w-md">
              <h1 className="text-4xl font-bold mb-6">Grocery Plus</h1>
              <p className="text-xl mb-4">Your one-stop shop for all grocery needs</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Fresh products delivered daily
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Best prices guaranteed
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Easy and secure checkout
                </li>
              </ul>
            </div>
          </Box>
        )}

        {/* Right side with content */}
        <Box className={`${showImage ? 'lg:w-1/2' : 'w-full'} flex items-center justify-center p-4 md:p-8`}>
          <div className="w-full max-w-md">
            {children}
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Layout;