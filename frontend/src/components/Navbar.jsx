import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from "react";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 w-full bg-gray-950 bg-opacity-95 backdrop-blur-xl shadow-xl z-50 border-b border-stone-700'>
			<div className='container mx-auto px-6 py-4 flex justify-between items-center'>
				<Link to='/' className='text-3xl font-extrabold text-stone-400 flex items-center gap-2 hover:text-stone-300 transition-all duration-300'>
					E-Commerce
				</Link>

				{/* Mobile menu toggle */}
				<button className='md:hidden text-stone-400' onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>

				<nav
					className={`${
						menuOpen ? 'flex' : 'hidden'
					} flex-col md:flex md:flex-row md:items-center gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-gray-950 md:bg-transparent p-4 md:p-0`}
				>
					<Link to={'/'} className='text-gray-300 hover:text-stone-400 text-lg font-medium transition-all duration-300'>
						Home
					</Link>

					{user && (
						<Link to={'/cart'} className='relative flex items-center text-gray-300 hover:text-stone-400 text-lg font-medium transition-all duration-300'>
							<ShoppingCart className='mr-2' size={22} />
							<span>Cart</span>
							{cart.length > 0 && (
								<span className='absolute -top-2 -right-3 bg-stone-500 text-stone rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>
									{cart.length}
								</span>
							)}
						</Link>
					)}

					{isAdmin && (
						<Link to={'/secret-dashboard'} className='bg-stone-600 hover:bg-stone-500 text-stone px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300'>
							<Lock size={20} />
							Dashboard
						</Link>
					)}

					{user ? (
						<button onClick={logout} className='bg-gray-700 hover:bg-gray-600 text-stone px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300'>
							<LogOut size={20} />
							<span>Log Out</span>
						</button>
					) : (
						<>
							<Link to={'/signup'} className='bg-stone-500 hover:bg-stone-400 text-stone px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300'>
								<UserPlus size={20} />
								Sign Up
							</Link>
							<Link to={'/login'} className='bg-gray-700 hover:bg-gray-600 text-stone px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300'>
								<LogIn size={20} />
								Login
							</Link>
						</>
					)}
				</nav>
			</div>
		</header>
	);
};
export default Navbar;
