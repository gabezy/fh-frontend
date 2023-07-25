import React, { FormEvent } from "react";
import { axiosApi } from "../service/axios";
import { UserContext } from "../context/UserContext";

export const NewWorkoutForm = () => {
  const [workoutName, setWorkoutName] = React.useState("");
  const [workoutDate, setWorkoutDate] = React.useState(null || String);
  const { id } = React.useContext(UserContext);

  const registerWorkout = async () => {
    const data = {
      name: workoutName,
      userId: id,
      workoutDate: workoutDate,
    };
    try {
      const resp = await axiosApi.post("/workouts", JSON.stringify(data));
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterWorkout = async (event: FormEvent) => {
    event.preventDefault();
    await registerWorkout();
  };

  return (
    <form
      className="flex flex-col justify-start items-center bg-gray-300"
      onSubmit={handleRegisterWorkout}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Nome do treino</label>
        <input
          type="text"
          className="bg-transparent border-2 border-blue-500"
          id="name"
          name="name"
          value={workoutName}
          onChange={({ target }) => setWorkoutName(target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="date">data do treino</label>
        <input
          type="date"
          className="bg-transparent border-2 border-blue-500"
          id="date"
          lang="pt-BR"
          onChange={({ target }) => setWorkoutDate(target.value)}
          required
        />
      </div>
      <button type="submit" className="font-bold">
        Registrar treino
      </button>
    </form>
  );
};
