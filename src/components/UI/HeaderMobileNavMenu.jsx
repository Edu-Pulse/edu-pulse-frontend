import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const HeaderMobileNavMenu = ({
  iconActive,
  iconInactive,
  href,
  name,
  onClick,
}) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="w-full flex p-2 justify-center">
      <Link
        to={href}
        onClick={onClick}
        className={twMerge(
          'p-1 rounded-lg aspect-square grid place-items-center font-semibold',
          path === href && 'text-darkblue-05 font-bold'
        )}>
        {path === href ? iconActive : iconInactive}
        <span className="text-[10px] mt-1">{name}</span>
      </Link>
    </div>
  );
};

HeaderMobileNavMenu.propTypes = {
  iconActive: PropTypes.element,
  iconInactive: PropTypes.element,
  href: PropTypes.string,
  name: PropTypes.string,
};

export default HeaderMobileNavMenu;
