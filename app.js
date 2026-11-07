// Render Attractions List dynamically
function renderAttractions() {
    const container = document.getElementById('links-sec');
    if (!container) return;

    let html = `
        <h2 class="section-title">📍 אטרקציות ונקודות עניין (${attractionsData.length} מוקדים)</h2>
        <p style="margin-bottom: 12px; color: var(--text-muted); font-size: 0.9rem;">לחץ על "מידע מלא על המקום" לקריאה או על "ניווט" להגעה מיידית:</p>
        <div class="attractions-list">
    `;

    attractionsData.forEach(item => {
        const badgeHtml = item.badge ? `<span class="badge">${item.badge}</span>` : '';
        html += `
            <div class="attraction-card" id="${item.id}">
                <img src="${item.img}" alt="${item.title}" class="attraction-img">
                <div class="attraction-body">
                    <div class="attraction-header-row">
                        <span class="attraction-title">${item.title} ${badgeHtml}</span>
                        <a href="${item.mapUrl}" target="_blank" class="btn-maps">ניווט 🗺️</a>
                    </div>
                    <div class="attraction-snippet">${item.snippet}</div>
                    <button class="toggle-details-btn" onclick="toggleDetails(this)">📖 מידע מלא על המקום ▾</button>
                    <div class="attraction-details">${item.details}</div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

// Section Switcher
function switchSection(id) {
    const sections = document.querySelectorAll('.section-card');
    sections.forEach(sec => sec.classList.remove('active-section'));
    
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active-section');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(id)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function setActiveNav(element) {
    const navBtns = document.querySelectorAll('.bottom-nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

function toggleDetails(btn) {
    const details = btn.nextElementSibling;
    if (details.style.display === 'block') {
        details.style.display = 'none';
        btn.innerHTML = '📖 מידע מלא על המקום ▾';
    } else {
        details.style.display = 'block';
        btn.innerHTML = 'סגור מידע ▴';
    }
}

function jumpToAttraction(attrId) {
    switchSection('links-sec');
    
    const navBtns = document.querySelectorAll('.bottom-nav-btn');
    navBtns.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('links-sec')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    setTimeout(() => {
        const card = document.getElementById(attrId);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('highlight');
            
            const detailsBtn = card.querySelector('.toggle-details-btn');
            const detailsBox = card.querySelector('.attraction-details');
            if (detailsBox && detailsBox.style.display !== 'block') {
                detailsBox.style.display = 'block';
                detailsBtn.innerHTML = 'סגור מידע ▴';
            }

            setTimeout(() => {
                card.classList.remove('highlight');
            }, 2500);
        }
    }, 100);
}

// Build Static Day & Info Sections into main container
function initApp() {
    const main = document.getElementById('main-content');
    if (!main) return;

    main.innerHTML = `
        <!-- 1. Flights -->
        <div id="flights-sec" class="section-card active-section">
            <h2 class="section-title">✈️ פרטי טיסות ומדיניות כבודה (אתיחאד איירווייז)</h2>
            <div style="margin-bottom: 14px;">
                <h3 style="font-size: 1rem; color: #0f172a; margin-bottom: 6px;">🛫 הלוך: תל אביב (TLV) ← אבו דאבי (AUH)</h3>
                <div class="flight-row">
                    <div>
                        <strong>טיסה ישירה: EY 594</strong><br>
                        <span style="font-size: 0.85rem; color: var(--text-muted);">יום שלישי, 10 בנובמבר | טרמינל 3</span>
                    </div>
                    <div style="text-align: left;">
                        <span style="font-weight: 700; color: var(--primary);">07:00 ← 12:00</span><br>
                        <span style="font-size: 0.8rem; color: #22c55e; font-weight: 600;">● On Time</span>
                    </div>
                </div>
            </div>
            <div style="margin-bottom: 14px;">
                <h3 style="font-size: 1rem; color: #0f172a; margin-bottom: 6px;">🛬 חזור: אבו דאבי (AUH) ← תל אביב (TLV)</h3>
                <div class="flight-row">
                    <div>
                        <strong>טיסה ישירה: EY 593</strong><br>
                        <span style="font-size: 0.85rem; color: var(--text-muted);">יום שני, 16 בנובמבר | טרמינל A</span>
                    </div>
                    <div style="text-align: left;">
                        <span style="font-weight: 700; color: var(--primary);">21:50 ← 23:30</span><br>
                        <span style="font-size: 0.8rem; color: #22c55e; font-weight: 600;">● On Time</span>
                    </div>
                </div>
            </div>
            <h3 style="font-size: 1rem; color: #0f172a; margin-bottom: 6px; margin-top: 10px;">💼 חלוקת הגבלות כבודה ומזוודות בקבוצה:</h3>
            <div class="info-grid">
                <div class="info-item" style="border-right: 4px solid var(--primary-light);">
                    <h4>👨‍👩‍👧‍👦 כולם (מבוגרים וילדים)</h4>
                    <p style="font-size: 0.9rem; margin-top: 4px;">🎒 <strong>כבודת יד (טרולי):</strong> עד 7 ק"ג לאדם</p>
                    <p style="font-size: 0.9rem;">🧳 <strong>כבודה רשומה (בבטן המטוס):</strong> עד 25 ק"ג לאדם</p>
                </div>
                <div class="info-item" style="border-right: 4px solid var(--accent);">
                    <h4>👶 תינוק (נועם)</h4>
                    <p style="font-size: 0.9rem; margin-top: 4px;">🎒 <strong>כבודת יד (טרולי):</strong> עד 5 ק"ג לאדם</p>
                    <p style="font-size: 0.9rem;">🧳 <strong>כבודה רשומה (בבטן המטוס):</strong> עד 10 ק"ג לאדם</p>
                </div>
            </div>
        </div>

        <!-- 2. Day 1 -->
        <div id="day1" class="section-card">
            <h2 class="section-title">📅 יום שלישי, 10.11 | נחיתה, התאקלמות וערב רגוע</h2>
            <div class="day-timeline">
                <div class="timeline-item"><div class="timeline-time">07:00</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>המראה מנתב"ג</strong> בטיסת אתיחאד EY 594.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">12:00</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>נחיתה באבו דאבי (Terminal A)</strong> ונסיעה למלון.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">13:30-15:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>צ'ק-אין:</strong> קבלת חדרים במלון <span class="attr-link-tag" onclick="jumpToAttraction('attr-1')">The WB Abu Dhabi</span>.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">15:30-18:00</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>זמן בריכה:</strong> התרעננות ראשונה בבריכת המלון.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">18:30-19:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>טיול ערב:</strong> סיור רגוע לאורך טיילת Yas Bay.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">19:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>ארוחת ערב</strong> במלון.</div></label></div></div>
            </div>
        </div>

        <!-- 3. Day 2 -->
        <div id="day2" class="section-card">
            <h2 class="section-title">📅 יום רביעי, 11.11 | Warner Bros. World</h2>
            <div class="day-timeline">
                <div class="timeline-item"><div class="timeline-time">10:00-14:00</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>פארק שעשועים:</strong> בילוי ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-3')">Warner Bros. World Abu Dhabi</span>.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">14:00-16:00</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>מנוחת צהריים:</strong> חזרה למלון למנוחה.</div></label></div></div>
                <div class="split-box">
                    <div style="font-weight: bold; color: #166534; margin-bottom: 4px;">🔀 פיצול אחה"צ:</div>
                    <div>⚡ <strong>אקסטרים:</strong> חזרה לפארק וורנר ברוס.</div>
                    <div>🎈 <strong>רגוע:</strong> ג'ימבורי המלון (Kids Club).</div>
                </div>
                <div class="timeline-item" style="margin-top:10px;"><div class="timeline-time">19:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>ארוחת ערב</strong> במלון.</div></label></div></div>
            </div>
        </div>

        <!-- 4. Day 3 -->
        <div id="day3" class="section-card">
            <h2 class="section-title">📅 יום חמישי, 12.11 | SeaWorld, שוק התמרים ומסגד שייח' זאיד</h2>
            <div class="day-timeline">
                <div class="timeline-item"><div class="timeline-time">10:00-15:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🐬 פארק ימי:</strong> בילוי ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-4')">SeaWorld Abu Dhabi</span>.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">15:30-16:45</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🛒 שוק התמרים:</strong> ביקור ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-8')">Abu Dhabi Dates Market</span> וב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-9')">Mina Market</span>.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">17:15-18:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🕌 מסגד:</strong> ביקור ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-10')">Sheikh Zayed Grand Mosque</span> בשקיעה.</div></label></div></div>
            </div>
        </div>

        <!-- 5. Day 4 -->
        <div id="day4" class="section-card">
            <h2 class="section-title">📅 יום שישי, 13.11 | חוף הים והיערכות לשבת</h2>
            <div class="day-timeline">
                <div class="timeline-item"><div class="timeline-time">10:00-13:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🏖️ חוף הים:</strong> בילוי ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-2')">Yas Beach</span> (כניסה חינם).</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">17:21</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🕯️ כניסת שבת באבו דאבי</strong>.</div></label></div></div>
            </div>
        </div>

        <!-- 6. Day 5 -->
        <div id="day5" class="section-card">
            <h2 class="section-title">📅 יום שבת, 14.11 | שבת משפחתית, מנוחה ואפשרות לפארק מים</h2>
            <div class="day-timeline">
                <div class="split-box" style="margin: 10px 0;">
                    <div style="font-weight: bold; color: #166534; margin-bottom: 6px;">🔀 פיצול בשבת:</div>
                    <div>🕌 <strong>סבא וסבתא והשומרים:</strong> מנוחה ושקט במלון <span class="attr-link-tag" onclick="jumpToAttraction('attr-1')">The WB Abu Dhabi</span>.</div>
                    <div>🌊 <strong>הרוצים אקסטרים:</strong> בילוי ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-5')">Yas Waterworld Abu Dhabi</span>.</div>
                </div>
                <div class="timeline-item"><div class="timeline-time">18:14</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>⭐ יציאת שבת באבו דאבי</strong>.</div></label></div></div>
            </div>
        </div>

        <!-- 7. Day 6 -->
        <div id="day6" class="section-card">
            <h2 class="section-title">📅 יום ראשון, 15.11 | Yas Mall ו-Ferrari World</h2>
            <div class="day-timeline">
                <div class="timeline-item"><div class="timeline-time">10:30-15:30</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🏎️ פארק וקניון:</strong> ביקור ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-6')">Ferrari World</span> וב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-7')">Yas Mall</span>.</div></label></div></div>
            </div>
        </div>

        <!-- 8. Day 7 -->
        <div id="day7" class="section-card">
            <h2 class="section-title">📅 יום שני, 16.11 | ארמון הנשיא, שוק מדינת זאיד וחזרה</h2>
            <div class="day-timeline">
                <div class="timeline-item"><div class="timeline-time">10:30-12:15</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🏛️ ארמון:</strong> ביקור ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-11')">Qasr Al Watan</span>.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">12:30-14:45</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>🛍️ קניות:</strong> ביקור ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-12')">Madinat Zayed</span> או ב-<span class="attr-link-tag" onclick="jumpToAttraction('attr-13')">The Galleria</span>.</div></label></div></div>
                <div class="timeline-item"><div class="timeline-time">21:50</div><div class="timeline-content"><label class="checkbox-container"><input type="checkbox"><div><strong>המראה חזרה לישראל</strong> (EY 593).</div></label></div></div>
            </div>
        </div>

        <!-- 9. Shabbat -->
        <div id="shabbat-sec" class="section-card">
            <h2 class="section-title">🕌 מידע חשוב והיערכות לשבת</h2>
            <p>📞 <strong>בית חב"ד איחוד האמירויות:</strong> +971-56-958-2971</p>
            <p>🔹 <strong>מפתח מכני לשבת:</strong> מומלץ לבקש מראש בקבלה של מלון WB.</p>
        </div>

        <!-- 10. Dynamic Attractions Section -->
        <div id="links-sec" class="section-card"></div>
    `;

    renderAttractions();
}

document.addEventListener('DOMContentLoaded', initApp);
