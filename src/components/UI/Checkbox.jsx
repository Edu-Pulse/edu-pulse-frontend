import PropTypes from "prop-types";

const Checkbox = ({ label, id, value, onClick, isChecked }) => {
	return (
		<div className="flex gap-2">
			<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
				<input
					className="w-5 h-5 border-none outline-none"
					type="checkbox"
					value={value}
					id={id}
					name={id}
					onClick={onClick}
					checked={isChecked}
				/>
			</div>
			<label
				className="inline-block hover:cursor-pointer"
				htmlFor={id}
				name={id}
			>
				{label}
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	onClick: PropTypes.func,
	isChecked: PropTypes.bool,
};

export default Checkbox;
