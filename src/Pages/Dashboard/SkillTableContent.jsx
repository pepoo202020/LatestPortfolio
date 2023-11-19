import { Delete, Edit } from "@mui/icons-material";
import {
  Avatar,
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
import "./SkillTable.css";

const SkillTableContent = ({
  headNames,
  tableContent,
  editBtnHandler,
  deleteBtnHandler,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headNames.map((name, index) => (
              <TableCell
                key={index}
                align={`${index === 2 ? "right" : "left"}`}
                className={`${index === 2 ? "text-center" : ""}`}
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
                <Avatar>{content.image}</Avatar>
              </TableCell>
              <TableCell component="th" scope="row">
                {content.name}
              </TableCell>
              <TableCell align="right">
                <Link
                  onClick={editBtnHandler}
                  className={`lg:p-2  p-1  bg-orange-500 text-white rounded-xl mr-2 `}
                >
                  <Edit className="mobile" />
                  <span className="lg:inline-block hidden">Edit</span>
                </Link>
                <Link
                  onClick={deleteBtnHandler}
                  className="lg:p-2  p-1 bg-red-500 text-white rounded-xl "
                >
                  <Delete className="mobile" />{" "}
                  <span className="lg:inline-block hidden">Delete</span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillTableContent;
