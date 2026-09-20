import React from "react";
import "./LoadingScreen.css";


function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-book">📚</div>

        <h2>مكتبة الكتب</h2>

        <p>جاري تحميل المتجر...</p>

        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;