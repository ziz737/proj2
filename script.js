/* ===========================
   DATA
=========================== */
const tawaleData = [
    { group: 'سهيل', common: 'الطرفة', month: 8, day: 24, days: 13, season: 'الصيف', temp: '40-42', arabic: 'الطرفة',
        weather: '🌡️ الطقس: حار نهاراً معتدل ليلاً.\nℹ️ الظواهر: بداية "وعكات سهيل" الرطبة وانكسار حدة السموم ليلاً.',
        planting: '🌱 الزراعة: الخضروات الورقية والدجّر.\n🚜 العمليات: صرام النخيل (جني التمر) وحماية المحاصيل من الرطوبة.' },
    { group: 'سهيل', common: 'الجبهة', month: 9, day: 6, days: 13, season: 'الخريف', temp: '38-40', arabic: 'الجبهة',
        weather: '🌡️ الطقس: يميل الجو للبرودة ليلاً، وهو أول نجوم الخريف.\nℹ️ الظواهر: تسمى "وعكات سهيل الثانية" وتنشط فيها الرياح اللطيفة.',
        planting: '🌱 الزراعة: الدرنات (بطاطس، بصل).\n🚜 العمليات: تنظيف أحواض النخيل وتجهيز الأرض للموسم.' },
    { group: 'سهيل', common: 'الزبرة', month: 9, day: 20, days: 13, season: 'الخريف', temp: '35-37', arabic: 'الزبرة',
        weather: '🌡️ الطقس: يشتد البرد ليلاً، نهار معتدل وجو لطيف.\nℹ️ الظواهر: ظهور السحب المتفرقة وبداية تحرك منخفضات الخريف.',
        planting: '🌱 الزراعة: الطماطم والبقوليات في البيوت المحمية.\n🚜 العمليات: التسميد العضوي للأشجار المثمرة.' },
    { group: 'سهيل', common: 'الصرفة', month: 10, day: 3, days: 13, season: 'الخريف', temp: '32-34', arabic: 'الصرفة',
        weather: '🌡️ الطقس: انصراف الحر نهائياً بطلوعها.\nℹ️ الظواهر: بداية "الوسمي" وتلبد السماء بالغيوم الممطرة النافعة.',
        planting: '🌱 الزراعة: القمح والشعير والبرسيم.\n🚜 العمليات: حرث الأرض العميقة وتجهيزها للبذر.' },
    { group: 'الوسم', common: 'العوى', month: 10, day: 16, days: 13, season: 'الخريف', temp: '28-30', arabic: 'العوى',
        weather: '🌡️ الطقس: اعتدال تام نهاراً ولطيف ليلاً.\nℹ️ الظواهر: أول نجوم "الوسم" الحقيقي، سحبها منعشة للنبات.',
        planting: '🌱 الزراعة: الورقيات والبرسيم والحبوب.\n🚜 العمليات: غرس الفسائل والشتلات الجديدة.' },
    { group: 'الوسم', common: 'السماك', month: 10, day: 29, days: 13, season: 'الخريف', temp: '25-27', arabic: 'السماك',
        weather: '🌡️ الطقس: رياح نشطة وأمطار وسمية غزيرة أحياناً.\nℹ️ الظواهر: تنشط فيه العواصف الرعدية وتزيد احتمالية السيول.',
        planting: '🌱 الزراعة: البصل والثوم والخضروات الشتوية.\n🚜 العمليات: مكافحة الأعشاب الضارة في الحقول.' },
    { group: 'الوسم', common: 'الغفر', month: 11, day: 11, days: 13, season: 'الخريف', temp: '22-24', arabic: 'الغفر',
        weather: '🌡️ الطقس: جو بارد، تزداد الحاجة للملابس الشتوية.\nℹ️ الظواهر: يتميز بالرذاذ المستمر (الديمة) وعودة الطيور المهاجرة.',
        planting: '🌱 الزراعة: الأشجار المتساقطة الأوراق والعنب.\n🚜 العمليات: تقليم الأشجار المثمرة وتسميد المزارع.' },
    { group: 'الوسم', common: 'الزبانا', month: 11, day: 24, days: 13, season: 'الخريف', temp: '18-20', arabic: 'الزبانا',
        weather: '🌡️ الطقس: برد شديد ليلاً، آخر نجوم الوسم.\nℹ️ الظواهر: يشتد هبوب الرياح الباردة وتوقعات بالصقيع المبكر.',
        planting: '🌱 الزراعة: تكملة زراعة القمح والشعير.\n🚜 العمليات: تسميد النخيل بالأسمدة العضوية لتدفئته.' },
    { group: 'المربعانية', common: 'الإكليل', month: 12, day: 7, days: 13, season: 'الشتاء', temp: '10-15', arabic: 'الإكليل',
        weather: '🌡️ الطقس: بداية "المربعانية"، برد قارس وصقيع.\nℹ️ الظواهر: انخفاض حاد في درجات الحرارة وتكون الضباب الصباحي.',
        planting: '🌱 الزراعة: البقوليات الشتوية (فول، بازلاء).\n🚜 العمليات: قطع السعف اليابس وتكريب النخيل.' },
    { group: 'المربعانية', common: 'القلب', month: 12, day: 20, days: 13, season: 'الشتاء', temp: '5-12', arabic: 'القلب',
        weather: '🌡️ الطقس: أبرد أيام السنة (جو المربعانية الأوسط).\nℹ️ الظواهر: رياح شمالية جافة وباردة جداً.',
        planting: '🌱 الزراعة: لا يُنصح بالبذر السطحي لبرودة التربة.\n🚜 العمليات: دهان جذوع الأشجار لحمايتها من التجمد.' },
    { group: 'المربعانية', common: 'الشولة', month: 1, day: 2, days: 13, season: 'الشتاء', temp: '5-12', arabic: 'الشولة',
        weather: '🌡️ الطقس: برد جاف ورياح شمالية نشطة.\nℹ️ الظواهر: آخر المربعانية، رياح نشطة وباردة.',
        planting: '🌱 الزراعة: البصل المتأخر والبطاطس.\n🚜 العمليات: إضافة السماد البلدي المتحلل لرفع حرارة التربة.' },
    { group: 'الشبط', common: 'النعائم', month: 1, day: 15, days: 13, season: 'الشتاء', temp: '6-14', arabic: 'النعائم',
        weather: '🌡️ الطقس: بداية "الشبط"، برد مباغت ومزعج.\nℹ️ الظواهر: يشتهر بـ "برد الأزيرق" والرياح الصرصر.',
        planting: '🌱 الزراعة: البطيخ في البيوت المحمية والورقيات.\n🚜 العمليات: نقل الشتلات للأرض المستديمة المحمية.' },
    { group: 'الشبط', common: 'البلدة', month: 1, day: 28, days: 13, season: 'الشتاء', temp: '8-16', arabic: 'البلدة',
        weather: '🌡️ الطقس: برد قارص في الفجر مع سطوع شمس قوية.\nℹ️ الظواهر: تسمى "شباط الثاني"، يتميز بزيادة طول النهار.',
        planting: '🌱 الزراعة: القطن والبطيخ المكشوف (بالمناطق الدافئة).\n🚜 العمليات: تسميد الأشجار الورقية قبل النمو.' },
    { group: 'العقارب', common: 'سعد الذابح', month: 2, day: 10, days: 13, season: 'الشتاء', temp: '10-18', arabic: 'سعد الذابح',
        weather: '🌡️ الطقس: بداية "العقارب" (عقرب السم).\nℹ️ الظواهر: برد مفاجئ رغم دفء الشمس، موسم تقلبات حادة.',
        planting: '🌱 الزراعة: الحمضيات والعنب والتين.\n🚜 العمليات: تقليم العنب وتنظيف قنوات الري.' },
    { group: 'العقارب', common: 'سعد بلع', month: 2, day: 23, days: 13, season: 'الشتاء', temp: '12-22', arabic: 'بلع',
        weather: '🌡️ الطقس: عقرب الدم، يميل الجو للاعتدال الشديد.\nℹ️ الظواهر: سحب رعدية ممطرة "أمطار الخير الربيعية".',
        planting: '🌱 الزراعة: النخيل (نقل الأفراخ) والأشجار المثمرة.\n🚜 العمليات: تطعيم الأشجار المثمرة (حمضيات).' },
    { group: 'العقارب', common: 'سعد السعود', month: 3, day: 8, days: 13, season: 'الربيع', temp: '15-25', arabic: 'سعد السعود',
        weather: '🌡️ الطقس: عقرب الدسم، بداية دفء الأرض الحقيقي.\nℹ️ الظواهر: يسمى بـ "برد العجوز" في آخره.',
        planting: '🌱 الزراعة: غرس جميع الأشجار المثمرة والورقيات.\n🚜 العمليات: ري مكثف للمزروعات مع تحسن الجو.' },
    { group: 'الحميمين', common: 'الأول', month: 3, day: 21, days: 13, season: 'الربيع', temp: '18-28', arabic: 'سعد الأخبية',
        weather: '🌡️ الطقس: اعتدال ربيعي تام نهاراً ودفء ليلاً.\nℹ️ الظواهر: بداية موسم "المراويح" (سحب الرعد العنيفة).',
        planting: '🌱 الزراعة: جميع المحاصيل الصيفية (ذرة، خيار).\n🚜 العمليات: تلقيح النخيل (المبكر) ومكافحة الآفات.' },
    { group: 'الحميمين', common: 'الثاني', month: 4, day: 3, days: 13, season: 'الربيع', temp: '22-32', arabic: 'المقدم',
        weather: '🌡️ الطقس: جو ربيعي حار نهاراً، تزداد فيه العواصف.\nℹ️ الظواهر: ذروة "المراويح" الربيعية والرياح الهابطة.',
        planting: '🌱 الزراعة: الطماطم والباذنجان والفلفل.\n🚜 العمليات: استمرار تلقيح النخيل وفحص الثمار.' },
    { group: 'الذرعان', common: 'الأول', month: 4, day: 16, days: 13, season: 'الربيع', temp: '25-35', arabic: 'المؤخر',
        weather: '🌡️ الطقس: ميل نحو الحرارة بوضوح، اعتدال لطيف ليلاً.\nℹ️ الظواهر: "المرابيع المتأخرة"، تجود فيها الأمطار.',
        planting: '🌱 الزراعة: الذرة والسمسم والمحاصيل الصيفية المتأخرة.\n🚜 العمليات: متابعة ري المحاصيل بانتظام.' },
    { group: 'الذرعان', common: 'الثاني', month: 4, day: 29, days: 13, season: 'الربيع', temp: '25-35', arabic: 'رأس الحمل',
        weather: '🌡️ الطقس: جو دافئ ومغبر أحياناً، رطوبة متقلبة.\nℹ️ الظواهر: آخر الحميمين وبداية مربعانية القيظ.',
        planting: '🌱 الزراعة: الخضروات الصيفية المتأخرة والبطيخ.\n🚜 العمليات: تعشيب أحواض النخيل فوراً.' },
    { group: 'الثريا', common: 'البطين', month: 5, day: 12, days: 13, season: 'الربيع', temp: '28-38', arabic: 'البطين',
        weather: '🌡️ الطقس: يشتد الحر نهاراً وتجف فيه التربة تماماً.\nℹ️ الظواهر: بداية انقطاع الأمطار الربيعية.',
        planting: '🌱 الزراعة: الورقيات الصيفية المتحملة للحرارة.\n🚜 العمليات: فحص شبكات الري وزيادة وقت الري ليلاً.' },
    { group: 'الثريا', common: 'الثريا', month: 5, day: 25, days: 13, season: 'الصيف', temp: '32-42', arabic: 'الثريا',
        weather: '🌡️ الطقس: بداية مربعانية القيظ الحارة والناشفة.\nℹ️ الظواهر: اختفاء الثريا عن الرؤية وبداية جفاف العشب.',
        planting: '🌱 الزراعة: البطيخ والشمام والقرعيات.\n🚜 العمليات: حماية الثمار من لفحة الشمس.' },
    { group: 'الثريا', common: 'الدبران', month: 6, day: 7, days: 13, season: 'الصيف', temp: '35-45', arabic: 'الدبران',
        weather: '🌡️ الطقس: يشتد القيظ وهبوب رياح السموم اللافحة.\nℹ️ الظواهر: يسمى بـ "التويبع"، جفاف تام للأرض.',
        planting: '🌱 الزراعة: لا يزرع فيه شيء جديد لشدة الحرارة.\n🚜 العمليات: زيادة كميات الري ليلاً لتبريد التربة.' },
    { group: 'الجوزاء', common: 'الهقعة', month: 6, day: 20, days: 13, season: 'الصيف', temp: '38-48', arabic: 'الهقعة',
        weather: '🌡️ الطقس: "جمرة القيظ"، أشد فترات الصيف حرارة.\nℹ️ الظواهر: غليان المياه في الآبار السطحية وطول النهار الأقصى.',
        planting: '🌱 الزراعة: العناية بالمزروعات القائمة فقط بالري ليلاً.\n🚜 العمليات: تهوية المزارع وتبريد المحميات.' },
    { group: 'الجوزاء', common: 'الهنعة', month: 7, day: 3, days: 13, season: 'الصيف', temp: '38-48', arabic: 'الهنعة',
        weather: '🌡️ الطقس: نهار لاهب معتدل ليلاً نوعاً ما.\nℹ️ الظواهر: تشتد الرطوبة الخانقة "الكتمة" وبداية الرطب.',
        planting: '🌱 الزراعة: نضج الرطب في أغلب مناطق النخيل.\n🚜 العمليات: مكافحة العناكب والحشرات الثاقبة.' },
    { group: 'المرزم', common: 'المرزم', month: 7, day: 16, days: 13, season: 'الصيف', temp: '38-48', arabic: 'المرزم',
        weather: '🌡️ الطقس: حر رطب وخانق، يشتهر بـ "مرزم التمر".\nℹ️ الظواهر: سحب رعدية مباغتة في بعض المناطق.',
        planting: '🌱 الزراعة: جني التمور (تين ورطب بكثرة).\n🚜 العمليات: تسميد النخيل بالبوتاسيوم لبلوغ التمر.' },
    { group: 'الكليبين', common: 'الكليبين', month: 7, day: 29, days: 13, season: 'الصيف', temp: '38-48', arabic: 'الكليبين',
        weather: '🌡️ الطقس: آخر "جمرة القيظ"، حرارة عالية ورهق.\nℹ️ الظواهر: طباخ التمر (حرارة عالية تنضج الرطب في النخيل).',
        planting: '🌱 الزراعة: تجهيز الأرض وتنظيفها للموسم الخريفي.\n🚜 العمليات: حصاد المحاصيل الصيفية بجميع أنواعها.' },
    { group: 'سهيل', common: 'النثرة', month: 8, day: 11, days: 13, season: 'الصيف', temp: '38-45', arabic: 'النثرة',
        weather: '🌡️ الطقس: انكسار طفيف في حدة السموم ليلاً.\nℹ️ الظواهر: ظهور بشائر نجم "سهيل" اليماني في الأفق الجنوبي.',
        planting: '🌱 الزراعة: بذر محاصيل الخريف المبكرة بالمشاتل.\n🚜 العمليات: تنظيف المزارع من مخلفات القيظ.' },
];

