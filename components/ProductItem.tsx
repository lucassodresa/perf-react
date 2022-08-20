import { memo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";
import dynamic from "next/dynamic";

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () =>
    import("./AddProductToWishList").then((mod) => mod.AddProductToWishList),
  { loading: () => <span>Loading...</span> }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

const ProductItemComponent = ({
  product,
  onAddToWishList,
}: ProductItemProps) => {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  // const showFormattedDate = async () => {
  //   const { format } = await import("date-fns");
  //   format();
  // };

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Add in wishlist
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
