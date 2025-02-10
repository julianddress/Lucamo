
interface ImageCardProps {
    imageUrl: string;
    altText: string;
    size?: string; 
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText, size = 'group-hover:scale-105' }) => {
    return (
        <div className={`${size} transition-transform duration-300 h-full`}>
            <img src={imageUrl} alt={altText} className="object-contain p-2 aspect-square" />
        </div>
    );
};

export {ImageCard};
