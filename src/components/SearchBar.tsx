import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface IFormInput {
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    onSearch(data.searchTerm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center mt-4">
      <div className="relative w-full max-w-xl">
        <input
          {...register("searchTerm", { required: true })}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm md:text-lg md:py-3 md:px-4"
          placeholder="Search for cocktails..."
          type="search"
        />
        {errors.searchTerm && <span>This field is required</span>}
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
          {/* Icono de búsqueda y/o botón de envío */}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
