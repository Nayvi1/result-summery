/* eslint-disable react/prop-types */

import Button from "./Button";
import Items from "./Items";

function Summery({ data }) {
  return (
    <div className="p-6 font-semibold">
      <p>Summery</p>

      {data
        ? data.map((el, i) => {
            return (
              <Items
                key={`${i}-xx`}
                category={el.category}
                score={el.score}
                icon={el.icon}
              />
            );
          })
        : null}
      <Button />
    </div>
  );
}
export default Summery;
