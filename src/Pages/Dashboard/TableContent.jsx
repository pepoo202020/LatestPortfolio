import { Delete, Edit } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TableContent = ({
  headNames,
  tableContent,
  editBtnHandler,
  deleteBtnHandler,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headNames.map((name, index) => (
              <TableCell
                key={index}
                align={`${index === 1 ? "right" : "left"}`}
                className={`${index === 1 ? "text-center" : ""}`}
              >
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContent.map((content, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {content.skillName}
              </TableCell>
              <TableCell align="right">
                <Link
                  onClick={editBtnHandler}
                  className={`p-2  bg-orange-500 text-white rounded-xl mr-2 `}
                >
                  <Edit /> Edit
                </Link>
                <Link
                  onClick={deleteBtnHandler}
                  className="p-2 bg-red-500 text-white rounded-xl "
                >
                  <Delete /> Delete
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
