import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalForOrders(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{minHeight:"40vh"}}>
          <table>
            <tr>
              <th>No</th>
              <th>Food</th>
              <th>Category</th>
              <th>Price</th>
              <th>Count</th>
              <th>Subtotal</th>
            </tr>
            {props.selectedOrder._id &&
              props.selectedOrder.foods.map((food, i) => {
                return (
                  <>
                    <tr>
                      <td>{i + 1}.</td>
                      <td>{food.name}</td>
                      <td>{food.category}</td>
                      <td>{food.price}</td>
                      <td>{food.count}</td>
                      <td>{food.count * food.price.slice(0, -1) * 1}€</td>
                      {/* total += item.count * (item.price.slice(0, -1) * 1); */}
                    </tr>
                  </>
                )
              })
            }
          </table>
        </Modal.Body>
      </Modal>

      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
    </>
  );
}

export default ModalForOrders;