const arabicMonths = ["", "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

const seasonStyles = {
    "الشتاء": { color: "#7ab3d4", icon: "❄️" },
    "الربيع": { color: "#7dbd8a", icon: "🌸" },
    "الصيف": { color: "#d4a44a", icon: "☀️" },
    "الخريف": { color: "#c47a4a", icon: "🍂" }
};

const weatherCodes = {
    0: { text: "سماء صافية", icon: "☀️" },
    1: { text: "صافٍ غالباً", icon: "🌤️" },
    2: { text: "غائم جزئياً", icon: "⛅" },
    3: { text: "غائم", icon: "☁️" },
    45: { text: "ضباب", icon: "🌫️" },
    48: { text: "ضباب صقيعي", icon: "🌫️" },
    51: { text: "رذاذ خفيف", icon: "🌦️" },
    53: { text: "رذاذ متوسط", icon: "🌦️" },
    55: { text: "رذاذ كثيف", icon: "🌦️" },
    61: { text: "مطر خفيف", icon: "🌧️" },
    63: { text: "مطر متوسط", icon: "🌧️" },
    65: { text: "مطر غزير", icon: "🌧️" },
    80: { text: "زخات مطر", icon: "🌦️" },
    95: { text: "عواصف رعدية", icon: "⛈️" }
};

/* ===========================
   UTILS
=========================== */
function dateToDayOfYear(m, d, y) {
    const date = new Date(y, m - 1, d);
    const start = new Date(y, 0, 0);
    return Math.floor((date - start) / (1000 * 60 * 60 * 24));
}

function getDaysInYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365;
}

