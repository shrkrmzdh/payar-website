import "../styles/about.css";
import Reveal from "../components/Reveal";

function About() {

  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>Pixend</h1>
          <p>
          پیکسند تیمی از علاقه‌مندان و متخصصان نرم‌افزار و هوش مصنوعی است که با خلاقیت و همکاری،
           ایده‌ها را به راهکارهایی کاربردی تبدیل می‌کند
            تا نیازهای واقعی کاربران را پاسخ دهد و تجربه‌ای بهتر بسازد.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="about-description">
        <div className="container">
          <Reveal className="about-desc-content" direction="right">
            <h2>ایده‌هایی برای دنیای هوشمندتر</h2>
            <p>
             ما در پیکسند با ترکیبی از انگیزه، تجربه و علاقه به فناوری، تلاش می‌کنیم راهکارهایی کاربردی طراحی کنیم
              که پاسخگوی نیازهای واقعی کاربران باشند. هدف ما تبدیل ایده‌ها به محصولاتی مفید و قابل اعتماد
               است که استفاده از فناوری را ساده‌تر کنند و تجربه‌ای بهتر برای کاربران رقم بزنند.
            </p>
          </Reveal>
          <Reveal className="about-desc-image" direction="left" delay={120}>
            <div className="about-image-placeholder">
              <div className="about-image-placeholder">
              <img src="/src/assets/title.png"></img>
              
            </div>
              
            </div>
          </Reveal>
        </div>
      </section>

      

      {/* Trust */}
      <section className="trust-section">
        <div className="container">
          <Reveal className="section-header">
            <span className="label">با اعتماد به حرفه‌ای‌ها</span>
            <h2>ایده‌های نو، سازندگان راهکارهای هوشمند</h2>
          </Reveal>
          <Reveal className="trust-card" delay={100}>
            <p>
             ما در پیکسند با تکیه بر مهارت‌ها و تجربه‌های متنوع، تیمی خلاق و متخصص تشکیل داده‌ایم
              که با همکاری و تعهد، ایده‌ها را به راهکارهای هوشمند و کاربردی تبدیل می‌کند.
               هدف ما ساخت محصولاتی باکیفیت است که نیازهای واقعی کاربران را پاسخ دهند
                و تجربه‌ای ساده و قابل اعتماد برای آن‌ها رقم بزنند.
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  );
}

export default About;
