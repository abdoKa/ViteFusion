import React from "react";
import { Button, Text, VStack } from "@chakra-ui/react";
import useRatingStore from "../stores/store";

const Rating: React.FC = () => {
  const rating = useRatingStore((state) => state.rating);
  const maxRating = useRatingStore((state) => state.maxRating);
  const increment = useRatingStore((state) => state.increment);
  const setRating = useRatingStore((state) => state.setRating);
  const reset = useRatingStore((state) => state.reset);

  return (
    <VStack spacing={4} align="center">
      <Text fontSize="2xl">
        Rating: {rating} / {maxRating}
      </Text>
      <Button onClick={increment} isDisabled={rating === maxRating}>
        Increment Rating
      </Button>
      <Button onClick={() => setRating(5)}>Set Rating to 5</Button>
      <Button onClick={reset} colorScheme="red">
        Reset Rating
      </Button>
    </VStack>
  );
};

export default Rating;
