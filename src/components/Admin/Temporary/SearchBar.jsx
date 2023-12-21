import {
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const SearchBar = ({ query, setQuery, searchData }) => {
  return (
    <div className="flex items-center justify-center w-full me-1">
        <input
							type="text"
							className="py-3 px-4 rounded-2xl w-full !placeholder-darkblue-04 outline-none !bg-darkblue-01 h-11"
							placeholder="Cari"
              size="md"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
						/>
						<span className="p-2 -ml-11 text-white rounded-xl bg-darkblue-05 hover:cursor-pointer"
            onClick={searchData}
            >
							<MagnifyingGlassIcon className="h-5 w-5" />
						</span>
        </div>
  )
}

export default SearchBar