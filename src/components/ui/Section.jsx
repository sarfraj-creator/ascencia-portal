// src/components/ui/Section.jsx
const Section = ({ children, bg = 'white', title }) => {
  const bgColor = bg === 'soft' ? 'var(--clr-bg-soft)' : 'var(--clr-bg-white)';
  
  return (
    <section style={{ backgroundColor: bgColor }}>
      <div className="container">
        {title && <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: 'var(--space-lg)',
          color: 'var(--clr-primary)' 
        }}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;