import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

const Navigate = (props: Props) => {
  const location = useLocation();

  // Split the pathname by "/"
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <nav>
      <ul>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={name}>{name}</li>
          ) : (
            <li key={name}>
              <Link to={routeTo}>{name}</Link>
              <span> / </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigate;
