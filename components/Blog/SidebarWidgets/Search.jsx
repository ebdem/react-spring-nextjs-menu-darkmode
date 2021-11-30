import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./widget.module.scss";
import { useState } from "react";

const Search = ({ title, inputText, buttonText, onChange }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const [search, setSearch] = useState(0);
  const [disable, setDisable] = useState(true);
  const [searchTitle, setSearchTitle] = useState("Search");

  const checkPath = () => {
    if (router.pathname !== "/blog" && router.pathname !== "/blogSide") {
      router.push({
        pathname: "/blog",
        query: { search: search }
      });
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 3) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (+search === 0) {
      handleChange(e);
      setSearchTitle("Search");
    } else {
      document.getElementById("searchField").value = "";
      setSearchTitle(search);
      setSearch(0);
    }
    checkPath();
    onChange("search", { searchValue: search });
  };

  return (
    <Card className={`${styles.widgetcarditem} my-4`}>
      <Card.Header
        style={{ color: `${theme.foreground}` }}
        className={`h5 bg-${theme.type} `}
      >
        {searchTitle === "Search"
          ? title
          : `Search Results For: ${searchTitle}`}
      </Card.Header>
      <Card.Body>
        <InputGroup>
          <FormControl
            id="searchField"
            onChange={handleChange}
            placeholder={inputText}
          />
          <InputGroup.Append>
            <Button
              disabled={disable}
              variant="primary"
              type="button"
              onClick={handleClick}
            >
              {+search === 0 && disable === false ? "Clear" : buttonText}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};
export default Search;
