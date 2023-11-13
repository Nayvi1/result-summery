import Rating from "./Rating";
import ResultText from "./ResultText";

function Result() {
  return (
    <div className="rounded-b-3xl w-full flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#6743FF] to-blue-700 sm:w-72 sm:rounded-3xl">
      <h4 className="text-violet-300 font-[hanken] font-semibold pt-4">
        Your Result
      </h4>
      <Rating />
      <ResultText />
    </div>
  );
}
export default Result;
