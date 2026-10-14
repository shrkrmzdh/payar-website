import "../styles/appinfo.css";
import Reveal from "../components/Reveal";

function AppInfo() {
  return (
    <section className="appinfo-page">

      {/* Hero */}
      <div className="appinfo-hero">
        <div className="container">
          <div className="appinfo-hero-content">
            <img className="appinfo-hero-image" src="./src/assets/appinfo.png"></img>
            <Reveal className="appinfo-hero-text">
            <span className="label">معرفی پایار</span>
            <h1>درباره اپ پایار</h1>
            <h2>یک راهکار هوشمند برای آرامش خانواده‌ها</h2>
            <p>
              پایار یک پلتفرم همراهی و مراقبت است که با هدف
              ساده‌تر کردن ارتباط میان سالمند، خانواده و همیار
              طراحی شده است. پایار با تمرکز بر نیازهای واقعی
              خانواده‌ها، تجربه‌ای ساده و مطمئن ایجاد می‌کند.
            </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Why Payar */}
      <div className="why-section">
        <div className="container">
          <Reveal className="section-header">
            <span className="label">چرا پایار؟</span>
            <h2>برای یک تجربه ساده‌تر و مطمئن‌تر</h2>
            <p>پایار با تمرکز بر نیازهای واقعی خانواده‌ها طراحی شده است.</p>
          </Reveal>
          <div className="why-grid">
            <Reveal className="why-card" delay={0}>
              <div className="why-card-icon">
                <img src="/src/assets/appinfo-card1.png"></img>
              </div>
              <div>
                <h3>همیشه در جریان باشید</h3>
                <p>با پایار راحت تر از وضعیت و امور روزمره 
                  عزیزتان باخبر بمانیدو با خیال آسوده تری همراه او باشید.
                </p>
              </div>
            </Reveal>
            <Reveal className="why-card" delay={100}>
              <div className="why-card-icon">
                <img src="/src/assets/appinfo-card2.png"></img>
              </div>
              <div>
                <h3>همراهی بدون پیچیدگی</h3>
                <p>پایار با محیطی ساده و قابل فهم طراحی شده تا استفاده از آن
                   برای سالمند و همیار راحت و بدون دردسر باشد.
                </p>
              </div>
            </Reveal>
            <Reveal className="why-card" delay={0}>
              <div className="why-card-icon">
                <img src="/src/assets/appinfo-card3.png"></img>
              </div>
              <div>
                <h3>مراقبت با خیال راحت تر</h3>
                <p>از مدیریت داروها و یادآوری ها تا دسترسی به مخاطبین ضروری،
                   ابزار های مورد نیاز برای یک همراهی مطمئن در کنار شماست.
                </p>
              </div>
            </Reveal>
            <Reveal className="why-card" delay={100}>
              <div className="why-card-icon">
                <img src="/src/assets/appinfo-card4.png"></img>
              </div>
              <div>
                <h3>نزدیک تر، حتی از دور</h3>
                <p>همیشه امکان حضور فیزیکی در کنار عزیزانمان نیست،
                   پایار کمک می‌کندارتباط و همراهی حتی در فاصله ها هم ادامه داشته باشد.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="key-features">
        
        <div className="container">
          <Reveal className="key-features-content">
            <span className="label">ویژگی‌های کلیدی اپ</span>
            <h2>همیشه در ارتباط، همیشه نزدیک</h2>
            <ul className="check-list">
              <li>
                <span className="check-icon">✓</span>
                کاربری ساده و راحت
              </li>
              <li>
                <span className="check-icon">✓</span>
                باخبر بودن از حال یکدیگر
              </li>
              <li>
                <span className="check-icon">✓</span>
                ارتباط سریع با خانواده
              </li>
              <li>
                <span className="check-icon">✓</span>
                همراهی مطمئن در کنار سالمند
              </li>
              <li>
                <span className="check-icon">✓</span>
                آرامش بیشتر برای خانواده
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Our Goal */}
      <div className="goal-section">
        <div className="container">
          <Reveal className="section-header">
            <span className="label">هدف ما</span>
            <h2>مراقبتی نزدیک‌تر، با آرامش بیشتر</h2>
          </Reveal>
          <Reveal className="goal-card">
            <p>
             هدف پایار این است که مراقبت از سالمندان را ساده تر و ارتباط 
             خانواده ها را نزدیک تر کند. ما تلاش می کنیم با ایجاد تجربه ای راحت و 
             قابل اعتماد، به خانواده ها کمک کنیم تا با خیال آسوده تر از عزیزانشان مراقبت کنند و 
             همیشه از حال یکدیگر باخبر باشند.
            </p>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

export default AppInfo;
