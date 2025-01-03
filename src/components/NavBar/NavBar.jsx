
import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'



const NavBar = ({ cart }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <header className=" py-4">
                <div className="container mx-auto flex items-center justify-around px-4">
                    <Logo />
                    <SearchBar />
                    <UserActions toggleMenu={toggleMenu} isOpen={isOpen} cart={cart} />
                </div>
                <MobileSearchBar />
            </header>
            <NavigationMenu isOpen={isOpen} setIsOpen={setIsOpen}/>

        </div>
    );
};

// Logo Component
const Logo = () => (
    <Link to="/">
        <div className=" text-2xl font-bold">
            ElectroShop
        </div>
    </Link>
);

// Search Bar Component
const SearchBar = () => (
    <div className="hidden border-2 rounded-md md:block md:flex-1 md:max-w-2xl md:mx-8">
        <div className="flex">
            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Search for Products"
                    className="w-full px-4 py-2 rounded-l focus:outline-none"
                />
            </div>
            <button className="bg-blue-900 text-white px-6 rounded-r hover:bg-blue-800">
                <Search size={20} />
            </button>
        </div>
    </div>
);

// Mobile Search Bar Component
const MobileSearchBar = () => (
    <div className="flex-1 max-w-2xl mx-10 mb-3 mt-5 md:hidden ">
        <div className="flex">
            <div className="relative flex-1 border">
                <input
                    type="text"
                    placeholder="Search for Products"
                    className="w-full px-4 py-2 rounded-l focus:outline-none"
                />
            </div>
            <button className="bg-blue-900 text-white px-6 rounded-r hover:bg-blue-800">
                <Search size={20} />
            </button>
        </div>
    </div>
);


const UserActions = ({ toggleMenu, isOpen, cart }) => (
    <div className="flex items-center space-x-6 text-white">
        <div className="flex items-center space-x-4">
            <button className="hover:text-gray-200">
                <Link to='/login'>
                    <User size={24} />
                </Link>
            </button>
            <button className="relative">
                <Link to="/cart">
                    <ShoppingBag size={24} className="hover:text-gray-200" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-white text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                            {cart.length}
                        </span>
                    )}
                </Link>
            </button>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </div>
);


// Navigation Menu Component
const NavigationMenu = ({ isOpen, setIsOpen }) => {

    return (
        <div className={`z-10 ${isOpen ? 'block translate-x-0 fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform' : 'hidden'} md:h-auto md:w-auto md:flex md:space-x-8 md:bg-transparent md:shadow-none md:border-y`}>
            <div className="flex items-center justify-between h-14 px-4 md:hidden">
                <h2 className="text-gray-900 font-bold">Menu</h2>
            </div>
            <div className={`flex flex-col space-y-2 px-4 md:flex-row md:space-y-0 md:space-x-8 m-5`}>
                <Link to="/" className="text-gray-900 hover:text-blue-700" onClick={() => setIsOpen(false)}>HOME</Link>
                <Link to="/product" className="text-gray-900 hover:text-blue-700" onClick={() => setIsOpen(false)}>SHOP</Link>
                <Link to="/about" className="text-gray-900 hover:text-blue-700" onClick={() => setIsOpen(false)}>ABOUT US</Link>
                <Link to="/contact" className="text-gray-900 hover:text-blue-700" onClick={() => setIsOpen(false)}>CONTACT US</Link>
            </div>
        </div>
    );
};

export default NavBar;
