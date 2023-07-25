import React from "react";
import { NewWorkoutForm } from "../components/NewWorkoutForm";
import { WorkoutFeed } from "../components/WorkoutFeed";
import { axiosApi } from "../service/axios";
import { UserContext } from "../context/UserContext";

interface WorkoutProps {
  id: string;
  name: string;
  date: string;
}

export const Home = () => {
  const { id } = React.useContext(UserContext);
  const [workoutList, setWorkoutList] = React.useState<WorkoutProps[]>([]);

  React.useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await axiosApi.get(`/workouts/${id}`);
        const workouts: WorkoutProps[] = res.data.content;
        setWorkoutList(workouts);
        console.log("ok");
      } catch (error) {
        console.log(error);
      }
    };
    getWorkouts();
  }, [id]);

  return (
    <main className="flex flex-col max-w-5xl mx-auto p-4">
      <NewWorkoutForm />
      <div className="mt-10 flex flex-col gap-5">
        {workoutList.map(({ id, name, date }) => (
          <WorkoutFeed
            key={id}
            workoutName={name}
            workoutDate={date}
            workoutId={id}
          />
        ))}
      </div>
    </main>
  );
};
