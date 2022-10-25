import { useEffect, useRef } from "react";

function Search({ setSearch }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="search">
      <input
        ref={inputRef}
        className="input"
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
