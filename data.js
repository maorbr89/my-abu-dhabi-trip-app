const attractionsData = [
    {
        id: "attr-1",
        title: "1. The WB Abu Dhabi Hotel",
        badge: "",
        mapUrl: "https://maps.google.com/?q=The+WB+Abu+Dhabi+Hotel+Curio+Collection+by+Hilton",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        snippet: "מלון הקונספט הרשמי של וורנר ברוס באי יאס – חוויה קולנועית מדהימה למשפחות.",
        details: "מלון יוקרתי ברמת 5 כוכבים המוקדש כולו להיסטוריה הקולנועית של Warner Bros. המלון כולל בריכה משפחתית מרהיבה עם מזרקות, מסך ענק שמקרין סרטים מצוירים, מועדון ילדים (Kids Club) ממוזג ואירוח של דמויות אהובות כמו באגס באני ובאטמן שמסתובבות בלובי. ממוקם במרחק הליכה קצר מפארק וורנר ברוס."
    },
    {
        id: "attr-2",
        title: "2. Yas Beach",
        badge: "חינם לאורחי WB",
        mapUrl: "https://maps.google.com/?q=Yas+Beach+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        snippet: "חוף הים הלבן והאקסקלוסיבי של אי יאס – גישה חופשית לאורחי מלון WB.",
        details: "חוף מוסדר ויפהפה עם חול לבן ומי טורקיז צלולים. כאורחי מלון The WB Abu Dhabi אתם נהנים מכניסה חינם לגמרי לחוף, כולל שימוש חופשי בכיסאות נוח ושמשיות (חיסכון משמעותי). יש במקום מתחמי ספורט ימים, בר קפה רגוע ואווירה טרופית מושלמת. הגעה נוחה ומהירה בשאטל החינמי Yas Express העוצר בפתח המלון (7-10 דקות נסיעה)."
    },
    {
        id: "attr-3",
        title: "3. Warner Bros. World Abu Dhabi",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Warner+Bros+World+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
        snippet: "פארק השעשועים המקורה והממוזג הגדול בעולם – עולם האנימציה והגיבורים.",
        details: "פארק שעשועים ענק, מקורה וממוזג לחלוטין (מושלם נגד החום), המחולק לשישה עולמות נושא קסומים: גות'האם סיטי (באטמן), מטרופוליס (סופרמן), עולם הלני טונס, פלינטסטון ועוד. הפארק מציע מתקנים אינטראקטיביים לכל המשפחה, רכבות הרים מלהיבות ומפגשים מרגשים עם דמויות האחים וורנר."
    },
    {
        id: "attr-4",
        title: "4. SeaWorld Abu Dhabi",
        badge: "",
        mapUrl: "https://maps.google.com/?q=SeaWorld+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
        snippet: "אקווריום ענק ופארק ימי מהמתקדמים בעולם, כולל מנהרת פינגווינים ודולפינים.",
        details: "הפארק הימי החדש והמרשים ביותר באזור. כולל את האקווריום המרכזי העצום 'Endless Ocean', מופעי דולפינים ואריות ים מרהיבים, אזורי משחק לילדים (MicroOcean) ורכבת הרים אקסטרימית (Manta Coaster). הפארק מקורה, ממוזג ונגיש לחלוטין לעגלות."
    },
    {
        id: "attr-5",
        title: "5. Yas Waterworld Abu Dhabi",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Yas+Waterworld+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1582650625119-3a31f8876f31?auto=format&fit=crop&w=600&q=80",
        snippet: "פארק מים ענק ואגדי בהשראה אמירתית עם עשרות מגלשות ובריכות גלים.",
        details: "פארק מים מדברי זוכה פרסים הכולל מעל 40 מגלשות, מתקנים ואטרקציות מים. מתאים מאוד למשפחות עם מתחמי מגלשות רדודות לקטנטנים, נהר אבובים רגוע, לצד מגלשות אקסטרים מהירות ואנכיות לחובבי האדרנלין."
    },
    {
        id: "attr-6",
        title: "6. Ferrari World Abu Dhabi",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Ferrari+World+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
        snippet: "פארק שעשועים מוטורי מקורה המאכלס את רכבת ההרים המהירה בעולם.",
        details: "הפארק הראשון בעולם שעוצב בהשראת מותג העל פרארי. גולת הכותרת היא רכבת ההרים 'Formula Rossa' שמגיעה למהירות מסחררת של 240 קמ'ש! בנוסף יש בו סימולטורים מתקדמים, רכבות הרים נוספות ומופעים לכל המשפחה תחת כיפה אדומה ענקית וממוזגת."
    },
    {
        id: "attr-7",
        title: "7. Yas Mall",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Yas+Mall+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=600&q=80",
        snippet: "הקניון הגדול והמרכזי באי יאס, מחובר ישירות לפארק פרארי וורלד.",
        details: "קניון ענק ומפואר המציע מאות חנויות אופנה בינלאומיות, מתחם אוכל עצום ומגוון, בתי קולנוע ומרכזי בילוי. הקניון מקושר ישירות לפארק פרארי וורלד, מה שמאפשר מעבר נוח מאוד בין שופינג להנאה משפחתית."
    },
    {
        id: "attr-8",
        title: "8. שוק התמרים: Abu Dhabi Dates Market",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Abu+Dhabi+Dates+Market",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        snippet: "שוק תמרים אותנטי ומרהיב באזור נמל מינא עם מבחר עצום וטעימות.",
        details: "חוויה מקומית אותנטית שבה תמצאו מאות סוגי תמרים טריים וממולאים (אגוזים, שוקולד, פירות יבשים), קפה ערבי מסורתי ומארזי מתנה מרהיבים במחירים זולים משמעותית מאשר בקניונים. המוכרים מזמינים באדיבות לטעימות חופשיות."
    },
    {
        id: "attr-9",
        title: "9. שוק הנמל הממוזג: Mina Market",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Mina+Market+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
        snippet: "שוק פירות, ירקות ודגים מקורה ומחודש בנמל אבו דאבי.",
        details: "מתחם שווקים מחודש המרכז דוכן פירות טרופיים טריים, שוק שטיחים צבעוני, שוק קרמיקה מסורתי ושוק דגים תוסס. מקום מעולה להתרשם מהתרבות המקומית ומעושר הצבעים והריחות של המפרץ."
    },
    {
        id: "attr-10",
        title: "10. מסגד שייח' זאיד הגדול",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Sheikh+Zayed+Grand+Mosque+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80",
        snippet: "אחד המסגדים המפוארים והמרשימים בעולם – יצירת מופת ארכיטקטונית לבנה.",
        details: "פנינה ארכיטקטונית עשויה שיש לבן טהור, עם כיפות ענק, נברשות קריסטל עצומות ושטיח בעבודת יד מהגדולים בעולם. ביקור חובה בשעות השקיעה והערב, אז המבנה מואר בתאורה מרהיבה ומשתנה היוצרת מחזה בלתי נשכח."
    },
    {
        id: "attr-11",
        title: "11. ארמון הנשיא: Qasr Al Watan",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Qasr+Al+Watan+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
        snippet: "ארמון נשיאותי פעיל ומרהיב המציג אמנות, עיצוב ומורשת אמירתית מפוארת.",
        details: "ארמון ענק ומרהיב ביופיו הפתוח לציבור. הארמון מתאפיין בכיפות ענק מוזהבות, אולמות קבלה ממלכתיים עוצמתיים, ספריה מרשימה ותאורת ערב מדהימה. האתר ממוזג לחלוטין ונגיש מאוד לסיור משפחתי מעשיר."
    },
    {
        id: "attr-12",
        title: "12. שוק מדינת זאיד הזול",
        badge: "",
        mapUrl: "https://maps.google.com/?q=Madinat+Zayed+Shopping+Centre+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
        snippet: "בזאר מקורה ענק וזול הכולל את 'קומת הזהב' המפורסמת למציאת מציאות.",
        details: "מרכז קניות מקומי ואותנטי שאינו ממוסחר, ובו שפע חנויות בגדים, מזכרות, צעצועים ובשמים במחירים זולים במיוחד (כולל מרכז הזהב המרשים בקומה העליונה). מקום מצוין למציאות ולחוויית מיקוח מזרח-תיכונית."
    },
    {
        id: "attr-13",
        title: "13. קניון The Galleria Al Maryah Island",
        badge: "",
        mapUrl: "https://maps.google.com/?q=The+Galleria+Al+Maryah+Island+Abu+Dhabi",
        img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
        snippet: "קניון יוקרה מודרני במרכז העיר עם מותגי על ומתחם מסעדות מצוין.",
        details: "קניון יוקרתי וחדיש המציע חוויית שופינג נושקת למרינה יפהפייה. כולל מותגי אופנה מובילים, בתי קפה מעוצבים ומתחם מסעדות עשיר ומגוון המשקיף אל המים."
    }
];
