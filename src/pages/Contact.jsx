import { useState } from "react";
import "../styles/contact.css";
import Reveal from "../components/Reveal";

function Contact() {
  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="label">پاسخگوی شما هستیم</span>
          <h1>ارتباط با ما</h1>
          <p>
           در پیکسند مشتاق شنیدن نظرات و پیشنهادهای شما هستیم. 
           اگر سؤالی دارید یا به راهنمایی نیاز دارید، خوشحال می‌شویم با ما در ارتباط باشید.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-container">
        <div className="container">


          <Reveal className="contact-form-wrapper">
            <h2>فرم ثبت درخواست</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>نام و نام خانوادگی <span className="required">*</span></label>
                <input type="text" placeholder="نام خود را وارد کنید" />
              </div>
              <div className="form-group">
                <label>ایمیل <span className="required">*</span></label>
                <input type="email" placeholder="ایمیل خود را وارد کنید" />
              </div>
              <div className="form-group">
                <label>موضوع پیام <span className="required">*</span></label>
                <select>
                  <option value="">انتخاب کنید</option>
                  <option value="support">پشتیبانی</option>
                  <option value="suggestion">پیشنهاد</option>
                  <option value="collaboration">همکاری</option>
                </select>
              </div>
              <div className="form-group">
                <label>متن پیام <span className="required">*</span></label>
                <textarea rows="5" placeholder="پیام خود را بنویسید"></textarea>
              </div>
              <button type="submit" className="btn-primary">
                ارسال پیام
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </Reveal>

        </div>
      </section>

    </main>
  );
}

export default Contact;
