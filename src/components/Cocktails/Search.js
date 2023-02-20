// import React from 'react'

// const Search = () => {
//   return (
//     <section className={classes.search}>
//         <h2>Search</h2>
//     </section>
//   )
// }

// export default Search

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, IconButton, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import classes from "./Search.module.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "2px 4px",
//     display: "flex",
//     alignItems: "center",
//     width: 400,
//     margin: "0 auto",
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
// }));

function SearchBar(props) {
  // const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <section className={classes.search}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </section>
  );
}

export default SearchBar;
