import { Outlet } from 'react-router-dom';
import { Box, Container} from '@mui/material';
import heroImg from "../../assets/Rectangle 1.png";
import heroBg from "../../assets/hero-bg.png";


const AuthLayout = () => {
  return (
    <div  className="min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen ">
        <div style={{ backgroundImage: `url(${heroBg})` }} className={`lg:w-1/2 max-h-screen hidden lg:block bg-cover bg-center `}>
          <img className='w-full h-screen' src={heroImg} alt="hero image"/>
        </div>

        {/* Right side with auth forms */}
        <Box className="lg:w-1/2 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AuthLayout;