function getDirectionText(angle) {
    const dirs = ['شمال','شمال شرق','شرق','جنوب شرق','جنوب','جنوب غرب','غرب','شمال غرب'];
    return dirs[Math.round(angle / 45) % 8];
}

function formatTime12h(timeStr) {
    if (!timeStr) return '--:--';
    let [h, m] = timeStr.split(':').map(Number);
    const period = h >= 12 ? 'م' : 'ص';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${String(m).padStart(2, '0')} ${period}`;
}

/* ===========================
   MAIN INIT
=========================== */
function init() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dayOfYear = dateToDayOfYear(month, day, year);



    // Sort tawale by day of year
    const sortedTawale = tawaleData.map(t => ({
        ...t, dayOfYear: dateToDayOfYear(t.month, t.day, year)
    })).sort((a, b) => a.dayOfYear - b.dayOfYear);
    sortedTawale.forEach((t, i) => t.sortedPos = i);

    // Find current
    let currentIdx = -1;
    for (let i = 0; i < sortedTawale.length; i++) {
        if (dayOfYear >= sortedTawale[i].dayOfYear) currentIdx = i;
    }
    if (currentIdx === -1) currentIdx = sortedTawale.length - 1;

    const current = sortedTawale[currentIdx];
    const next = sortedTawale[(currentIdx + 1) % sortedTawale.length];

    // Tali progress
    const startDay = current.dayOfYear;
    let daysPassed = dayOfYear >= startDay
        ? dayOfYear - startDay
        : (getDaysInYear(year - 1) - startDay) + dayOfYear;
    if (daysPassed >= current.days) daysPassed = current.days - 1;
    const daysRemaining = current.days - daysPassed;
    const progressPercent = (daysPassed / current.days) * 100;

    // Season progress
    const seasonMeta = [
        { name: "الشتاء", month: 12, day: 7, duration: 91 },
        { name: "الربيع", month: 3, day: 8, duration: 91 },
        { name: "الصيف", month: 6, day: 7, duration: 91 },
        { name: "الخريف", month: 9, day: 6, duration: 92 }
    ];
    const sMeta = seasonMeta.find(m => m.name === current.season);
    let sStart = new Date(year, sMeta.month - 1, sMeta.day);
    if (current.season === "الشتاء" && month < 12) sStart.setFullYear(year - 1);
    const sEnd = new Date(sStart);
    sEnd.setDate(sStart.getDate() + sMeta.duration);
    const sDiff = Math.floor((now - sStart) / (1000 * 60 * 60 * 24));
    let sPassed = Math.max(0, sDiff);
    if (sPassed > sMeta.duration) sPassed = sMeta.duration;
    const sRemaining = sMeta.duration - sPassed;
    const sPercent = (sPassed / sMeta.duration) * 100;

    const seasonColor = seasonStyles[current.season].color;

    // --- Season section ---
    const heading = document.getElementById('current-season-heading');
    heading.textContent = `${seasonStyles[current.season].icon} فصل ${current.season}`;
    heading.style.setProperty('--season-clr', seasonColor);
    document.getElementById('season-days-passed').textContent = `${sPassed} يوم مضى`;
    document.getElementById('season-days-remaining').textContent = `${sRemaining} يوم باقٍ`;
    const sBar = document.getElementById('season-progress');
    sBar.style.background = seasonColor;
    setTimeout(() => { sBar.style.width = `${sPercent}%`; }, 100);
    document.getElementById('season-start-date').textContent = `${sStart.getDate()} ${arabicMonths[sStart.getMonth() + 1]}`;
    document.getElementById('season-end-date').textContent = `${sEnd.getDate()} ${arabicMonths[sEnd.getMonth() + 1]}`;

    // --- Tali section ---
    document.getElementById('current-tali-name').innerHTML =
        `${current.group} <span class="group-name">(${current.common})</span>`;
    document.getElementById('days-passed').textContent = `${daysPassed} يوم مضى`;
    document.getElementById('days-remaining').textContent = `${daysRemaining} يوم باقٍ`;
    const tBar = document.getElementById('tali-progress');
    tBar.style.setProperty('--season-clr', seasonColor);
    setTimeout(() => { tBar.style.width = `${progressPercent}%`; }, 150);
    document.getElementById('tali-start-date').textContent = `${current.day} ${arabicMonths[current.month]}`;
    document.getElementById('tali-end-date').textContent = `${next.day} ${arabicMonths[next.month]}`;
    document.getElementById('tali-temp').textContent = `${current.temp}° م`;
    document.getElementById('tali-arabic').textContent = `نجم ${current.arabic}`;

    // --- Info texts ---
    document.getElementById('weather-text').innerHTML = (current.weather || '').replace(/\n/g, '<br>');
    document.getElementById('agri-text').innerHTML = (current.planting || '').replace(/\n/g, '<br>');

    // --- Explorer list ---
    // الترتيب: السابق أولاً، الجاري ثانياً، ثم البقية
    const prevIdx = (currentIdx - 1 + sortedTawale.length) % sortedTawale.length;
    const orderedTawale = [...sortedTawale.slice(prevIdx), ...sortedTawale.slice(0, prevIdx)];
    buildList(orderedTawale, currentIdx, year, now);
}

function buildList(orderedTawale, currentIdx, year, now) {
    const list = document.getElementById('tawale-list');
    list.innerHTML = '';

    orderedTawale.forEach((t) => {
        const item = document.createElement('div');
        item.className = 'tawale-item';
        item.setAttribute('data-season', t.season);
        const sc = seasonStyles[t.season].color;
        item.style.setProperty('--season-color', sc);

        let timeStatus = '';
        let tStart = new Date(year, t.month - 1, t.day);

        if (t.sortedPos < currentIdx) {
            if (tStart > now) tStart.setFullYear(year - 1);
            const tEnd = new Date(tStart);
            tEnd.setDate(tStart.getDate() + t.days);
            const diff = Math.max(0, Math.floor((now - tEnd) / (1000 * 60 * 60 * 24)));
            timeStatus = `<span class="ti-status status-past">مضى ${diff} يوم</span>`;
        } else if (t.sortedPos > currentIdx) {
            if (tStart < now) tStart.setFullYear(year + 1);
            const diff = Math.ceil((tStart - now) / (1000 * 60 * 60 * 24));
            timeStatus = `<span class="ti-status status-future">بعد ${diff} يوم</span>`;
        } else {
            let passed = Math.floor((now - tStart) / (1000 * 60 * 60 * 24));
            if (passed < 0) passed += getDaysInYear(tStart.getFullYear());
            if (passed < 0) passed = 0;
            if (passed >= t.days) passed = t.days - 1;
            const left = t.days - passed;
            timeStatus = `<span class="ti-status status-current">نشط الآن · متبقي ${left} يوم</span>`;
        }

        if (t.sortedPos === currentIdx) item.classList.add('active');

        item.innerHTML = `
            <div class="ti-season-badge">${seasonStyles[t.season].icon} ${t.season}</div>
            <div class="ti-name">${t.group} - ${t.common}</div>
            <div class="ti-star">⭐ ${t.arabic}</div>
            <div class="ti-footer">
                <span class="ti-date">${t.day} ${arabicMonths[t.month]}</span>
                ${timeStatus}
            </div>
        `;
        list.appendChild(item);
    });

    // Filter tabs (Multi-select)
    document.querySelectorAll('.sf-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tab.classList.toggle('active');
            
            const activeFilters = [...document.querySelectorAll('.sf-tab.active')].map(t => t.getAttribute('data-filter'));
            
            document.querySelectorAll('.tawale-item').forEach(item => {
                const season = item.getAttribute('data-season');
                if (activeFilters.length === 0 || activeFilters.includes(season)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

/* ===========================
   LIVE FEATURES (Weather + Qibla)
=========================== */
let qiblaAngleGlobal = 0;

const saudiCities = [
    { name: 'بريدة', lat: 26.326, lon: 43.975 },
    { name: 'الرياض', lat: 24.7136, lon: 46.6753 },
    { name: 'جدة', lat: 21.4858, lon: 39.1925 },
    { name: 'مكة المكرمة', lat: 21.3891, lon: 39.8579 },
    { name: 'المدينة المنورة', lat: 24.5247, lon: 39.5692 },
    { name: 'الدمام', lat: 26.4207, lon: 50.0888 },
    { name: 'الخبر', lat: 26.2172, lon: 50.1971 },
    { name: 'الطائف', lat: 21.4372, lon: 40.3521 },
    { name: 'تبوك', lat: 28.3838, lon: 36.555 },
    { name: 'حائل', lat: 27.5114, lon: 41.7208 },
    { name: 'أبها', lat: 18.2164, lon: 42.5053 },
    { name: 'خميس مشيط', lat: 18.3055, lon: 42.7285 },
    { name: 'جازان', lat: 16.8894, lon: 42.5511 },
    { name: 'نجران', lat: 17.4924, lon: 44.1277 },
    { name: 'سكاكا', lat: 29.9697, lon: 40.2064 },
    { name: 'عرعر', lat: 30.9583, lon: 41.0245 }
];

let locationInFlight = false;

async function setupLiveFeatures() {
    buildCityPicker();
    bindLocationRetry();
    requestLocation();          // طلب GPS تلقائي
    autoStartCompass();         // محاولة البوصلة تلقائياً
}

function useCity(city) {
    setLocationText(city.name);
    const prayerCity = document.getElementById('prayer-city-display');
    if (prayerCity) prayerCity.textContent = `مواقيت الصلاة في ${city.name} - تقويم أم القرى`;
    applyCoords(city.lat, city.lon);
    closeCityPicker();
}

function buildCityPicker() {
    const list = document.getElementById('city-list');
    if (!list || list.dataset.built) return;
    list.dataset.built = '1';
    saudiCities.forEach(city => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'city-option';
        btn.textContent = `📍 ${city.name}`;
        btn.addEventListener('click', () => useCity(city));
        list.appendChild(btn);
    });
}

function openCityPicker() {
    const sheet = document.getElementById('city-picker');
    if (sheet) sheet.hidden = false;
}

function closeCityPicker() {
    const sheet = document.getElementById('city-picker');
    if (sheet) sheet.hidden = true;
}

function applyCoords(latitude, longitude) {
    fetchPrayerTimes(latitude, longitude);
    fetchCityName(latitude, longitude);
    fetchWeather(latitude, longitude);
    calculateQibla(latitude, longitude);
}

function requestLocation() {
    if (!('geolocation' in navigator)) {
        setLocationText('غير مدعوم — اضغط لإعادة المحاولة');
        bindLocationRetry();
        return;
    }
    if (locationInFlight) return;
    locationInFlight = true;
    setLocationText('جاري طلب الموقع... اضغط "سماح"');
    navigator.geolocation.getCurrentPosition((position) => {
        locationInFlight = false;
        const { latitude, longitude } = position.coords;
        applyCoords(latitude, longitude);
    }, (err) => {
        locationInFlight = false;
        console.warn('Geolocation error:', err);
        fetchPrayerTimes(26.326, 43.975);
        fetchWeather(26.326, 43.975);
        calculateQibla(26.326, 43.975);
        setLocationText('موقع افتراضي: بريدة — اضغط لاختيار مدينتك');
        const prayerCity = document.getElementById('prayer-city-display');
        if (prayerCity) prayerCity.textContent = 'مواقيت بريدة (افتراضية) - تقويم أم القرى';
        bindLocationRetry();
    }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
}

function bindLocationRetry() {
    const card = document.getElementById('weather-live-card');
    if (card && !card.dataset.retryBound) {
        card.dataset.retryBound = '1';
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => requestLocation());
    }
    const loc = document.getElementById('location-name');
    if (loc && !loc.dataset.retryBound) {
        loc.dataset.retryBound = '1';
        loc.style.cursor = 'pointer';
        loc.addEventListener('click', (e) => { e.stopPropagation(); requestLocation(); });
    }
    const btn = document.getElementById('city-picker-gps');
    if (btn && !btn.dataset.retryBound) {
        btn.dataset.retryBound = '1';
        btn.addEventListener('click', () => { closeCityPicker(); requestLocation(); });
    }
    const sheet = document.getElementById('city-picker');
    if (sheet && !sheet.dataset.retryBound) {
        sheet.dataset.retryBound = '1';
        const closeBtn = document.getElementById('city-picker-close');
        if (closeBtn) closeBtn.addEventListener('click', () => closeCityPicker());
        sheet.addEventListener('click', (e) => { if (e.target === sheet) closeCityPicker(); });
    }
}

function setLocationText(text) {
    document.querySelectorAll('[id^="location-name"]').forEach(el => el.textContent = text);
}

async function fetchCityName(lat, lon) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=ar`);
        const data = await res.json();
        const city = data.address?.city || data.address?.town || data.address?.village || data.address?.state || 'موقعك الحالي';
        setLocationText(city);
        const prayerCityDisplay = document.getElementById('prayer-city-display');
        if (prayerCityDisplay) prayerCityDisplay.textContent = `مواقيت الصلاة في ${city} - تقويم أم القرى`;
    } catch {
        setLocationText('موقعك الحالي');
    }
}

