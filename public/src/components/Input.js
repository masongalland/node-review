import React from "react";

export default function Input({ selectValue, handleSelect, term, handleTerm, handleClick, button, options }) {
    let selectOptions = options.map((e, i) => {
        return (
            <option key={i} value={e}>{e === "letter" ? "name" : e}</option>
        )
    })
  return (
    <div>
      <select
        value={selectValue ? selectValue : selectOptions[0].value}
        onChange={e => handleSelect(e.target.value)}
      >
        {selectOptions}
      </select>
      <input
        value={term}
        onChange={e => handleTerm(e.target.value)}
      />
      <button
        onClick={() => handleClick(selectValue, term)}
      >
        {button}
      </button>
    </div>
  );
}
