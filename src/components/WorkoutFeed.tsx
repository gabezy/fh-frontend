import React from "react";
import { WorkoutFeedHeader } from "./WorkoutFeedHeader";
import { ExerciseTable } from "./ExerciseTable";
import { axiosApi } from "../service/axios";
interface WorkoutFeedProps {
  workoutName: string;
  workoutDate: string;
  workoutId: string;
}

export interface Exercise {
  id: string;
  name: string;
  weight: number;
  reps: number;
  sets: number;
  notes: string;
}

export const WorkoutFeed: React.FC<WorkoutFeedProps> = ({
  workoutName,
  workoutDate,
  workoutId,
}) => {
  const [showNewExerciseModal, setShowNewExerciseModal] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [exercisesList, setExerciseList] = React.useState<Exercise[]>([]);

  const getExercise = async () => {
    try {
      const resp = await axiosApi.get(`/exercises/list/${workoutId}`);
      const exercises: Exercise[] = resp.data.content;
      setExerciseList(exercises);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleIsExpanded = async () => {
    if (!isExpanded) {
      await getExercise();
    }
    setIsExpanded((prev) => !prev);
  };

  const handleToggleNewExerciseModal = () => {
    setShowNewExerciseModal((prev) => !prev);
  };

  return (
    <div>
      <WorkoutFeedHeader
        workoutId={workoutId}
        workoutDate={workoutDate}
        workoutName={workoutName}
        handleToggleIsExpanded={handleToggleIsExpanded}
        handleToggleNewExerciseModal={handleToggleNewExerciseModal}
        showNewExerciseModal={showNewExerciseModal}
      />
      {isExpanded && <ExerciseTable exercisesList={exercisesList} />}
    </div>
  );
};
