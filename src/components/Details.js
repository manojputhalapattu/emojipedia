import React from "react";
import emojipedia from  "../emojipedia";
function Details({ emoji, name, meaning }) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emoji}
            </span>
            <span>{name}</span>
          </dt>
          <dd>{meaning}</dd>
        </div>
      </dl>
    </div>
  );
}
const Fef = () => {
  return (
    <div>
      <Details
        emoji={emojipedia[0].emoji}
        name={emojipedia[0].name}
        meaning={emojipedia[0].meaning}
      />
      <Details
        emoji={emojipedia[1].emoji}
        name={emojipedia[1].name}
        meaning={emojipedia[1].meaning}
      />
      <Details
        emoji={emojipedia[2].emoji}
        name={emojipedia[2].name}
        meaning={emojipedia[2].meaning}
      />
    </div>
  );
};
export default Fef;