async function fetchWeather(lat, lon) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,weather_code,wind_speed_10m&timezone=auto`;
        const res = await fetch(url);
        const data = await res.json();
        const c = data.current;
        const wInfo = weatherCodes[c.weather_code] || { text: 'غير متوفر', icon: '🌡️' };
        const temp = Math.round(c.temperature_2m);
        const rain = (c.precipitation || 0) + ' ملم';
        const wind = Math.round(c.wind_speed_10m) + ' كم/س';

        // Dashboard
        document.getElementById('weather-icon-live').textContent = wInfo.icon;
        document.getElementById('current-temp-live').textContent = temp;
        document.getElementById('rain-live').textContent = rain;
        document.getElementById('wind-live').textContent = wind;

        // Qibla page
        document.getElementById('wd-icon').textContent = wInfo.icon;
        document.getElementById('wd-temp').textContent = temp;
        document.getElementById('wd-rain').textContent = rain;
        document.getElementById('wd-wind').textContent = wind;
    } catch (err) {
        console.error('Weather error:', err);
    }
}

function calculateQibla(lat, lon) {
    const mLat = 21.4225 * Math.PI / 180;
    const mLon = 39.8262 * Math.PI / 180;
    const latR = lat * Math.PI / 180;
    const lonR = lon * Math.PI / 180;
    const dLon = mLon - lonR;
    const y = Math.sin(dLon);
    const x = Math.cos(latR) * Math.tan(mLat) - Math.sin(latR) * Math.cos(dLon);
    let deg = Math.atan2(y, x) * 180 / Math.PI;
    if (deg < 0) deg += 360;
    qiblaAngleGlobal = deg;

    // Mini compass (dashboard)
    const miniNeedle = document.getElementById('qibla-direction');
    if (miniNeedle) miniNeedle.style.transform = `translate(-50%, -100%) rotate(${deg}deg)`;

    // Angle labels
    const angleLabel = document.getElementById('qibla-angle');
    if (angleLabel) angleLabel.textContent = `${Math.round(deg)}° ${getDirectionText(deg)}`;
    
    // Full card labels (optional check)
    const angleFull = document.getElementById('qibla-angle-full');
    if (angleFull) angleFull.textContent = `${Math.round(deg)}°`;
    
    const dirText = document.getElementById('qibla-direction-text');
    if (dirText) dirText.textContent = getDirectionText(deg);

    // Big compass needle (Removed in favor of prayer times, but logic kept for dashboard)
}

/* ===========================
   PRAYER TIMES LOGIC
=========================== */
let prayerInterval = null;
let currentHijriData = null; // Global store for Umm al-Qura date from API

async function fetchPrayerTimes(lat, lon) {
    const list = document.getElementById('prayer-times-list');
    try {
        // Use simpler URL without date to get today's timings automatically
        const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=4`;
        
        console.log('Fetching prayer times from:', url);
        
        const res = await fetch(url);
        if (!res.ok) throw new Error(`API returned status ${res.status}`);
        
        const data = await res.json();
        
        if (data && data.code === 200 && data.data) {
            console.log('Prayer times received:', data.data.timings);
            // Store Umm al-Qura Hijri date metadata
            if (data.data.date && data.data.date.hijri) {
                currentHijriData = data.data.date.hijri;
            }
            displayPrayerTimes(data.data.timings);
            startPrayerCountdown(data.data.timings);
        } else {
            throw new Error('Invalid API response structure');
        }
    } catch (err) {
        console.error('Prayer Times Error:', err);
        if (list) list.innerHTML = `<div class="prayer-row-loading">❌ تعذر جلب المواقيت: ${err.message}</div>`;
    }
}

