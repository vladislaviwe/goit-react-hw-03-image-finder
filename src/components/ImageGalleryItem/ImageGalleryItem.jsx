import { GalleryItem, GalleryItemImage } from "./ImageGalleryItemStyled"

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags, onClick }) {
    return (
        <GalleryItem>
            <GalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
    )
}