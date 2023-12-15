interface IProps {
  imageURL: string;
  alt: string;
  className?: string;
}
const Image = ({ imageURL, alt, className }: IProps) => {
  return <img src={imageURL} alt={alt} className={className} />;
};
export default Image;
