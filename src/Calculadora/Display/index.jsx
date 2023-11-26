
const Display = ({ value, history }) => {
  return (
    <div className="display">
      <input id="display" value={value} placeholder="0" disabled />
      <h2 id="history">{history}</h2>
    </div>
  );
};

export default Display;
