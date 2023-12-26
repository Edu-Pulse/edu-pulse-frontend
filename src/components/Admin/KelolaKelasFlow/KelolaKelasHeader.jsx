import Button from '../../UI/Button';
import clsx from 'clsx';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

const KelolaKelasHeader = ({
  handleOpenModal,
  searchTerm,
  setSearchTerm,
  setSelectedType,
  selectedType,
  typeOptions,
}) => {
  return (
    <section className="container md:flex justify-between px-6 my-3">
      <div className="font-Montserrat font-bold text-start text-xl mb-3 pt-3">
        Kelola Kelas
      </div>
      <div className="flex gap-2 justify-end">
        <div className="flex items-center justify-center w-full me-1">
          <input
            type="text"
            className="py-3 px-4 rounded-2xl w-full !placeholder-darkblue-04 outline-none !bg-darkblue-01 h-11"
            placeholder="Cari"
            size="md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="p-2 -ml-11 text-white rounded-xl bg-darkblue-05 hover:cursor-pointer">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </span>
        </div>
        <div className="flex items-center w-36">
          <select
            className={clsx(
              'py-2 px-2 w-full rounded-xl border outline-none focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400',
              'appearance-none bg-gray-200 cursor-pointer'
            )}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}>
            {typeOptions.map((type, index) => (
              <option
                key={index}
                value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <Button
          type="button"
          icon={<PlusCircleIcon className="h-5 w-5" />}
          iconPosition="left"
          size="sm"
          onClick={handleOpenModal}
          className="md:my-1">
          Add
        </Button>
      </div>
    </section>
  );
};

export default KelolaKelasHeader;
