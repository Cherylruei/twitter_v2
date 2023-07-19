import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */
const PageLink = ({ icon, title, link }) => {
  return (
    <NavLink className='pageLink' to={link}>
      <img src={icon} alt='icon' className='icon' />
      <h5>{title}</h5>
    </NavLink>
  );
};

export default PageLink;
