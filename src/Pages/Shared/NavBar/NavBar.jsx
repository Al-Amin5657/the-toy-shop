import { useContext } from 'react';
import logo from '../../../assets/My project.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allMyToys">All Toys</Link></li>
        <li><Link to="/addedToys">Add A Toy</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {user?.email ? <>
            <li><Link to="/myToys">My Toys</Link></li>
            <li><button onClick={handleLogOut} className='btn btn-info pt-4'>Log Out</button></li>
        </>
            : <li><Link to="/logIn"><button className=''>LogIn</button></Link></li>}


    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img style={{ width: '150px', }} src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end">

                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

export default NavBar;