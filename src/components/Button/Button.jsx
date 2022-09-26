import { LoadMoreButton } from "./ButtonStyled";

const Button = ({loadMore}) => {
    return (
        <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
    )
}

export default Button;