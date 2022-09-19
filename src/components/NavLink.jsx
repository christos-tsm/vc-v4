import Link from 'next/link';

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a className={`${active ? 'navlink__active' : ''}`}>{children}</a>
    </Link>
);

export default NavLink;
