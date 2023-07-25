import { Barbell, House, User } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <header className="bg-blue-700 py-2">
      <nav className="flex justify-between items-center max-w-screen-lg mx-auto">
        <div>Fithub</div>
        <form>
          <input type="text" className="bg-transparent border-2 border-black" />
        </form>
        <ul className="flex items-center justify-center gap-6">
          <li>
            <House size={32} />
          </li>
          <li>
            <Barbell size={32} />
          </li>
          <li>
            <User size={32} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