function displayPrayerTimes(timings) {
    const list = document.getElementById('prayer-times-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    const relevantPrayers = [
        { id: 'Fajr', name: 'الفجر', icon: '🌅' },
        { id: 'Sunrise', name: 'الشروق', icon: '☀️' },
        { id: 'Dhuhr', name: 'الظهر', icon: '☀️' },
        { id: 'Asr', name: 'العصر', icon: '🌤️' },
        { id: 'Maghrib', name: 'المغرب', icon: '🌇' },
        { id: 'Isha', name: 'العشاء', icon: '🌙' }
    ];
    
    relevantPrayers.forEach(p => {
        const time = timings[p.id];
        const formattedTime = formatTime12h(time);
        const row = document.createElement('div');
        row.className = 'prayer-row';
        row.id = `prayer-${p.id}`;
        row.innerHTML = `
            <div class="pr-left">
                <span class="prayer-icon">${p.icon}</span>
                <span class="prayer-name">${p.name}</span>
            </div>
            <div class="prayer-time">${formattedTime}</div>
        `;
        list.appendChild(row);
    });
}

function startPrayerCountdown(timings) {
    if (prayerInterval) clearInterval(prayerInterval);
    
    const prayerNames = {
        'Fajr': 'الفجر',
        'Sunrise': 'الشروق',
        'Dhuhr': 'الظهر',
        'Asr': 'العصر',
        'Maghrib': 'المغرب',
        'Isha': 'العشاء'
    };
    
    const updateCountdown = () => {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        let nextPrayer = null;
        let minDiff = Infinity;
        
        document.querySelectorAll('.prayer-row').forEach(r => r.classList.remove('active'));
        
        const prayerIds = Object.keys(prayerNames);
        
        for (const id of prayerIds) {
            const [h, m] = timings[id].split(':').map(Number);
            const pMinutes = h * 60 + m;
            let diff = pMinutes - currentTime;
            
            if (diff <= 0) diff += 1440;
            
            if (diff < minDiff) {
                minDiff = diff;
                nextPrayer = id;
            }
        }
        
        const activeRow = document.getElementById(`prayer-${nextPrayer}`);
        if (activeRow) activeRow.classList.add('active');
        
        document.getElementById('next-prayer-name').textContent = prayerNames[nextPrayer];
        document.getElementById('next-prayer-time').textContent = formatTime12h(timings[nextPrayer]);
        
        const h = Math.floor(minDiff / 60);
        const m = minDiff % 60;
        const s = 59 - now.getSeconds();
        
        const countdownEl = document.getElementById('next-prayer-countdown');
        if (countdownEl) {
            countdownEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }

        const adhanIds = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        let lastAdhan = null, lastDate = null;
        adhanIds.forEach(id => {
            const parts = (timings[id] || '').split(':').map(Number);
            if (parts.length < 2) return;
            const d = new Date(now);
            d.setHours(parts[0], parts[1], 0, 0);
            if (d <= now && (!lastDate || d > lastDate)) { lastDate = d; lastAdhan = id; }
        });
        if (!lastDate) {
            const parts = (timings['Isha'] || '').split(':').map(Number);
            if (parts.length >= 2) {
                lastDate = new Date(now);
                lastDate.setDate(lastDate.getDate() - 1);
                lastDate.setHours(parts[0], parts[1], 0, 0);
                lastAdhan = 'Isha';
            }
        }
        const elapsedEl = document.getElementById('current-prayer-elapsed');
        if (elapsedEl) {
            if (lastDate) {
                const elapsedSec = Math.floor((now - lastDate) / 1000);
                if (elapsedSec >= 0 && elapsedSec <= 30 * 60) {
                    const em = Math.floor(elapsedSec / 60), es = elapsedSec % 60;
                    elapsedEl.hidden = false;
                    elapsedEl.innerHTML = `مضى على أذان ${prayerNames[lastAdhan]} <b>${String(em).padStart(2, '0')}:${String(es).padStart(2, '0')}</b>`;
                } else {
                    elapsedEl.hidden = true;
                }
            } else {
                elapsedEl.hidden = true;
            }
        }
    };
    
    updateCountdown();
    prayerInterval = setInterval(updateCountdown, 1000);
}

