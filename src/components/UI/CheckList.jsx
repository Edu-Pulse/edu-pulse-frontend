import PropTypes from "prop-types";

const CheckList = ({ marginTop }) => {
  return (
    <span className={`sm:ml-[26rem] ml-[19.5rem] h-6 absolute mt-${marginTop}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#188E55"/>
          </svg>
        </span>
  )
}

CheckList.propTypes = {
  marginTop: PropTypes.string
}

export default CheckList