export default function Button({
  children,
  type = 'button',
  onClick,
  className = 'button',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}