/* ===========================
   DYNAMIC COMPASS — Android & iOS accurate
=========================== */

// Low-pass filter state
let lpAlpha = null;   // filtered compass heading (degrees)
const LP = 0.15;      // smoothing factor: lower = smoother but slower

// Convert any angle difference to the shortest path (-180 to +180)
function angleDiff(a, b) {
    let d = ((b - a) + 540) % 360 - 180;
    return d;
}

// Apply low-pass filter on circular (angular) values
function lowPassAngle(prev, next, alpha) {
    if (prev === null) return next;
    return (prev + alpha * angleDiff(prev, next) + 360) % 360;
}

function applyCompassRotation(headingDeg) {
    // Smooth the heading
    lpAlpha = lowPassAngle(lpAlpha, headingDeg, LP);
    const rot = -lpAlpha;   // negate: rotate ring so N always faces physical north

    const miniCompass = document.getElementById('qibla-compass');
    const bigCompass   = document.getElementById('bc-ring') || document.querySelector('.bc-ring');

    // Use transform directly (no CSS transition on compass ring to avoid lag)
    if (miniCompass) miniCompass.style.transform = `rotate(${rot}deg)`;
    if (bigCompass)  bigCompass.style.transform  = `rotate(${rot}deg)`;

    const qEl = document.getElementById('qibla-card-label');
    if (qEl) {
        const aligned = Math.abs(angleDiff(lpAlpha, qiblaAngleGlobal)) <= 6;
        qEl.classList.toggle('qibla-aligned', aligned);
    }
}

async function enableDynamicCompass() {
    const hint = document.getElementById('qibla-hint');
    if (hint) hint.textContent = 'جاري تفعيل الحساس... حرك الجوال';
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
            const perm = await DeviceOrientationEvent.requestPermission();
            if (perm === 'granted') {
                startOrientationTracking();
            } else {
                if (hint) hint.textContent = 'مرفوض: اسمح بالحساسات ثم اضغط مجدداً';
            }
        } catch (err) {
            console.error(err);
            if (hint) hint.textContent = 'تعذر التفعيل — اضغط مجدداً';
        }
    } else {
        startOrientationTracking();
    }
}

let orientationStarted = false;
let orientationGotEvent = false;

function autoStartCompass() {
    const hint = document.getElementById('qibla-hint');
    if (hint) hint.textContent = 'جاري تفعيل البوصلة تلقائياً...';
    const needsGesture = typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function';
    if (needsGesture) {
        if (hint) hint.textContent = 'اضغط البوصلة لطلب إذن الحساسات';
        return;
    }
    startOrientationTracking();
}

function startOrientationTracking() {
    const hint = document.getElementById('qibla-hint');
    if (orientationStarted) {
        if (hint) hint.textContent = orientationGotEvent ? 'البوصلة تعمل ✓ حرك الجوال' : 'لم تصل قراءات الحساس بعد — حرك الجوال';
        return;
    }
    orientationStarted = true;
    const hint2 = document.getElementById('qibla-hint');
    if (hint2) hint2.textContent = 'جاري تفعيل البوصلة... حرك الجوال';

    if ('ondeviceorientationabsolute' in window) {
        try {
            window.addEventListener('deviceorientationabsolute', handleOrientation, true);
            setTimeout(() => {
                if (!orientationGotEvent) {
                    window.addEventListener('deviceorientation', handleStandardOrientation, true);
                }
            }, 3000);
            return;
        } catch (err) { console.warn(err); }
    }
    window.addEventListener('deviceorientation', handleStandardOrientation, true);

    setTimeout(() => {
        if (!orientationGotEvent && hint) {
            hint.textContent = 'لا توجد حساسات بهذا الجهاز — الاتجاه ثابت بالأعلى';
        }
    }, 4000);
}

function handleStandardOrientation(e) {
    if (e.alpha == null && e.webkitCompassHeading == null) return;
    orientationGotEvent = true;
    if (e.webkitCompassHeading != null) {
        applyCompassRotation(e.webkitCompassHeading);
        setQiblaHint('البوصلة تعمل ✓');
    } else if (e.alpha != null) {
        applyCompassRotation((360 - e.alpha) % 360);
        setQiblaHint(e.absolute === true ? 'البوصلة تعمل ✓' : 'وضع تقريبي ⚠ لوّح بالجوال للمعايرة');
    }
}

