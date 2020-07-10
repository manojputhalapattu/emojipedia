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
      {emojipedia.map(Details)}
    </div>
  );
};
export default Fef;
