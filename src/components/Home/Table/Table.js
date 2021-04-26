import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SelectRow } from "../../../store/actions/nodeActions";
import "./Table.css";

function Table() {
  const dispatch = useDispatch();
  const history = useHistory();

  const nodes = useSelector((state) => state.products.nodes);
  return (
    <div className="d-flex align-items-center justify-content-center m-5">
      <table className="table table-striped table-hover w-75">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Account Display Name</th>
            <th scope="col">Account Type</th>
            <th scope="col">Account Role</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((node, index) => {
            return (
              <tr
                key={index}
                className="link"
                onClick={() => {
                  dispatch(SelectRow(index));
                  history.push(`/detail/${node.accountId}`);
                }}
              >
                <th>{node.accountId}</th>
                <td>{node.displayName}</td>
                <td>{node.accountType}</td>
                <td>{node.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
