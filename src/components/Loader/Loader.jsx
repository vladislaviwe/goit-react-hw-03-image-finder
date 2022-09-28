import { ColorRing } from "react-loader-spinner"

import { LoaderContainer } from "./LoaderStyled"

export default function Loader() {
    return (
        <LoaderContainer>
            <ColorRing
                visible={true}
                height="200"
                width="200"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </LoaderContainer>
    )
}