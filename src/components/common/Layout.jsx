import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-content" style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;