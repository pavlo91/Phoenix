import {
  UilEstate,
  UilGift,
  UilLamp,
  UilMobileAndroid,
  UilMonitor,
  UilPalette,
  UilPlaneDeparture,
  UilShoppingBag,
  UilStar,
  UilWatchAlt,
  UilWrench
} from '@iconscout/react-unicons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Category = {
  label: string;
  icon: JSX.Element;
  url: string;
  bgClass?: string;
};

const categories: Category[] = [
  {
    label: 'Deals',
    bgClass: 'bg-warning-100 light',
    url: '#!',
    icon: <UilStar className="text-warning" size={39} />
  },
  {
    label: 'Grocery',
    url: '#!',
    icon: <UilShoppingBag size={39} />
  },
  {
    label: 'Fashion',
    url: '#!',
    icon: <UilWatchAlt size={39} />
  },
  {
    label: 'Mobile',
    url: '#!',
    icon: <UilMobileAndroid size={39} />
  },
  {
    label: 'Electronics',
    url: '#!',
    icon: <UilMonitor size={39} />
  },
  {
    label: 'Home',
    url: '#!',
    icon: <UilEstate size={39} />
  },
  {
    label: 'Dining',
    url: '#!',
    icon: <UilLamp size={39} />
  },
  {
    label: 'Gifts',
    url: '#!',
    icon: <UilGift size={39} />
  },
  {
    label: 'Tools',
    url: '#!',
    icon: <UilWrench size={39} />
  },
  {
    label: 'Travel',
    url: '#!',
    icon: <UilPlaneDeparture size={39} />
  },
  {
    label: 'Others',
    url: '#!',
    icon: <UilPalette size={39} />
  }
];

const EcomCategoryNavs = () => {
  return (
    <div className="d-flex justify-content-between">
      {categories.map(category => (
        <EcomCategoryNavItem key={category.label} category={category} />
      ))}
    </div>
  );
};

const EcomCategoryNavItem = ({ category }: { category: Category }) => {
  return (
    <Link to={category.url} className="icon-nav-item mb-3">
      <div className={classNames(category.bgClass, 'icon-container mb-2')}>
        {category.icon}
      </div>
      <p className="nav-label mb-0">{category.label}</p>
    </Link>
  );
};

export default EcomCategoryNavs;
