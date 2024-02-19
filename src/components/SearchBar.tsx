import { useForm, SubmitHandler } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface IFormInput {
  searchTerm: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    onSearch(data.searchTerm);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center mt-4">
        <div className="relative w-full max-w-xl">
          <button type="submit" className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            <FiSearch className="w-5 h-5" />
          </button>
          <input
            {...register("searchTerm", { required: "This field is required" })}
            className="block w-full pl-12 pr-3 py-2 font-outfit font-extralight border border-gray-300 rounded-full leading-5 bg-white text-gray-500 placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:border-white focus:ring-primary sm:text-sm md:text-lg lg:text-xl"
            placeholder="Search by ingredients: “banana”, “lime”, “gin”..."
            type="search"
          />
        </div>
      </form>
  );
};
