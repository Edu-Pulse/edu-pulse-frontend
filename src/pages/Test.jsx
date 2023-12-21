import { useState } from 'react';
import Button from '../components/UI/Button';
import {
	FunnelIcon,
} from "@heroicons/react/24/outline";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(selectedOption);

  const options = [
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    { id: 3, value: 'Option 3' },
    // Add more options as needed
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left inline-block">
      <div>
        <span className="rounded-md shadow-sm">
          <Button
            type="button"
            onClick={toggleDropdown}
            icon={<FunnelIcon className="h-5 w-5" />}
            iconPosition="left"
            color="success"
            size="md"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption ? selectedOption.value : 'Filter'}
            {/* <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg> */}
          </Button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-end absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => selectOption(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
