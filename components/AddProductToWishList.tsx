export interface AddProductToWishListProps {
  onAddWishList: () => void;
  onRequestClose: () => void;
}

export const AddProductToWishList = ({
  onAddWishList,
  onRequestClose,
}: AddProductToWishListProps) => {
  return (
    <span>
      Do you want to add in wishList?{" "}
      <button onClick={onAddWishList}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </span>
  );
};
