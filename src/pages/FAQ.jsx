import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/faq.css";
import Reveal from "../components/Reveal";

function FAQ() {
  const [open, setOpen] = useState(null);


  const questions = [
  {
    question: "پایار چیست و چه کاربردی دارد؟",
    answer:
      "پایار اپلیکیشنی برای همراهی و مراقبت بهتر از سالمندان است که ارتباط میان سالمند، همیار و خانواده را ساده‌تر می‌کند. با پایار می‌توانید برنامه دارویی را مدیریت کنید، حال روزانه سالمند را پیگیری کنید و در مواقع نیاز راحت‌تر با یکدیگر در ارتباط باشید."
  },
  {
    question: "چگونه در پایار ثبت‌نام کنم؟",
    answer:
      "برای شروع، وارد اپلیکیشن شوید و مراحل اولیه را دنبال کنید. بسته به اینکه به‌عنوان سالمند یا همیار از پایار استفاده می‌کنید، وارد بخش مربوط به خودتان شوید تا به امکانات مخصوص همان بخش دسترسی داشته باشید."
  },
  {
    question: "چگونه حساب سالمند و همیار را به هم متصل کنم؟",
    answer:
      "برای اتصال حساب‌ها، از قابلیت اتصال با کد QR استفاده کنید. با اسکن کد مربوطه می‌توانید حساب سالمند و همیار را به یکدیگر متصل کنید تا دسترسی به اطلاعات و امکانات موردنیاز آسان‌تر شود."
  },
  {
    question: "چگونه برنامه دارویی سالمند را تنظیم کنم؟",
    answer:
      "همیار می‌تواند داروهای سالمند را همراه با اطلاعاتی مانند نام دارو، مقدار مصرف و زمان‌های یادآوری ثبت کند. با تنظیم برنامه دارویی، پیگیری زمان مصرف داروها در طول روز راحت‌تر می‌شود."
  },
  {
    question: "آیا می‌توان برای یادآوری دارو از صدای اعضای خانواده استفاده کرد؟",
    answer:
      "بله، در بخش یادآوری دارو امکان ضبط پیام صوتی وجود دارد تا یادآوری‌ها با صدایی آشنا و صمیمی‌تر انجام شوند. این قابلیت می‌تواند تجربه استفاده از برنامه را برای سالمند دلپذیرتر کند."
  },
  {
    question: "چگونه می‌توانم از حال روزانه سالمند باخبر شوم؟",
    answer:
      "سالمند می‌تواند حال روزانه خود را از طریق اپلیکیشن ثبت کند. همیار نیز می‌تواند وضعیت ثبت‌شده را مشاهده کند و از اطلاعاتی که سالمند به اشتراک می‌گذارد باخبر شود."
  },
  {
    question: "اگر سالمند به کمک نیاز داشته باشد، چه کاری می‌تواند انجام دهد؟",
    answer:
      "سالمند می‌تواند از گزینه «نیاز به کمک دارم» در اپلیکیشن استفاده کند. همچنین امکان ثبت مخاطبان ضروری وجود دارد تا اطلاعات تماس آن‌ها در مواقع نیاز در دسترس باشد."
  },
  {
    question: "آیا استفاده از پایار برای سالمندان دشوار است؟",
    answer:
      "پایار با در نظر گرفتن نیازهای سالمندان طراحی شده است. نوشته‌های خوانا، دکمه‌های واضح و دسترسی ساده به بخش‌هایی مانند برنامه دارویی و درخواست کمک، استفاده از امکانات اصلی برنامه را راحت‌تر می‌کند."
  }
];

  return (
    <main className="faq-page">

      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <span className="label">پاسخ به سوالات رایج کاربران</span>
          <h1>سوالات متداول</h1>
          <p>
            در این بخش به پرسش‌های پرتکرار کاربران پاسخ داده‌ایم.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="faq-list-section">
        <div className="container">
          <div className="faq-list">
            {questions.map((item, index) => (
              <Reveal
                className={`faq-item ${open === index ? "active" : ""}`}
                key={index}
                delay={Math.min(index, 4) * 70}
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="plus">+</span>
                </button>
                {open === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Question */}
      <section className="still-question">
        <div className="container">
          <Reveal className="still-question-card">
            <div className="still-question-content">
              <h2>هنوز سوالی دارید؟</h2>
              <p>
               اگر پاسخ سؤالتان را پیدا نکردید، با ما در ارتباط باشید.
                تیم پشتیبانی پایار آماده است تا به سؤالات شما پاسخ دهد و راهنمایی‌تان کند.
              </p>
            </div>
            <div className="still-question-image">
              <div className="still-question-illustration"></div>
            </div>
          </Reveal>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Link to="/Contact" className="btn-primary">
              ارتباط با ما
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default FAQ;
