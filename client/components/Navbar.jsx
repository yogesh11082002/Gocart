// 'use client'
// import { Search, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const Navbar = () => {

//     const router = useRouter();

//     const [search, setSearch] = useState('')
//     const cartCount = useSelector(state => state.cart.total)

//     const handleSearch = (e) => {
//         e.preventDefault()
//         router.push(`/shop?search=${search}`)
//     }

//     return (
//         <nav className="relative bg-white">
//             <div className="mx-6">
//                 <div className="flex items-center justify-between max-w-7xl mx-auto py-4  transition-all">

//                     <Link href="/" className="relative text-4xl font-semibold text-slate-700">
//                         <span className="text-green-600">Pr</span>into<span className="text-green-600 text-5xl leading-0">.</span>
//                         <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
//                             plus
//                         </p>
//                     </Link>

//                     {/* Desktop Menu */}
//                     <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
//                         <Link href="/">Home</Link>
//                         <Link href="/shop">Shop</Link>
//                         <Link href="/">About</Link>
//                         <Link href="/">Contact</Link>

//                         <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full">
//                             <Search size={18} className="text-slate-600" />
//                             <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
//                         </form>

//                         <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
//                             <ShoppingCart size={18} />
//                             Cart
//                             <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">{cartCount}</button>
//                         </Link>

//                         <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
//                             Login
//                         </button>

//                     </div>

//                     {/* Mobile User Button  */}
//                     <div className="sm:hidden">
//                         <button className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full">
//                             Login
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <hr className="border-gray-300" />
//         </nav>
//     )
// }

// export default Navbar

"use client";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const cartCount = useSelector((state) => state.cart.total);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  // Variants for stagger animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white shadow-sm"
    >
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="relative text-4xl font-semibold text-slate-700"
            >
              <span className="text-green-600">Go</span>Cart
              <span className="text-green-600 text-5xl leading-0">.</span>
              {/* <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
                                plus
                            </p> */}
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          >
            {["Home", "Shop", "About", "Contact"].map((item, i) => (
              <motion.div key={i} variants={menuVariants}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : item === "About"
                      ? "/about"
                      : item === "Contact"
                      ? "/contact"
                      : `/${item.toLowerCase()}`
                  }
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            {/* Search */}
            <motion.form
              onSubmit={handleSearch}
              variants={menuVariants}
              className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full"
            >
              <Search size={18} className="text-slate-600" />
              <input
                className="w-full bg-transparent outline-none placeholder-slate-600"
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </motion.form>

            {/* Cart */}
            <motion.div variants={menuVariants}>
              <Link
                href="/cart"
                className="relative flex items-center gap-2 text-slate-600"
              >
                <ShoppingCart size={18} />
                Cart
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                  className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </motion.span>
              </Link>
            </motion.div>

            {/* Login Button */}
            <motion.div variants={menuVariants}>
              <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                Login
              </button>
            </motion.div>
          </motion.div>

          {/* Mobile User Button */}
          <motion.div
            className="sm:hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <button className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full">
              Login
            </button>
          </motion.div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </motion.nav>
  );
};

export default Navbar;
