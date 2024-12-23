/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ItemProperties, Loader } from "../common/index";

// ItemDetails Component
export const ItemDetails = ({
  selectedId,
  items,
  onCloseItem,
  onAddViewed,
  Viewed,
  category,
  onUpdateNote,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [item, setItem] = useState(null);
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const ViewedItem = Viewed.find((item) => item.id === selectedId);
  const isViewed = !!ViewedItem;

  useEffect(() => {
    async function getItemDetails() {
      try {
        setIsLoading(true);
        setError("");
        let foundItem = items.find((item) => item.id === selectedId);
        if (!foundItem && ViewedItem) {
          foundItem = ViewedItem;
        }

        setItem(foundItem);
        if (ViewedItem) {
          setNote(ViewedItem.note || "");
        } else {
          setNote("");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getItemDetails();
  }, [selectedId, items, ViewedItem]);

  useEffect(() => {
    if (!item) return;
    document.title = `Item: ${item.name}`;
    return () => {
      document.title = "Elden Ring Items";
    };
  }, [item]);

  const handleAddWithNote = () => {
    onAddViewed({ ...item, note });
    setIsEditing(false);
  };

  const handleUpdateExistingNote = () => {
    onUpdateNote(selectedId, note);
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loader className="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  if (!item) {
    return null;
  }

  return (
    <div className="item-details">
      <div className="item-details__header">
        <button onClick={onCloseItem} className="back-button">
          ←
        </button>

        <div className="item-details__content">
          <div className="item-details__main">
            <div className="item-image-container">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-image-overlay" />
            </div>

            <div className="item-info">
              <h2 className="item-title">{item.name}</h2>
              <p className="item-description">{item.description}</p>
              <ItemProperties item={item} category={category} />
            </div>
          </div>

          <div className="item-notes">
            {!isViewed ? (
              <div className="add-note-container">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add a note about this item (optional)"
                  className="note-textarea"
                  rows={4}
                />
                <button onClick={handleAddWithNote} className="add-button">
                  Add to Collection
                </button>
              </div>
            ) : (
              <div className="existing-note-container">
                <div className="collection-status">
                  <span>Added to collection</span>
                  <svg
                    className="check-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {isEditing ? (
                  <div className="edit-note-container">
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Add a note about this item (optional)"
                      className="note-textarea"
                      rows={4}
                    />
                    <div className="button-group">
                      <button
                        onClick={handleUpdateExistingNote}
                        className="save-button"
                      >
                        Save Note
                      </button>
                      <button
                        onClick={() => {
                          setNote(ViewedItem.note || "");
                          setIsEditing(false);
                        }}
                        className="cancel-button"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="view-note-container">
                    <p className="note-label">Your Note:</p>
                    <p className="note-content">
                      {ViewedItem.note || "No note added yet"}
                    </p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="edit-button"
                    >
                      Edit Note
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