function setQiblaHint(text) {
    const hint = document.getElementById('qibla-hint');
    if (hint) hint.textContent = text;
}

function handleOrientation(e) {
    if (e.alpha == null) return;
    orientationGotEvent = true;
    applyCompassRotation((360 - e.alpha) % 360);
    setQiblaHint('البوصلة تعمل ✓');
}

/* ===========================
   BOTTOM NAV + PAGE SWITCHING
=========================== */
const pageOrder = ['page-home', 'page-list', 'page-prayer', 'page-academic'];

function switchPage(pageId) {
    const btns = document.querySelectorAll('.bnav-btn');
    const pages = document.querySelectorAll('.page');

    btns.forEach(b => {
        const isTarget = b.getAttribute('data-page') === pageId;
        b.classList.toggle('active', isTarget);
    });

    pages.forEach(p => {
        const isTarget = p.id === pageId;
        p.classList.toggle('active', isTarget);
        if (isTarget) p.scrollTop = 0;
    });
}

function setupNav() {
    const btns = document.querySelectorAll('.bnav-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchPage(btn.getAttribute('data-page'));
        });
    });
    setupGestures();
}

function setupGestures() {
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const dx = touchEndX - touchStartX;
        const dy = touchEndY - touchStartY;
        
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
            const activePage = document.querySelector('.page.active');
            if (!activePage) return;
            const currentIndex = pageOrder.indexOf(activePage.id);
            if (dx > 0 && currentIndex > 0) {
                switchPage(pageOrder[currentIndex - 1]);
            } else if (dx < 0 && currentIndex < pageOrder.length - 1) {
                switchPage(pageOrder[currentIndex + 1]);
            }
        }
    }, { passive: true });
}

/* ===========================
   LIVE CLOCK
 =========================== */
function getHijriDate(date) {
    // Arithmetic Hijri calendar (Kuwaiti algorithm fallback)
    // No longer using hardcoded offset as API is primary source
    let adjustedDate = new Date(date);

    let m = adjustedDate.getMonth() + 1;
    let d = adjustedDate.getDate();
    let y = adjustedDate.getFullYear();

    if (y < 1700) return "";

    let jd;
    if ((y > 1582) || ((y === 1582) && (m > 10)) || ((y === 1582) && (m === 10) && (d > 14))) {
        jd = Math.floor((1461 * (y + 4800 + Math.floor((m - 14) / 12))) / 4) +
             Math.floor((367 * (m - 2 - 12 * Math.floor((m - 14) / 12))) / 12) -
             Math.floor((3 * Math.floor((y + 4900 + Math.floor((m - 14) / 12)) / 100)) / 4) + d - 32075;
    } else {
        jd = 367 * y - Math.floor((7 * (y + 5001 + Math.floor((m - 9) / 7))) / 4) + Math.floor((275 * m) / 9) + d + 1729777;
    }

    let l = jd - 1948440 + 10632;
    let n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    let j = (Math.floor((10985 - l) / 5316)) * (Math.floor((50 * l) / 17719)) + (Math.floor(l / 5670)) * (Math.floor((43 * l) / 15238));
    l = l - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) - (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;
    let month = Math.floor((24 * l) / 709);
    let day = l - Math.floor((709 * month) / 24);
    let year = 30 * n + j - 30;

    const hijriMonths = [
        "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
        "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
    ];

    return `${day} ${hijriMonths[month - 1]} ${year}`;
}

function startLiveClock() {
    const dayNameEl = document.getElementById('live-day-name');
    const dateEl = document.getElementById('live-date');
    const timeEl = document.getElementById('live-time');
    if (!dayNameEl || !dateEl || !timeEl) return;

    const update = () => {
        const now = new Date();
        
        // Day name
        const dayName = now.toLocaleDateString('ar-SA', { weekday: 'long' });
        
        // Hijri date: Prioritize Umm al-Qura from API, fallback to manual
        let hijri = '';
        if (currentHijriData) {
            hijri = `${currentHijriData.day} ${currentHijriData.month.ar} ${currentHijriData.year}`;
        } else {
            hijri = getHijriDate(now);
        }
        
        // Gregorian date
        const greg = now.toLocaleDateString('ar-u-nu-latn', { 
            day: 'numeric', month: 'long', year: 'numeric' 
        });

        dayNameEl.textContent = dayName;
        dateEl.textContent = `${hijri} هـ - ${greg} م`;

        // Time
        let h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();
        const period = h >= 12 ? 'م' : 'ص';
        h = h % 12;
        if (h === 0) h = 12;
        
        timeEl.textContent = `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} ${period}`;
    };

    update();
    setInterval(update, 1000);
}

/* ===========================
   ACADEMIC CALENDAR LOGIC
 =========================== */
const academicEvents = [
    { name: "عودة المشرفين والإداريين", date: "2026-08-11", hijri: "28 صفر 1448", type: "academic" },
    { name: "عودة المعلمين والمعلمات", date: "2026-08-16", hijri: "3 ربيع الأول 1448", type: "academic" },
    { name: "بداية العام الدراسي - الفصل الأول", date: "2026-08-23", hijri: "10 ربيع الأول 1448", type: "academic" },
    { name: "بداية الدراسة (مكة - المدينة - جدة - الطائف)", date: "2026-08-30", hijri: "17 ربيع الأول 1448", type: "academic" },
    { name: "إجازة اليوم الوطني الـ96", date: "2026-09-23", hijri: "12 ربيع الآخر 1448", type: "holiday" },
    { name: "إجازة الخريف (منتصف الفصل الأول)", date: "2026-11-20", hijri: "10 جمادى الآخرة 1448", type: "holiday" },
    { name: "استئناف الدراسة بعد إجازة الخريف", date: "2026-11-29", hijri: "19 جمادى الآخرة 1448", type: "academic" },
    { name: "بداية اختبارات الفصل الدراسي الأول", date: "2026-12-20", hijri: "11 رجب 1448", type: "academic" },
    { name: "إجازة منتصف العام الدراسي", date: "2027-01-08", hijri: "30 رجب 1448", type: "holiday" },
    { name: "بداية الفصل الدراسي الثاني", date: "2027-01-17", hijri: "9 شعبان 1448", type: "academic" },
    { name: "إجازة يوم التأسيس", date: "2027-02-19", hijri: "12 رمضان 1448", type: "holiday" },
    { name: "إجازة عيد الفطر المبارك", date: "2027-02-26", hijri: "19 رمضان 1448", type: "holiday" },
    { name: "استئناف الدراسة بعد عيد الفطر", date: "2027-03-14", hijri: "6 شوال 1448", type: "academic" },
    { name: "إجازة عيد الأضحى المبارك", date: "2027-05-07", hijri: "1 ذو الحجة 1448", type: "holiday" },
    { name: "استئناف الدراسة بعد عيد الأضحى", date: "2027-05-23", hijri: "17 ذو الحجة 1448", type: "academic" },
    { name: "بداية الاختبارات النهائية (الفصل الثاني)", date: "2027-06-06", hijri: "1 محرم 1449", type: "academic" },
    { name: "بداية إجازة نهاية العام الدراسي", date: "2027-06-24", hijri: "19 محرم 1449", type: "academic" },
    { name: "بداية إجازة نهاية العام (مكة - المدينة - جدة - الطائف)", date: "2027-07-01", hijri: "26 محرم 1449", type: "academic" },
    { name: "بداية العام الدراسي الجديد 1449هـ", date: "2027-08-22", hijri: "20 ربيع الأول 1449", type: "academic" }
];

