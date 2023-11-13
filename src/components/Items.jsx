/* eslint-disable react/prop-types */

function Items({ icon, category, score }) {
  const color = {
    Reaction: "text-red-500",
    Memory: "text-yellow-500",
    Verbal: "text-emerald-500",
    Visual: "text-blue-500",
  };

  return (
    <div className="flex justify-between p-3 mt-3 mb-3">
      <div className="w-40 flex gap-3">
        <img src={icon} alt="" />
        <p className={`${color[category]} text-sm`}>{category}</p>
      </div>
      <div>
        <span>{score} </span>
        <span className="text-gray-400">/ 100</span>
      </div>
    </div>
  );
}
export default Items;
