import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/Cart/CartSlice";
import {
  AspectRatio,
  Button,
  Card,
  Flex,
  Text,
} from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card className="bg-white  shadow-2xl overflow-x-hidden hover:shadow-lg transition-shadow">
      <AspectRatio ratio={4 / 3}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer overflow-hidden"
        />
      </AspectRatio>

      <div className="p-4">
        <Text align="center" mb="2" className="text-lg text-gray-800">
          {product.name}
        </Text>
        <Text className="text-sm text-gray-600 mb-2">{product.category}</Text>
        <Text className="text-gray-700 text-sm mb-3 line-clamp-2">
          {product.description}
        </Text>

        <Flex justify={"between"} mt="4">
          <Text size="4" color="green" weight="bold">
            ${product.price}
          </Text>

          <Button
            className="hover:bg-indigo-800"
            variant="soft"
            color="indigo"
            onClick={() => dispatch(addToCart(product))}
            highContrast
          >
            <PlusIcon /> Add to Cart
          </Button>
        </Flex>
      </div>
    </Card>
  );
};

export default ProductCard;
