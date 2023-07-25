import React from "react";
import { NewExerciseForm } from "./NewExerciseForm";
import { X } from "@phosphor-icons/react";

interface NewExerciseModalProps {
  workoutId: string;
  handleToggleNewExerciseModal: () => void;
}

export const NewExerciseModal: React.FC<NewExerciseModalProps> = ({
  handleToggleNewExerciseModal,
  workoutId,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-slate-50 bg-opacity-60">
      <div className="max-w-lg max-h-96 flex flex-col items-center justify-center bg-slate-200 p-10 rounded-md">
        <h1>New Exercise</h1>
        <div
          className="relative flex top-[-25px] left-32 cursor-pointer"
          onClick={handleToggleNewExerciseModal}
        >
          <X size={32} />
        </div>
        <div>
          <NewExerciseForm
            workoutId={workoutId}
            handleToggleNewExerciseModal={handleToggleNewExerciseModal}
          />
        </div>
      </div>
    </div>
  );
};
