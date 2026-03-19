const Button = ({ children, variant = 'primary', ...props }) => {
  const styles = {
    padding: '12px 24px',
    borderRadius: '6px',
    border: variant === 'primary' ? 'none' : `1px solid var(--clr-primary)`,
    backgroundColor: variant === 'primary' ? 'var(--clr-primary)' : 'transparent',
    color: variant === 'primary' ? 'white' : 'var(--clr-primary)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)'
  };

  return <button style={styles} {...props}>{children}</button>;
};

export default Button;