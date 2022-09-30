export default function Choice({ letChoice, choic }) {
  return (
    <>
      <img src={choic} alt={choic} onClick={() => letChoice(choic)}></img>
    </>
  );
}
