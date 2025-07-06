import { Link, useLocation } from 'react-router-dom';
import { 
  BottomNavigation, 
  BottomNavigationAction, 
  useMediaQuery, 
  Theme 
} from '@mui/material';
import {
  HomeOutlined,
  RestaurantOutlined,
  StorefrontOutlined,
  ReceiptOutlined,
} from '@mui/icons-material';

const BottomNav = () => {
  const location = useLocation();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  if (!isMobile) return null; // Only show on mobile

  return (
    <BottomNavigation
      showLabels
      value={location.pathname}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0px -2px 5px rgba(0,0,0,0.1)'
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        value="/"
        label="Home"
        icon={<HomeOutlined />}
      />
      <BottomNavigationAction
        component={Link}
        to="/dishes"
        value="/dishes"
        label="Dishes"
        icon={<RestaurantOutlined />}
      />
      <BottomNavigationAction
        component={Link}
        to="/restaurants"
        value="/restaurants"
        label="Restaurants"
        icon={<StorefrontOutlined />}
      />
      <BottomNavigationAction
        component={Link}
        to="/orders"
        value="/orders"
        label="Orders"
        icon={<ReceiptOutlined />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;