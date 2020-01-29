import React from "react";
import Columns from "./Columns";

function Table() {
  //decontrust the prop
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
