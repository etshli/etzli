// מחכים שהאתר יטען במלואו לפני שמפעילים את הקוד
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. עדכון שנה אוטומטי בקרדיטים למטה (Footer)
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. התראה ידידותית לפני שמורידים מדרייב (גרסת בטא - APK)
    const driveDownloadBtn = document.getElementById('driveDownloadBtn');
    
    if (driveDownloadBtn) {
        driveDownloadBtn.addEventListener('click', (event) => {
            // הודעה שקופצת למשתמש
            alert('תודה שאתה מנסה את הבטא של עץלי!\n\nשים לב: מכיוון שהאפליקציה עדיין לא בחנות, אתה מוריד קובץ התקנה ישיר (APK). כדי להתקין אותו, תצטרך לאשר "התקנה ממקורות לא ידועים" בהגדרות המכשיר שלך.');
            
            // הערה: הקישור עצמו עדיין יעבוד ויפתח כרטיסייה חדשה לדרייב
            // בזכות התגית target="_blank" ששמנו ב-HTML.
        });
    }

});