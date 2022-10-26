import styles from './Search.module.css';
import { FormEvent, useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(searchTerm);
  };

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button className="btn-primary" type="submit">
          Google Search
        </button>
        <button className="btn-primary" type="submit">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
