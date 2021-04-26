import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";

function Details() {
  const { id } = useParams();

  const nodes = useSelector((state) => state.products.nodes);
  const selectedRow = useSelector((state) => state.selectedNode.selectedRow);
  if (selectedRow < 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="Details d-flex align-items-center justify-content-center">
        <div>
          <h4> Details for AccountID = {id}</h4>
          <ul>
            <li> Display Name: {nodes[selectedRow].displayName}</li>
            <li> AccountID: {nodes[selectedRow].accountId}</li>
            <li> Account Type: {nodes[selectedRow].accountType}</li>
            <li> ID: {nodes[selectedRow].id}</li>
            <li> Price: {nodes[selectedRow].price}</li>
            <li> Quantity: {nodes[selectedRow].quantity}</li>
            <li> Role: {nodes[selectedRow].role}</li>
            <li> Trade Date: {nodes[selectedRow].tradeDate}</li>
            <li> Volume: {nodes[selectedRow].volume}</li>
            <li>
              Accepted Trade Quantity:
              {nodes[selectedRow].acceptedTradeQuantity}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Details;
