/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./index.css";
import {
  NavBar,
  Search,
  CategorySelect,
  Title,
} from "./Components/Navbar/index.js";

import { Box, ErrorMessage, Loader } from "./Components/common/index.js";
import { ItemList } from "./Components/ItemList/index";

import { ItemDetails } from "./Components/ItemDetails/ItemDetails";
import { ViewedSummary, ViewedItemsList } from "./Components/ViewedItems/index";
import { useEldenRingData } from "./hooks/index.js";
import Main from "./Components/Main.jsx";

// Main App Component
export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState("item");
  const [limit] = useState(100);

  const [Viewed, setViewed] = useState(() => {
    const storedValue = localStorage.getItem("Viewed");
    return JSON.parse(storedValue) || [];
  });

  const { items, isLoading, error } = useEldenRingData(query, category, limit);

  // Handler for category changes that also resets the search query
  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
    setQuery(""); // Reset search query when category changes
  }
  function handleSelectItem(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseItem() {
    setSelectedId(null);
  }

  function handleAddViewed(item) {
    setViewed((Viewed) => [...Viewed, item]);
  }

  function handleDeleteViewed(id) {
    setViewed((Viewed) => Viewed.filter((item) => item.id !== id));
  }

  function handleUpdateNote(itemId, newNote) {
    setViewed((Viewed) =>
      Viewed.map((item) =>
        item.id === itemId ? { ...item, note: newNote } : item
      )
    );
  }

  useEffect(() => {
    localStorage.setItem("Viewed", JSON.stringify(Viewed));
  }, [Viewed]);

  return (
    <>
      <NavBar>
        <Title />
        <Search query={query} setQuery={setQuery} />
        <CategorySelect
          category={category}
          setCategory={handleCategoryChange}
        />{" "}
        {/* Use handleCategoryChange instead of setCategory */}
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <ItemList
              items={items}
              onSelectItem={handleSelectItem}
              query={query}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <ItemDetails
              selectedId={selectedId}
              items={items}
              onCloseItem={handleCloseItem}
              onAddViewed={handleAddViewed}
              Viewed={Viewed}
              category={category}
              onUpdateNote={handleUpdateNote}
            />
          ) : (
            <>
              <ViewedSummary Viewed={Viewed} />
              <ViewedItemsList
                Viewed={Viewed}
                onDeleteViewed={handleDeleteViewed}
                onSelectItem={handleSelectItem}
                onCategoryChange={handleCategoryChange}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