function initAcademic() {
    renderAcademicAgenda();
    updateAcademicProgress();
    startAcademicCountdown();
}

function renderAcademicAgenda() {
    const container = document.getElementById('academic-agenda-container');
    if (!container) return;
    
    container.innerHTML = '';
    const now = new Date();
    const sorted = [...academicEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    sorted.forEach(event => {
        const eDate = new Date(event.date);
        if (eDate < now && eDate.toDateString() !== now.toDateString()) return;
        const isPast = false;
        const isUpcoming = eDate > now;
        const diffDays = Math.ceil((eDate - now) / (1000 * 60 * 60 * 24));
        
        let countdownHtml = '';
        let cClass = '';
        if (isUpcoming) { countdownHtml = `متبقي ${diffDays} يوم`; }
        else if (Math.abs(diffDays) < 1 && eDate.toDateString() === now.toDateString()) {
            countdownHtml = `اليوم`; cClass = 'today';
        } else { countdownHtml = `انتهى`; cClass = 'past'; }
        
        const statusClass = isPast ? 'status-past' : (isUpcoming ? 'status-upcoming' : 'status-current');
        const statusText = isPast ? 'انتهى' : (isUpcoming ? 'قادم' : 'اليوم');
        const cardClass = isPast ? 'academic-event-card past' : 'academic-event-card';
        const typeClass = event.type === 'holiday' ? ' holiday' : '';
        const dayName = new Intl.DateTimeFormat('ar-SA', { weekday: 'long' }).format(eDate);
        
        container.innerHTML += `
            <div class="${cardClass}${typeClass}">
                <div class="aec-top">
                    <div class="aec-date-info">
                        <span class="aec-day-name">${dayName}</span>
                        <div class="aec-date-row">${event.hijri} هـ | ${event.date} م</div>
                        <div class="aec-name">${event.name}</div>
                    </div>
                    <div class="aec-status ${statusClass}">${statusText}</div>
                </div>
                <div class="aec-countdown ${cClass}">${countdownHtml}</div>
            </div>
        `;
    });
    if (!container.innerHTML.trim()) {
        container.innerHTML = '<div class="academic-event-card"><div class="aec-name">لا توجد مواعيد قادمة</div></div>';
    }
}

function updateAcademicProgress() {
    const start = new Date("2026-08-23"), end = new Date("2027-06-24"), now = new Date();
    const total = end - start, elapsed = now - start;
    let percent = Math.min(Math.max((elapsed / total) * 100, 0), 100).toFixed(1);
    
    const bar = document.getElementById('academic-progress-bar');
    const val = document.getElementById('academic-progress-val');
    const txt = document.getElementById('academic-days-text');
    
    if (bar) bar.style.width = `${percent}%`;
    if (val) val.innerText = `${percent}%`;
    const tDays = Math.floor(total / 86400000), eDays = Math.floor(elapsed / 86400000);
    if (txt) txt.innerText = `مرّ ${eDays} يوماً، ومتبقي ${Math.max(0, tDays - eDays)} يوماً على نهاية العام`;
}

function startAcademicCountdown() {
    const now = new Date();
    const next = academicEvents.find(e => new Date(e.date) > now);
    const titleEl = document.getElementById('academic-next-title'), dateEl = document.getElementById('academic-next-date');
    if (!titleEl || !dateEl) return;
    
    if (!next) { titleEl.innerText = "انتهى العام الدراسي"; dateEl.innerText = ""; return; }
    
    const targetDate = new Date(next.date);
    const dayName = new Intl.DateTimeFormat('ar-SA', { weekday: 'long' }).format(targetDate);
    titleEl.innerText = `المتبقي على: ${next.name}`;
    dateEl.innerText = `${dayName} | ${next.hijri} هـ | ${next.date} م`;
    
    const update = () => {
        const diff = targetDate.getTime() - new Date().getTime();
        if (diff < 0) { startAcademicCountdown(); return; }
        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const dEl = document.getElementById('academic-days'), hEl = document.getElementById('academic-hours'), mEl = document.getElementById('academic-minutes');
        if (dEl) dEl.innerText = String(days).padStart(2, '0');
        if (hEl) hEl.innerText = String(hours).padStart(2, '0');
        if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
    };
    update();
    setInterval(update, 15000);
}

/* ===========================
   PWA INSTALL (iOS / Android / Desktop)
=========================== */
let deferredPrompt = null;

function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}
function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function setupInstall() {
    const btn = document.getElementById('install-btn');
    const sheet = document.getElementById('install-sheet');
    const body = document.getElementById('install-body');
    const primary = document.getElementById('install-primary');
    const close = document.getElementById('install-close');
    if (!btn || !sheet) return;
    if (isStandalone()) return;

    const openSheet = () => {
        if (isIOS()) {
            body.innerHTML = '<ol><li>اضغط زر <b>مشاركة ⬆️</b> في سفاري</li><li>اختر <b>إضافة إلى الشاشة الرئيسية</b></li><li>اضغط <b>إضافة</b></li></ol>';
            primary.style.display = 'none';
        } else if (deferredPrompt) {
            body.innerHTML = 'اضغط زر تثبيت لإضافة التطبيق على جهازك وفتحه بملء الشاشة.';
            primary.style.display = '';
            primary.textContent = 'تثبيت';
        } else {
            const ua = navigator.userAgent;
            if (/android/i.test(ua)) {
                body.innerHTML = '<ol><li>افتح قائمة <b>⋮</b> في المتصفح</li><li>اختر <b>تثبيت التطبيق / إضافة إلى الشاشة الرئيسية</b></li></ol>';
            } else {
                body.innerHTML = '<ol><li>افتح قائمة المتصفح <b>⋮</b></li><li>اختر <b>تثبيت / Install</b> أو <b>حفظ وإرسال ← إنشاء اختصار</b></li></ol>';
            }
            primary.style.display = 'none';
        }
        sheet.hidden = false;
    };
    window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault();
        deferredPrompt = e;
        btn.hidden = false;
    });
    if (!isIOS()) {
        setTimeout(() => { if (!deferredPrompt) btn.hidden = false; }, 3000);
    } else {
        btn.hidden = false;
    }
    btn.addEventListener('click', openSheet);
    if (close) close.addEventListener('click', () => sheet.hidden = true);
    sheet.addEventListener('click', e => { if (e.target === sheet) sheet.hidden = true; });
    if (primary) primary.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
        sheet.hidden = true;
    });
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
    }
}

/* ===========================
   ENTRY POINT
=========================== */
document.addEventListener('DOMContentLoaded', () => {
    setupLiveFeatures();
    init();
    setupNav();
    startLiveClock();
    initAcademic();
    setupInstall();
});
