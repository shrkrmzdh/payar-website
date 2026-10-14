import { Link } from "react-router-dom";
import "../styles/home.css";
import { useEffect, useRef } from "react";
import Reveal from "../components/Reveal";

import {
  UsersRound,
  Pill,
  HeartPulse,
  Volume2,
  PhoneCall,
  Hand
} from "lucide-react";


function Home() {

  const rolesRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("roles-visible");
        } else {
          entry.target.classList.remove("roles-visible");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (rolesRef.current) {
    observer.observe(rolesRef.current);
  }

  return () => {
    if (rolesRef.current) {
      observer.unobserve(rolesRef.current);
    }
  };
}, []);
  return (
    <main className="home">
      {/* Hero */}
<section className="hero">

  <img
    className="hero-bg"
    src="./src/assets/hero.png"
    alt="سالمند و همیار پایار"
  />

  <div className="hero-overlay"></div>

  <div className="container">
    <div className="hero-content">

      <h1>
        <span>پایار</span>،  همیشه مطمئن، همیشه همراه
      </h1>

      <p>
        برای کسانی که دوستشان دارید، حتی وقتی نمی توانید همیشه کنارشان باشید. پایار کمک می کند 
      از حال عزیزانتان باخبر باشید و مراقبت از آن ها را با خیال آسوده تری دنبال کنید.
      </p>

      <div className="hero-buttons">

        <Link to="/AppInfo" className="btn-outline">
          آشنایی بیشتر با پایار

          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </Link>

        <a href="#download-cta" className="btn-primary">
          دانلود برنامه
        </a>

      </div>

    </div>
  </div>

</section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <Reveal className="video-content" direction="right">
            <h2>پایار را بهتر بشناسید</h2>
            <p>
              در این ویدئو با امکانات پایار و نحوه استفاده از آن آشنا شوید، از مراقبت و پیگیری 
              وضعیت عزیزانتان تا دریافت اعلان ها و همراهی آسان تر خانواده.
            </p>
            <button className="btn-outline video-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              تماشای ویدئو
            </button>
          </Reveal>
          <Reveal className="video-wrapper" direction="left" delay={120}>
            
          </Reveal>
        </div>
      </section>

      {/* Roles */}
      <section className="roles-section" ref={rolesRef}>
        <div className="container">
          <div className="role-card-2">
            <div className="role-icon"></div>
            <h3>سالمند</h3>
            <p>
              با یادآوری داروها، ثبت حال روزانه و امکان درخواست کمک، همیشه راهی ساده برای ارتباط با خانواده در اختیار داری.
               محیط برنامه با طراحی خوانا و امکانات کاربردی کمک می‌کند راحت‌تر از برنامه استفاده کنی 
               و با آرامش بیشتری کارهای روزمره‌ات را انجام دهی.
            </p>
          </div>
          <div className="role-card-1">
            <div className="role-icon"></div>
            <h3>همیار</h3>
            <p>
            با همراه سالمند می‌توانی اطلاعات سالمند، برنامه داروها و یادآوری‌های روزانه
             را مدیریت کنی و از وضعیت روزانه او باخبر شوی.
              همچنین با تنظیم اطلاعات ضروری و ضبط پیام‌های صوتی برای یادآوری داروها،
              می‌توانی حتی از راه دور هم همراه مطمئن‌تری برای عزیزانت باشی.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section">
        <div className="container">
          <Reveal className="section-title">
            <h2>قابلیت‌های پایار</h2>
          </Reveal>
          <div className="capabilities-grid">
            <Reveal className="feature-card" delay={0}>
              <div className="feature-icon">
                <UsersRound size={30} color="#69A87B" />
              </div>
              <h3>مدیریت و همراهی سالمند</h3>
              <p>مدیریت اطلاعات و پیگیری وضعیت سالمند در یک محیط کاربردی.</p>
            </Reveal>
            <Reveal className="feature-card" delay={100}>
              <div className="feature-icon">
                <Pill size={32} color="#69A87B" />
              </div>
              <h3>یادآوری هوشمند داروها</h3>
              <p>تنظیم زمان مصرف داروها و یادآوری به‌موقع آن‌ها.</p>
            </Reveal>
            <Reveal className="feature-card" delay={200}>
              <div className="feature-icon">
                <HeartPulse size={30} color="#69A87B" />
              </div>
              <h3>پیگیری حال روزانه</h3>
              <p>ثبت حال سالمند با چند انتخاب ساده و سریع.</p>
            </Reveal>
            <Reveal className="feature-card" delay={0}>
              <div className="feature-icon">
                <Volume2 size={30} color="#69A87B" />
              </div>
              <h3>یادآوری با صدای آشنا</h3>
              <p>پخش صدای اعضای خانواده هنگام یادآوری داروها.</p>
            </Reveal>
            <Reveal className="feature-card" delay={100}>
              <div className="feature-icon">
                <PhoneCall size={30} color="#69A87B" />
              </div>
              <h3>دسترسی سریع در مواقع ضروری</h3>
              <p>دسترسی سریع به مخاطبان ضروری در مواقع نیاز.</p>
            </Reveal>
            <Reveal className="feature-card" delay={200}>
              <div className="feature-icon">
                <Hand size={30} color="#69A87B" />
              </div>
              <h3>محیط ساده و مناسب کاربران</h3>
              <p>محیطی خوانا و آسان برای استفاده راحت‌تر سالمندان.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="container">
          <Reveal className="section-title">
            <h2>پایار چگونه کار می‌کند؟</h2>
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="step-card">
            <span className="step-number">01</span>
            <h3>شروع با یک انتخاب</h3>
            <p>نقش خودت رو انتخاب کن؛ سالمند یا همیار، پایار برای هرکدوم امکانات مخصوصی داره.</p>
            <img src="/src/assets/step1.png" className="step-phone" />
            <img src="" className="step-leaf" />
          </Reveal>
          <Reveal className="step-card">
            <span className="step-number">02</span>
            <h3>به هم وصل بشین، همراه‌تر باشین</h3>
            <p>کد اتصال رو وارد کن یا QR کد رو اسکن کن تا به حساب همدیگه وصل بشین.</p>
            <img src="/src/assets/step2.png" className="step-phone" />
          </Reveal>
          <Reveal className="step-card">
            <span className="step-number">03</span>
            <h3>همراهی از همین‌جا شروع می‌شه</h3>
            <p>از صفحه اصلی همیار می‌تونی به بخش‌های مختلف پایار دسترسی داشته باشی و وضعیت سالمندت رو راحت‌تر پیگیری کنی.</p>
            <img src="/src/assets/step3.png" className="step-phone" />
          </Reveal>
          <Reveal className="step-card">
            <span className="step-number">04</span>
            <h3>مراقب زمان داروها باش</h3>
            <p>برنامه دارویی سالمند رو ببین، از زمان مصرف داروها باخبر شو و مطمئن‌تر پیگیر روند مصرفشون باش.</p>
            <img src="/src/assets/step4.png" className="step-phone" />
          </Reveal>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download-cta" className="download-cta">
        <div className="container">
          <Reveal className="download-banner">
            <div className="download-banner-content">
              <h2>همین الان پایار را دانلود کنید</h2>
              <p>
                با دانلود اپلیکیشن پایار، همراهی مطمئن برای سالمندان
                خود را شروع کنید. در کمتر از چند دقیقه ثبت‌نام کنید
                و از امکانات پایار بهره‌مند شوید.
              </p>
              <div className="download-stores">
                <a href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Store
                </a>
                <a href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
            <div className="download-banner-phone">
              <div className="download-phone-mockup">
                <div className="mini-logo">پایار</div>
                <div className="mini-items">
                  <div className="mini-item"></div>
                  <div className="mini-item"></div>
                  <div className="mini-item"></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}

export default Home;
