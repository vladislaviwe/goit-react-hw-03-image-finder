import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import { Gallery } from './ImageGalleryStyled';

const ImageGallery = ({ items, onClick }) => {
    console.log(items);
    const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => 
    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} onClick={onClick}/>);

    return <Gallery>{elements}</Gallery>;
}

export default ImageGallery;