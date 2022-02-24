import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Chart',
        link: '/dashboards/chart',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: 'Table',
    items: [
      {
        name: 'Products',
        icon: BallotTwoToneIcon,
        link: '/dashboards/products'
      },
      // {
      //   name: 'Attributes',
      //   icon: BeachAccessTwoToneIcon,
      //   link: '/dashboards/modals'
      // },
      // {
      //   name: 'Groups',
      //   icon: EmojiEventsTwoToneIcon,
      //   link: '/dashboards/accordions'
      // },
      {
        name: 'Categories',
        icon: FilterVintageTwoToneIcon,
        link: '/dashboards/categories'
      },
      // {
      //   name: 'Tags',
      //   icon: HowToVoteTwoToneIcon,
      //   link: '/dashboards/badges'
      // },
      // {
      //   name: 'Orders',
      //   icon: LocalPharmacyTwoToneIcon,
      //   link: '/dashboards/tooltips'
      // },
      // {
      //   name: 'Order Status',
      //   icon: RedeemTwoToneIcon,
      //   link: '/dashboards/avatars'
      // },
      {
        name: 'Users',
        icon: SettingsTwoToneIcon,
        link: '/dashboards/users'
      },
      // {
      //   name: 'Coupons',
      //   icon: TrafficTwoToneIcon,
      //   link: '/dashboards/forms'
      // },
    ]
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Status',
        icon: VerifiedUserTwoToneIcon,
        link: '/status',
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  }
];

export default menuItems;
