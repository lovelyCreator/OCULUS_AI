import PropTypes from "prop-types";

export default function Card({ data }) {
    console.log(data.color)
  return (
    <div className="bg-gray-950 text-white rounded-md p-8 flex flex-col items-start gap-4">
      <h3
        className={`border-l-2 border-${data.color} pl-2 text-lg font-bold`}
      >
        {data.title}
      </h3>
      <p className="text-start">{data.content}</p>
      <span className="flex items-center gap-2 mt-4">
        <span className={`h-2 w-2 bg-${data.color} rounded-full`}></span>
        {data.number}
      </span>
      <span className="text-left mt-2">{data.footer}</span>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    footer: PropTypes.string.isRequired,
  }).isRequired,
};
