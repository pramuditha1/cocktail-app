import { useState, useEffect } from "react";
import { InputBase, IconButton, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import classes from "./Search.module.css";
import { search } from "../../store/actions/cocktails";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  //perform lodash debounce search
  const debouncedSearch = debounce((term) => {
    dispatch(search(query));
  }, 500);

  useEffect(() => {
    query.length > 0 && debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <section className={classes.search}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
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
};

export default SearchBar;
