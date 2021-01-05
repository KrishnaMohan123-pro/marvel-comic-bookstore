import React, { Fragment, useState, useEffect } from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { fetchWithStartName } from "../../actions/dataFetch";
import Link from "react-browser-router";
export default function DropDownOptions(props) {
  const [doc, setDoc] = useState({});
  console.log(props.name);
  useEffect(() => {
    fetchWithStartName(props.name).then((res) => setDoc(res));
  }, []);
  if (Object.keys(doc).length === 0) {
    return null;
  }
  const characters = [];
  doc.data.results.forEach((character) => {
    characters.push({ id: character.id, name: character.name });
  });
  return (
    <div
      style={{
        height: "10rem",
        overflowY: "scroll",
        position: "absolute",
        top: "80%",
        left: "8%",
        width: "30rem",
        backgroundColor: "white",
      }}
    >
      <Table>
        <TableBody>
          {characters.map((character) => {
            return (
              <TableRow key={character.id}>
                <TableCell component="th">
                  <a
                    href={"/character/" + character.id}
                    style={{ color: "black" }}
                  >
                    {character.name}
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
