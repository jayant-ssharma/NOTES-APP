import type { Note } from "../App";

type RightSideProps = {
  notes: Note[];
  onDelete: (indexToDelete: number) => void;
};

const RightSide = ({ notes, onDelete }: RightSideProps) => {
  return (
    <div className="w-full lg:w-1/2">
      <h1 className=" pt-8 px-8 pb-5 text-2xl lg:text-4xl">
        Recent Notes
      </h1>
      <div className="flex flex-wrap px-8 mt-4 gap-6">
         {notes.map(function(elem,idx) {
          return <div key={idx} className="relative h-64 w-52 rounded-xl bg-white pt-3 px-4  text-black shadow-lg overflow-auto break-all">
            <button
              type="button"
              onClick={() => onDelete(idx)}
              className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white hover:bg-red-600"
            >
              X
            </button>
            <h2 className="text-xl font-extrabold break-all">{elem.title}</h2>
            <p className="text-lg leading-6 break-">{elem.description}</p>
          </div>
         })}
      </div>
    </div>

  );
};

export default RightSide;