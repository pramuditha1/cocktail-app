import { useState, useRef, useEffect } from "react";
import { InputBase, IconButton, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import classes from "./Search.module.css";
import { apiUrlSearch } from "../../constants/urls";
import { setSearchResults, clearSearchResults } from "../../store/actions/cocktails";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const timeout = useRef();

  //perform debounce search

  // useEffect(() => {
  //   handleDebounceSearch(query);
  // }, [query]);

  // const handleDebounceSearch = (searchQuery) => {
  //   //Clear the previous timeout
  //   clearTimeout(timeout.current);
  //   if (!searchQuery.trim()) {
  //     setCocktails([]);
  //     return;
  //   }
  //   timeout.current = setTimeout(() => {
  //     fetch(`${apiUrlSearch}${searchQuery}`)
  //       .then(async (response) => {
  //         if (!response.ok) {
  //           console.log("error fetching data!");
  //         } else {
  //           const data = await response.json();
  //           setCocktails(data.drinks);
  //           console.log("££££££££ search : ", cocktails)
  //           dispatch(setSearchResults(cocktails))
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }, 400);
  // };

  //button click searchResults

  const handleButtonClickSearch = (e) => {
    e.preventDefault();

    fetch(`${apiUrlSearch}${query}`)
      .then(async (response) => {
        if (!response.ok) {
          console.log("error fetching data!");
        } else {
          dispatch(clearSearchResults())
          const data = await response.json();
          setCocktails(data.drinks);
          console.log("££££££££ search : ", cocktails);
          dispatch(setSearchResults(cocktails));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //lodash searchResults
  // const debouncedSearch = debounce((term) => {
  //   fetch(`${apiUrlSearch}${query}`)
  //       .then(async (response) => {
  //         if (!response.ok) {
  //           console.log("error fetching data!");
  //         } else {
  //           const data = await response.json();
  //           setCocktails(data.drinks);
  //           console.log("££££££££ search : ", cocktails)
  //           cocktails && dispatch(setSearchResults(cocktails))
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  // }, 500);

  // useEffect(() => {
  //   query.length > 0 && debouncedSearch(query);
  // }, [query, debouncedSearch]);

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
          onClick={handleButtonClickSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </section>
  );
};

export default SearchBar;
