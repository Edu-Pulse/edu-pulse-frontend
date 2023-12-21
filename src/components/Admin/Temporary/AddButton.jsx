import Button from "../../UI/Button"
import {
	PlusCircleIcon,
} from "@heroicons/react/24/outline";

const AddButton = ({ handleOpenModal }) => {
  return (
    <Button
            type="button"
            icon={<PlusCircleIcon className="h-5 w-5" />}
            iconPosition="left"
            size="sm"
            onClick={handleOpenModal}
          >
            Add
          </Button>
  )
}

export default AddButton