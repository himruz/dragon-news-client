import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();
  const {_id, title, author, details, image_url, total_view, rating} = news;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default News;
