import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ProductModal = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  const { title, description, image, price, category } = props.product;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center my-3">
                <img src={image} alt="" width="200"/>
            </div>
            <div className="text-primary">
               <h4> Category : {category}</h4>
            </div>
            <div>
                {description}
            </div>
            <div className="text-center my-3 text-success">
                <h3>Price : ${price}</h3>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
