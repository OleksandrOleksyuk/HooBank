const Button = ({ children, styles }) => (
  <button
    type="button"
    className={`${styles} py-4 px-6 font-poppins font-medium text-lg text-primary outline-none rounded-lg`}
  >
    {children}
  </button>
);

export default Button;
