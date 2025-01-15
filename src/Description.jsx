const Description = ({ color = "white", children, onClick }) => {
  return (
    <p style={{ color }} onClick={onClick}>
      {children}
    </p>
  );
};

export default Description;
