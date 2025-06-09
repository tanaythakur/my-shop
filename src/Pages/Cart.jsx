import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Slices/Cart/CartSlice";
import {
  AlertDialog,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { useMemo } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = useMemo(() => {
      console.log("Recalculating total because cartItems changed:", cartItems);

    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
    }, [cartItems]);

  return (
    <Container className="max-w-4xl mx-auto p-4">
      <Heading align="center" mb="6"
        size={"8"}
        className="text-3xl font-semibold text-gray-700"
      >
        Cart
      </Heading>

      <Box mt={"8"} className="text-center py-12">
        {cartItems.length === 0 ? (
          <Flex direction={"column"} mb="6" className="text-6xl text-gray-400">
            🛒
            <Text pt="6" className="text-gray-500">Your cart is empty.</Text>
            <Flex justify={"center"}>
              <Link
                to="/products"
                className="bg-indigo-600 text-white text-sm mt-3 px-6 py-3 rounded hover:bg-indigo-800"
              >
                Continue Shopping
              </Link>
            </Flex>
          </Flex>
        ) : (
          cartItems.map((item) => (
            <Flex
              key={item.id}
              align={"center"}
              mb="4"
              p="4"
              gap="2"
              className="justify-evenly rounded shadow"
            >
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-16 h-16 object-cover rounded "
              />

              <Flex className="grow">
                <Text className="font-semibold">{item.title}</Text>
                <Text className="text-gray-600">${item.price.toFixed(2)}</Text>
              </Flex>

              <Flex align="center" gap="2">
                <Button
                  variant="soft"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  −
                </Button>
                <Text>{item.quantity}</Text>

                <Button
                  variant="soft"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </Button>
              </Flex>

              <AlertDialog.Root>
                <AlertDialog.Trigger>
                  <Button color="red">Remove</Button>
                </AlertDialog.Trigger>

                <AlertDialog.Content maxWidth="450px">
                  <AlertDialog.Title>Remove</AlertDialog.Title>
                  <AlertDialog.Description size="2">
                    Are you sure? You want to remove this item from cart.
                  </AlertDialog.Description>

                  <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                      <Button variant="soft" color="gray">
                        Cancel
                      </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <Button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        variant="solid"
                        color="red"
                      >
                        Remove
                      </Button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </Flex>
          ))
        )}

        {cartItems.length > 0 && (
          <Flex gap="2" align="center"
            direction={"column"}
            justify={"center"}
          >
            Total: ${total}
            <Link
              to={"/payment"}
              className="mt-4 px-6 py-2 w-fit rounded bg-indigo-600 hover:bg-indigo-900 text-white shadow-2xl"
            >
              Buy Now
            </Link>
          </Flex>
        )}
      </Box>
    </Container>
  );
};

export default Cart;
