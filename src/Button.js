function Button({ text, work }) {
  return (
    <div>
      <button disabled={work}>{text}</button>
    </div>
  );
}

export default Button;
