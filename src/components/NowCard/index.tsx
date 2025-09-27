import "./index.css";

interface NowItemProps {
  title: string;
  description?: string;
  author?: string;
  link: string;
}

const NowCard: React.FC<NowItemProps> = ({
  title,
  description,
  author,
  link,
}) => {
  return (
    <div className="now-card">
      <h3 className="now-card-title">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title?.toLocaleLowerCase()}
        </a>
      </h3>
      {(description || author) && (
        <p className="now-card-content">
          {(description || author)?.toLocaleLowerCase()}
        </p>
      )}
    </div>
  );
};

export default NowCard;
