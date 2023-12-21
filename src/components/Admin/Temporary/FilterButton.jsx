import Button from "../../UI/Button"
import {
	FunnelIcon,
} from "@heroicons/react/24/outline";

const FilterButton = ({ handleFilter }) => {
  return (
    <Button
            type="button"
            icon={<FunnelIcon className="h-5 w-5" />}
            className="h-11"
            iconPosition="left"
            color="success"
            size="sm"
            onClick={handleFilter}
          >
            Filter
          </Button>
  )
}

export default FilterButton