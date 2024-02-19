import { useState } from 'react';

export const useCocktailDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return { isModalOpen, toggleModal };
};