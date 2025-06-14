import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div id="app_base" className="">
      <header id="app_header">
        <Header />
      </header>
      <main id="app_content">
        <Content />
      </main>
      <footer id="app_footer">
        <Footer />
      </footer>
    </div>
  );
}
