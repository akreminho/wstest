import React from "react";
import tours from "./assets/data/Datatours";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Del from "./Del";
import Editcard from "./Editcard";
import './Post.css'
const Post = () => {
  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={tour.image} />
            <Card.Body>
              <Card.Title>{tour.name}</Card.Title>
              <Card.Text>{tour.info}</Card.Text>
              <Button variant="primary">{tour.price}</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      <div className="btn">
        <Del />
        <Editcard />
        </div>
    </div>
  );
};

export default Post;
