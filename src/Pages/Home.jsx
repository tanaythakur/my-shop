import { Link } from "react-router-dom";
import deliveryIcon from "../assets/HomePageImages/delivery.png";
import original from "../assets/HomePageImages/100-percent.png";
import SafePayments from "../assets/HomePageImages/payment-protection.png";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

const Home = () => {
  return (
    <Container m="auto" p="4" className="max-w-6xl">
      <Box className="text-center mx-auto p-4">
        <Heading weight="bold" size="9" mb="5" className="text-gray-700">
          Welcome to MyShop
        </Heading>

        <Text
          size="5"
          align="center"
          pt="6"
          mb="6"
          className=" text-gray-500 max-w-2xl"
        >
          Discover the best products at unbeatable prices.
        </Text>

        <Flex
          justify="center"
          align="center"
          pt="6"
          className="sm:flex-row gap-4"
        >
          <Link
            to="/products"
            className="bg-indigo-500 w-fit px-4 py-2 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
          >
            Shop Now
          </Link>

          <Link
            to="/cart"
            className="bg-indigo-500 w-fit px-4 py-2 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
          >
            View Cart
          </Link>
        </Flex>
      </Box>

      <Grid columns="1" gap="6" mt="3">
        <Section py="6" className="bg-white rounded-lg shadow-md text-center">
          <img
            src={deliveryIcon}
            alt="delivery icon"
            className="mx-auto w-10 h-10 mb-3"
          />
          <Heading className="text-lg font-black">Free Delivery</Heading>
          <Text className="text-gray-500 text-center pt-2">
            Free Shipping on all orders over 50$
          </Text>
        </Section>

        <Section
          py={"6"}
          className="bg-white rounded-lg shadow-md text-center"
        >
          <img
            src={original}
            alt="original icon"
            className="mx-auto w-10 h-10 mb-3"
          />
          <Heading className="text-lg font-black">Quality Product</Heading>
          <Text className="text-gray-500 text-center pt-2">
            100% Authentic and Original items
          </Text>
        </Section>

        <Section className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={SafePayments}
            alt="safePayment icon"
            className="mx-auto w-10 h-10 mb-3"
          />
          <Heading className="text-lg font-black">Secure Payment</Heading>
          <Text className="text-gray-500 text-center pt-2">
            Your Payment information is safe with us
          </Text>
        </Section>
      </Grid>
    </Container>
  );
};

export default Home;

