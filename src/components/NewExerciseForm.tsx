import React, { FormEvent } from "react";
import { axiosApi } from "../service/axios";

interface NewExerciseFormProps {
  workoutId: string;
  handleToggleNewExerciseModal: () => void;
}

export const NewExerciseForm = ({
  workoutId,
  handleToggleNewExerciseModal,
}: NewExerciseFormProps) => {
  const [name, setName] = React.useState("");
  const [weight, setWeight] = React.useState(0);
  const [reps, setReps] = React.useState(0);
  const [sets, setSets] = React.useState(0);

  const postExercise = async () => {
    const data = {
      name,
      workoutId,
      weight,
      reps,
      sets,
    };
    try {
      const res = await axiosApi.post("/exercises", JSON.stringify(data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await postExercise();
    handleToggleNewExerciseModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          className="border-2 border-blue-600"
          required
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weight"
          name="weight"
          onChange={({ target }) => setWeight(Number(target.value))}
          className="border-2 border-blue-600"
          required
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="reps">Reps</label>
        <input
          type="number"
          id="reps"
          name="reps"
          className="border-2 border-blue-600"
          onChange={({ target }) => setReps(Number(target.value))}
          required
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="sets">Sets</label>
        <input
          type="number"
          id="sets"
          name="sets"
          className="border-2 border-blue-600"
          onChange={({ target }) => setSets(Number(target.value))}
          required
        />
      </div>
      <button
        className="flex justify-center items-center gap-2 bg-blue-700 mt-5 rounded-sm p-2 font-bold text-lg"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
