import { Button, Card } from "react-bootstrap";
import ProductModal from "../Modal/ProductModal";

const Product = (props) => {
  const { title, description, image } = props.product;
  console.log();
  return (
    <div className="col-lg-4" data-aos="flip-right">
      <Card style={{ height: "440px" }}>
        <div className="text-center mt-4">
          <img src={image} alt="" width="200" height="200" />
        </div>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center">
            {description.slice(0, 80)}
          </Card.Text>
          <div className="text-center">
            <Button className="btn btn-success mx-2" onClick={props.setCount}>
              Buy Now
            </Button>
            <ProductModal product={props.product}></ProductModal>
            <Button className="btn btn-danger mx-2">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
