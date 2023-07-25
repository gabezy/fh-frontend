import {
  ArrowDown,
  NotePencil,
  PersonSimpleRun,
  Trash,
} from "@phosphor-icons/react";
import React from "react";
import { NewExerciseModal } from "./NewExerciseModal";

interface WorkoutFeedProps {
  workoutName: string;
  workoutDate: string;
  workoutId: string;
}

export const WorkoutFeed: React.FC<WorkoutFeedProps> = ({
  workoutName,
  workoutDate,
  workoutId,
}) => {
  const [showNewExerciseModal, setShowNewExerciseModal] = React.useState(false);

  const handleToggleNewExerciseModal = () => {
    setShowNewExerciseModal((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-4 items-center bg-slate-700 px-5 py-3 rounded-lg">
      <h1>{workoutName}</h1>
      <div className="col-span-2 flex justify-center items-center gap-4">
        <h1>{workoutDate}</h1>
        <span className="p-2 cursor-pointer" title="expandir">
          <ArrowDown size={22} />
        </span>
      </div>
      <div className="flex items-center justify-end gap-5">
        <button
          type="button"
          title="Adicionar Exercicío"
          className="flex justify-center items-center gap-2 bg-green-600 p-3 rounded-md"
          onClick={handleToggleNewExerciseModal}
        >
          <PersonSimpleRun size={24} />
        </button>
        <button
          className="bg-red-600 p-3 rounded-md"
          type="button"
          title="Deletar Treino"
        >
          <Trash size={24} />
        </button>
        <button
          className="bg-blue-400 p-3 rounded-md"
          type="button"
          title="Editar Treino"
        >
          <NotePencil size={24} />
        </button>
      </div>
      {showNewExerciseModal && (
        <NewExerciseModal
          workoutId={workoutId}
          handleToggleNewExerciseModal={handleToggleNewExerciseModal}
        />
      )}
    </div>
  );
};
