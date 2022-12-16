import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar} from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {_id, title, author, details, image_url, total_view, rating} = news;
  return (
    <Card className="mt-4 mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
            <Image thumbnail roundedCircle src={author?.img} style={{height:'50px'}}></Image>
            <div className="ms-2 d-flex align-items-center">
                <p>{author?.name}</p>
                <p>{author?.published_date}</p>
            </div>
        </div>
        <div>
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="mt-3">
          {details.length > 250 ?
            <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p>  
            :<p>{details}</p>
        }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div>
        <FaStar className="text-warning"></FaStar>
        <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <span>{total_view}</span>
          <FaEye className="ms-2"></FaEye>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
