import { Flex, Text } from "@radix-ui/themes";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky z-99 top-0 bg-gradient-to-b from-purple-950 to-purple-500  text-white p-4 shadow-lg ">
      <Flex justify="between" align="center" maxWidth="6xl" className=" mx-auto">

        <Link
          to="/home"
          className="text-2xl font-bold hover:text-white-200 transition-colors"
        >
          ShopApp
        </Link>

        <Flex align="center" className="space-x-6">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded  ${
                isActive ? "bg-purple-400" : "hover:bg-purple-500"
              }`
            }
          >
            Products
          </NavLink>
        

          <NavLink to="/" className="flex items-center space-x-6">
            {" "}
            Sign Up
          </NavLink>

          <NavLink to="/signin" className="flex items-center space-x-6">
            {" "}
            Sign In
          </NavLink>

          <NavLink
            to="/cart"
            className="relative p-2 hover:bg-white-700 rounded transition-colors"
          >
            <span className="text-2xl hover:brightness-150 rounded-full">
              🛒
            </span>

             {totalItems > 0 && (
          <Flex justify="center">
              <Text size="2" align="center" weight="medium" className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full h-5 w-5 ">
                {totalItems}
              </Text>
          </Flex>
          
         )}
          </NavLink>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
