import { useState, useRef, useEffect, useCallback } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, IconButton, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import classes from "./Search.module.css";

//   return (
//     <section className={classes.search}>
//       <Paper component="form" className={classes.root}>
//         <InputBase
//           className={classes.input}
//           placeholder="Search"
//           inputProps={{ "aria-label": "search" }}
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <IconButton
//           type="submit"
//           className={classes.iconButton}
//           aria-label="search"
//         >
//           <SearchIcon />
//         </IconButton>
//       </Paper>
//     </section>
//   );
// }

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const API_BASE_URL = 'https://www.thecocktaildb.com';
  const apiURL = `${API_BASE_URL}/api/json/v1/1/search.php?s=`;
  
  const inputRef = useRef()
  const [cocktails, setCocktails] = useState([])
  const timeout = useRef()

  useEffect(() => {
    
  }, [])

  const handleDebounceSearch = () => {
    //Clear the previous timeout.
    clearTimeout(timeout.current)

    // If there is no search term, do not make API call
    if (!inputRef.current.value.trim()) {
      setCocktails([])
      return
    }
    timeout.current = setTimeout(() => {
      fetch(`${apiURL}${inputRef.current.value}`)
        .then(async response => {
          if (!response.ok) {
            console.log("error fetching data!")
          } else {
            const data = await response.json()
            setCocktails(data)
          }
        })
        .catch(err => {
          console.error(err)
        })
    }, 800)
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleDebounceSearch}
        className="search-input"
      />
      {/* Display the result if search term is not empty and results are present */}
      {inputRef.current?.value && cocktails.length > 0 && (
        <ul>
          {cocktails.map(animal => {
            return <li key={animal.id}>{animal.name}</li>
          })}
        </ul>
      )}
    </div>
  );
}
export default SearchBar;