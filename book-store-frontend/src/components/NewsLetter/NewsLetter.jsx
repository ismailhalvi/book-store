import React from "react";
import "./NewsLetterStyle.css";
import { MdMessage } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";
import api from "../../api";
import { MdLocalOffer, MdMenuBook, MdRecommend, MdNotifications } from "react-icons/md";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type , setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setMessage("الرجاء ادخال بريدك الالكتروني");
      return;
    }



    try {
      await api.post("/newsletters", {
        data: {
          email: email,
        },
      });

      setMessage("تم الاشتراك بنجاح");
      setEmail("");
    } catch (error) {
      setMessage("حدث خطاء ما");
    }

  };

  return (
    <div className="newsletter">
      <div className="NewsInner">

<div className="newsFet"> 
 
  <div className="f"> 
    <div className="news-icon"> 
      <MdLocalOffer /> 
    </div> 
    <span>عروض حصرية</span> 
  </div> 
 
  <div className="f"> 
    <div className="news-icon"> 
      <MdMenuBook /> 
    </div> 
    <span>أحدث الكتب</span> 
  </div> 
 
  <div className="f"> 
    <div className="news-icon"> 
      <MdRecommend /> 
    </div> 
    <span>ترشيحات مميزة</span> 
  </div> 
 
  <div className="f"> 
    <div className="news-icon"> 
      <MdNotifications /> 
    </div> 
    <span>تحديثات مستمرة</span> 
  </div> 
 
</div>

        <h2 className="h2-news">
          إشترك في نشرتنا البريدية <FaTelegramPlane />
        </h2>

        <p className="p-news">
          قم بادخال بريدك الالكتروني للحصول على رسائل حصرية
        </p>

        <div className="form">

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="ادخل بريدك الالكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn-news" type="submit">
              اشتراك
            </button>
          </form>

          <p className="p-security">
            نحترم الخصوصية ولانشارك البريد مع طرف آخر
            <MdOutlineSecurity />
          </p>

          {message && <p>{message}</p>}

        </div>

      </div>
    </div>
  );
}

export default NewsLetter;