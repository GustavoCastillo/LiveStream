import { IMAGE_URL } from "../shared/constants";

export const resizeImage = (
    imageUrl: string,
    width: string = "original"
  ): string => `${IMAGE_URL}/${width}${imageUrl}`;

export const getFilmPrice = (vote: string): number => {
  const parsedVote = parseFloat(vote);
  const price = (parsedVote == 0 ? 1 :parsedVote)* 1000  ;
  return parseFloat(price.toFixed(1));
};
