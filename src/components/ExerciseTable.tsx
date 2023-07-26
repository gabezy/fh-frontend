import { Exercise } from "./WorkoutFeed";

interface ExerciseTableProps {
  exercisesList: Exercise[];
}

export const ExerciseTable = ({ exercisesList }: ExerciseTableProps) => {
  return (
    <table className="w-full mt-2 border-separate border-spacing-y-3">
      <thead className="">
        <tr className="text-left">
          <th className="text-center">Exercício</th>
          <th>Peso (KG)</th>
          <th>Reps</th>
          <th>Sets</th>
        </tr>
      </thead>
      <tbody className="mt-1">
        {exercisesList.map(({ id, name, weight, reps, sets }) => {
          return (
            <tr key={id} className="text-left">
              <td className="text-center border-b-2 border-gray-200">{name}</td>
              <td className="border-b-2 border-gray-200">{weight}</td>
              <td className="border-b-2 border-gray-200">{reps}</td>
              <td className="border-b-2 border-gray-200">{sets}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
