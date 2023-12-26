import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ path, icon, name, href, onClick }) => {
  const location = useLocation();
  return (
    <Link
      aria-describedby={`tooltip-${name}`}
      to={href}
      onClick={onClick}
      className={clsx(
        'grid h-[50px] items-center ps-9 mb-1 py-1.5 hover:cursor-pointer  text-white transition-all duration-300 w-full hover:bg-darkblue-03',
        location.pathname === path && 'bg-darkblue-03'
      )}>
      {icon}
      <span>{name}</span>
      <div
        role="tooltip"
        className="hidden transition-all duration-100 delay-1000"
        id={`tooltip-${name}`}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

Sidebar.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.element,
  name: PropTypes.string,
  href: PropTypes.string,
};

export default Sidebar;
