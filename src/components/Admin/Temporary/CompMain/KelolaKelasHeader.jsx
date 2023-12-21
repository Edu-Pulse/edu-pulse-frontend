import SearchBar from "../SearchBar";
import AddButton from "../AddButton";
import Dropdown from "../../../../pages/Dropdown";

const KelolaKelasHeader = ({ query, setQuery, searchData, handleOpenModal, type, setType, course }) => {
  return (
    <section className="container md:flex justify-between px-6 my-3">
      <div className="font-Montserrat font-bold sm:text-start text-center text-xl pt-3">Kelola Kelas</div>
      <div className="flex gap-2 justify-end">
      <SearchBar query={query} setQuery={setQuery} searchData={searchData} />
      <Dropdown type={type} setType={setType} course={course}/>
      <AddButton handleOpenModal={handleOpenModal} />
      </div>
    </section>
  )
}

export default KelolaKelasHeader