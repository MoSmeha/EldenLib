// ViewedItems Components
/* eslint-disable react/prop-types */
export default function ViewedSummary({ Viewed }) {
  const numItems = Viewed.length;

  return (
    <div className="summary">
      <div className="nbr-inList">
        <p>
          <span>
            You have <strong>{numItems} items</strong> in your list
          </span>
        </p>
      </div>
    </div>
  );
}
