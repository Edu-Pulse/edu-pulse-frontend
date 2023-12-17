import PropTypes from "prop-types";
import clsx from "clsx";

const Select = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  className,
  options,
  isError = false,
}) => {

  return (
    <div className={className}>
      <label htmlFor={id} className="text-[14px] mb-1">
        {label}
      </label>
      <div className="flex items-center w-full">
        <select
          className={clsx(
            "py-2 px-4 w-full rounded-xl border outline-none focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400",
            isError ? "border-red-600" : "border-neutral-02",
            'appearance-none'
          )}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
        ))}
        </select>
      </div>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
    })
  ),
  isError: PropTypes.bool,
};

export default Select;
