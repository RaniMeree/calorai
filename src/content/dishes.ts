import type { Locale } from '@/i18n/config';

// "Calories in <dish>" pages. Each dish is written in one language, for the people who search for it there.
// Values are estimates for a typical serving, built from ingredient data (USDA FoodData Central) and
// typical recipes and portions, rounded. Body format is the same as blog posts (see content/posts.ts).

export type Dish = {
  slug: string;
  lang: Locale;
  name: string;
  title: string;
  description: string;
  date: string;
  serving: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  body: string;
  faq: { q: string; a: string }[];
};

// Labels for the dish page, only for languages that have dishes.
export const dishLabels: Partial<Record<Locale, {
  section: string; perServing: string; kcal: string; protein: string; carbs: string; fat: string;
  estimate: string; faq: string; sources: string;
}>> = {
  en: { section: 'Calories in popular dishes', perServing: 'Per serving', kcal: 'kcal', protein: 'Protein', carbs: 'Carbs', fat: 'Fat', estimate: 'Estimate for a typical serving. Real values depend on the recipe, oil and portion size.', faq: 'Questions & answers', sources: 'Sources' },
  ar: { section: 'سعرات الأطباق المشهورة', perServing: 'لكل حصة', kcal: 'سعرة', protein: 'بروتين', carbs: 'كربوهيدرات', fat: 'دهون', estimate: 'تقدير لحصة عادية. القيم الفعلية تعتمد على الوصفة وكمية الزيت وحجم الحصة.', faq: 'أسئلة وأجوبة', sources: 'المصادر' },
  fa: { section: 'کالری غذاهای محبوب', perServing: 'در هر وعده', kcal: 'کیلوکالری', protein: 'پروتئین', carbs: 'کربوهیدرات', fat: 'چربی', estimate: 'تخمین برای یک وعده معمولی. مقدار واقعی به دستور پخت، مقدار روغن و اندازه وعده بستگی دارد.', faq: 'پرسش و پاسخ', sources: 'منابع' },
  tr: { section: 'Popüler yemeklerin kalorisi', perServing: 'Porsiyon başına', kcal: 'kcal', protein: 'Protein', carbs: 'Karbonhidrat', fat: 'Yağ', estimate: 'Ortalama bir porsiyon için tahmindir. Gerçek değerler tarife, yağa ve porsiyona göre değişir.', faq: 'Sorular ve yanıtlar', sources: 'Kaynaklar' },
  hi: { section: 'लोकप्रिय व्यंजनों की कैलोरी', perServing: 'प्रति सर्विंग', kcal: 'kcal', protein: 'प्रोटीन', carbs: 'कार्ब्स', fat: 'फ़ैट', estimate: 'एक सामान्य सर्विंग का अनुमान। असली मात्रा रेसिपी, तेल और पोर्शन पर निर्भर करती है।', faq: 'सवाल और जवाब', sources: 'स्रोत' },
  de: { section: 'Kalorien beliebter Gerichte', perServing: 'Pro Portion', kcal: 'kcal', protein: 'Eiweiß', carbs: 'Kohlenhydrate', fat: 'Fett', estimate: 'Schätzung für eine typische Portion. Die echten Werte hängen von Rezept, Öl und Portionsgröße ab.', faq: 'Fragen & Antworten', sources: 'Quellen' },
  es: { section: 'Calorías de platos populares', perServing: 'Por ración', kcal: 'kcal', protein: 'Proteínas', carbs: 'Carbohidratos', fat: 'Grasas', estimate: 'Estimación para una ración típica. Los valores reales dependen de la receta, el aceite y el tamaño de la ración.', faq: 'Preguntas y respuestas', sources: 'Fuentes' },
};

export const dishSources: Partial<Record<Locale, string[]>> = {
  en: ['Estimates built from USDA FoodData Central ingredient data and typical recipes and portions, rounded.', 'Disclosure: this page is published by the team behind CalorAI.'],
  ar: ['تقديرات مبنية على بيانات المكونات من USDA FoodData Central ووصفات وحصص معتادة، مع التقريب.', 'إفصاح: هذه الصفحة منشورة من فريق CalorAI.'],
  fa: ['تخمین‌ها بر اساس داده‌های مواد غذایی USDA FoodData Central و دستور پخت‌ها و وعده‌های معمول، گرد شده.', 'افشا: این صفحه را تیم CalorAI منتشر کرده است.'],
  tr: ['Tahminler USDA FoodData Central malzeme verileri ile yaygın tarif ve porsiyonlardan hesaplanmış ve yuvarlanmıştır.', 'Açıklama: Bu sayfa CalorAI ekibi tarafından yayımlanmıştır.'],
  hi: ['अनुमान USDA FoodData Central के सामग्री डेटा और आम रेसिपी व पोर्शन से निकाले गए हैं, गोल किए गए।', 'खुलासा: यह पेज CalorAI की टीम ने प्रकाशित किया है।'],
  de: ['Schätzungen auf Basis von Zutatendaten aus USDA FoodData Central sowie typischer Rezepte und Portionen, gerundet.', 'Hinweis: Diese Seite wird vom Team hinter CalorAI veröffentlicht.'],
  es: ['Estimaciones basadas en datos de ingredientes de USDA FoodData Central y en recetas y raciones habituales, redondeadas.', 'Aviso: esta página la publica el equipo de CalorAI.'],
};

const date = '2026-10-19';

export const dishes: Dish[] = [
  {
    slug: 'shawarma-calories',
    lang: 'en',
    name: 'Shawarma',
    title: 'How many calories are in a shawarma?',
    description: 'A chicken shawarma wrap has about 520 calories. See calories for beef, lamb and plate versions, what adds the most, and how to make it lighter.',
    date, serving: '1 chicken shawarma wrap (about 300 g)',
    kcal: 520, protein: 30, carbs: 45, fat: 24,
    body: `A typical chicken shawarma wrap has **about 520 calories**. Most of them come from three places: the flatbread, the garlic sauce and the fat the meat is cooked in. Change any of those and the number moves a lot.

## Calories by type of shawarma
| Shawarma | Portion | Calories |
|---|---|---|
| Chicken shawarma wrap | about 300 g | 520 kcal |
| Beef or lamb shawarma wrap | about 300 g | 600 kcal |
| Shawarma plate with rice, salad and garlic sauce | about 450 g | 850 kcal |
| Extra garlic sauce (toum) | 2 tablespoons (30 g) | 190 kcal |
| French fries inside the wrap | small handful (50 g) | 150 kcal |

## What adds the most calories
- **Garlic sauce.** Toum is mostly oil. Two extra spoons add as much as a small meal.
- **Fries inside the wrap.** Common in many shops, and easy to miss.
- **Beef and lamb** have more fat than chicken.
- **A plate with rice** is a bigger portion than a wrap.

## How to make it lighter
- Ask for less garlic sauce, or tahini on the side.
- Skip the fries inside, add extra salad and pickles instead.
- Choose chicken, and a wrap instead of a plate.

## Log it in seconds
Shawarma looks different in every shop. Take a photo with CalorAI and it estimates the calories, protein, carbs and fat for the wrap in front of you, and you can adjust the portion before you save it.`,
    faq: [
      { q: 'How many calories are in a chicken shawarma?', a: 'A typical chicken shawarma wrap of about 300 g has around 520 calories, with about 30 g protein, 45 g carbs and 24 g fat.' },
      { q: 'Is shawarma healthy for weight loss?', a: 'It can fit a diet. Chicken shawarma gives a lot of protein; keep the garlic sauce small and skip fries inside the wrap to save 200–350 calories.' },
      { q: 'How many calories are in garlic sauce?', a: 'Garlic sauce (toum) is mostly oil: about 190 calories in two tablespoons (30 g).' },
    ],
  },
  {
    slug: 'kabsa-calories',
    lang: 'ar',
    name: 'الكبسة',
    title: 'كم سعرة حرارية في الكبسة؟',
    description: 'صحن كبسة دجاج فيه حوالي 600 سعرة حرارية. تعرّف على سعرات كبسة اللحم والرز وحده، وما الذي يرفع السعرات، وكيف تجعلها أخف.',
    date, serving: 'صحن كبسة دجاج (حوالي 350 غرام)',
    kcal: 600, protein: 35, carbs: 70, fat: 20,
    body: `صحن كبسة الدجاج العادي فيه **حوالي 600 سعرة حرارية**. معظمها من الرز والزيت أو السمن، والباقي من الدجاج. كبسة اللحم أعلى في السعرات لأن اللحم فيه دهون أكثر.

## سعرات الكبسة حسب النوع
| الطبق | الكمية | السعرات |
|---|---|---|
| كبسة دجاج | صحن، حوالي 350 غرام | 600 سعرة |
| كبسة لحم | صحن، حوالي 350 غرام | 750 سعرة |
| نصف صحن كبسة دجاج | حوالي 175 غرام | 300 سعرة |
| رز الكبسة وحده | كوب، حوالي 200 غرام | 330 سعرة |
| دقوس أو سلطة | ملعقتان كبيرتان | 15 سعرة |

## ما الذي يرفع السعرات
- **السمن أو الزيت** في طبخ الرز. ملعقة كبيرة زيادة تضيف حوالي 120 سعرة.
- **جلد الدجاج** والقطع الدهنية من اللحم.
- **المكسرات والزبيب** فوق الرز.
- **حجم الصحن.** في العزائم يكون الصحن غالبًا أكبر من 350 غرام.

## كيف تجعلها أخف
- اختر صدر الدجاج وأزل الجلد.
- خذ نصف كمية الرز وأضف سلطة.
- قلّل السمن في الطبخ، فالطعم يبقى قريبًا.

## سجّلها في ثوانٍ
كل بيت يطبخ الكبسة بطريقته. صوّر صحنك بـ CalorAI ويقدّر لك السعرات والبروتين والكربوهيدرات والدهون للصحن الذي أمامك، ويمكنك تعديل الكمية قبل الحفظ.`,
    faq: [
      { q: 'كم سعرة في صحن كبسة دجاج؟', a: 'صحن كبسة دجاج عادي (حوالي 350 غرام) فيه حوالي 600 سعرة حرارية، مع حوالي 35 غرام بروتين و70 غرام كربوهيدرات و20 غرام دهون.' },
      { q: 'هل الكبسة مناسبة للرجيم؟', a: 'نعم بكمية معتدلة. اختر الدجاج بدون جلد، وخذ نصف كمية الرز مع سلطة، فتوفر حوالي 250 سعرة.' },
      { q: 'كم سعرة في كوب رز الكبسة؟', a: 'كوب رز كبسة (حوالي 200 غرام) فيه حوالي 330 سعرة، حسب كمية الزيت أو السمن.' },
    ],
  },
  {
    slug: 'ghormeh-sabzi-calories',
    lang: 'fa',
    name: 'قورمه‌سبزی',
    title: 'قورمه‌سبزی چند کالری دارد؟',
    description: 'یک کاسه قورمه‌سبزی حدود ۳۳۰ کالری دارد و با یک بشقاب چلو به حدود ۶۳۰ کالری می‌رسد. کالری ته‌دیگ و راه‌های سبک‌تر کردن آن را ببینید.',
    date, serving: 'یک کاسه خورش (حدود ۲۵۰ گرم)، بدون برنج',
    kcal: 330, protein: 22, carbs: 15, fat: 20,
    body: `یک کاسه قورمه‌سبزی (حدود ۲۵۰ گرم) **حدود ۳۳۰ کالری** دارد. بیشتر کالری آن از روغنی است که سبزی در آن سرخ می‌شود و از گوشت. چیزی که عدد را بالا می‌برد معمولاً خود خورش نیست، بلکه برنج و ته‌دیگ کنار آن است.

## کالری قورمه‌سبزی و همراهانش
| غذا | مقدار | کالری |
|---|---|---|
| خورش قورمه‌سبزی | یک کاسه، حدود ۲۵۰ گرم | ۳۳۰ کالری |
| چلو | یک بشقاب، حدود ۲۰۰ گرم | ۳۰۰ کالری |
| قورمه‌سبزی با چلو | یک وعده کامل | ۶۳۰ کالری |
| ته‌دیگ برنج | یک تکه، حدود ۵۰ گرم | ۱۵۰ کالری |
| ماست | نصف لیوان، حدود ۱۰۰ گرم | ۶۰ کالری |

## چه چیزی کالری را بالا می‌برد
- **روغن سرخ کردن سبزی.** هر قاشق غذاخوری روغن اضافه حدود ۱۲۰ کالری است.
- **گوشت چرب‌تر،** مثلاً گوشت گوسفندی پرچربی به جای گوشت گوساله کم‌چرب.
- **کره روی چلو و ته‌دیگ.**
- **بشقاب پر از برنج** که معمولاً بیشتر از ۲۰۰ گرم است.

## چطور سبک‌ترش کنیم
- سبزی را با روغن کمتر تفت بده؛ طعمش تقریباً همان می‌ماند.
- گوشت کم‌چرب انتخاب کن و چربی روی خورش را بگیر.
- نصف بشقاب برنج بکش و به جایش سالاد شیرازی یا ماست بگذار.

## در چند ثانیه ثبتش کن
قورمه‌سبزی هر خانه‌ای با خانه دیگر فرق دارد. با CalorAI از بشقابت عکس بگیر تا کالری، پروتئین، کربوهیدرات و چربی همان غذا را تخمین بزند و پیش از ذخیره بتوانی اندازه وعده را اصلاح کنی.`,
    faq: [
      { q: 'یک کاسه قورمه‌سبزی چند کالری است؟', a: 'یک کاسه قورمه‌سبزی (حدود ۲۵۰ گرم) بدون برنج حدود ۳۳۰ کالری دارد، با حدود ۲۲ گرم پروتئین، ۱۵ گرم کربوهیدرات و ۲۰ گرم چربی.' },
      { q: 'قورمه‌سبزی با برنج چند کالری دارد؟', a: 'یک کاسه خورش با یک بشقاب چلو (حدود ۲۰۰ گرم) در مجموع حدود ۶۳۰ کالری است. هر تکه ته‌دیگ حدود ۱۵۰ کالری اضافه می‌کند.' },
      { q: 'آیا قورمه‌سبزی برای رژیم مناسب است؟', a: 'بله، خورش پر از سبزی و پروتئین است. برنج را کمتر کن، ته‌دیگ را حذف کن و روغن کمتری به کار ببر.' },
    ],
  },
  {
    slug: 'lahmacun-kalori',
    lang: 'tr',
    name: 'Lahmacun',
    title: 'Lahmacun kaç kalori?',
    description: 'Bir lahmacun yaklaşık 350 kalori. Ayranlı menünün, iki lahmacunun kalorisini, kaloriyi neyin artırdığını ve daha hafif yemenin yollarını öğren.',
    date, serving: '1 adet lahmacun (yaklaşık 160 g)',
    kcal: 350, protein: 15, carbs: 45, fat: 12,
    body: `Bir lahmacun (yaklaşık 160 g) **yaklaşık 350 kalori**. Kalorinin çoğu hamurdan, geri kalanı kıymanın yağından gelir. Asıl fark, kaç tane yediğin ve yanında ne içtiğinle ortaya çıkar.

## Lahmacun kalorisi
| Yemek | Miktar | Kalori |
|---|---|---|
| Lahmacun | 1 adet, yaklaşık 160 g | 350 kcal |
| İki lahmacun | 2 adet | 700 kcal |
| İki lahmacun ve ayran | 2 adet + 200 ml ayran | 775 kcal |
| Ayran | 1 bardak, 200 ml | 75 kcal |
| Yeşillik, soğan ve limon | 1 porsiyon | 20 kcal |

## Kaloriyi ne artırır
- **Yağlı kıyma.** Yağ oranı yüksek kıyma, adet başına 50–80 kalori ekleyebilir.
- **Büyük boy hamur.** Bazı yerlerde lahmacun 200 g'ın üzerindedir.
- **Kola gibi şekerli içecekler.** Bir kutu kola yaklaşık 140 kalori ekler.

## Daha hafif nasıl yenir
- İkinci lahmacun yerine bol yeşillik ve salata ekle.
- İçecek olarak ayran ya da su seç.
- Evde yapıyorsan az yağlı kıyma kullan.

## Saniyeler içinde kaydet
Her fırının lahmacunu biraz farklıdır. CalorAI ile fotoğrafını çek; önündeki lahmacunun kalorisini, proteinini, karbonhidratını ve yağını tahmin etsin, kaydetmeden önce porsiyonu düzeltebilirsin.`,
    faq: [
      { q: '1 lahmacun kaç kalori?', a: 'Ortalama bir lahmacun (yaklaşık 160 g) yaklaşık 350 kaloridir; yaklaşık 15 g protein, 45 g karbonhidrat ve 12 g yağ içerir.' },
      { q: 'Lahmacun ve ayran kaç kalori?', a: 'İki lahmacun ve bir bardak ayran (200 ml) toplam yaklaşık 775 kaloridir.' },
      { q: 'Diyette lahmacun yenir mi?', a: 'Evet, ölçülü yenirse. Bir lahmacunu bol yeşillik ve ayranla ye; ikinci lahmacunu atlamak yaklaşık 350 kalori kazandırır.' },
    ],
  },
  {
    slug: 'biryani-calories',
    lang: 'hi',
    name: 'बिरयानी',
    title: 'बिरयानी में कितनी कैलोरी होती है?',
    description: 'एक प्लेट चिकन बिरयानी में लगभग 550 कैलोरी होती है। मटन और वेज बिरयानी की कैलोरी, कैलोरी किससे बढ़ती है और इसे हल्का कैसे बनाएँ, जानें।',
    date, serving: '1 प्लेट चिकन बिरयानी (लगभग 350 ग्राम)',
    kcal: 550, protein: 28, carbs: 65, fat: 20,
    body: `एक प्लेट चिकन बिरयानी (लगभग 350 ग्राम) में **लगभग 550 कैलोरी** होती है। ज़्यादातर कैलोरी चावल और घी या तेल से आती है, बाकी चिकन से। मटन बिरयानी में फ़ैट ज़्यादा होने की वजह से कैलोरी और बढ़ जाती है।

## बिरयानी की कैलोरी
| व्यंजन | मात्रा | कैलोरी |
|---|---|---|
| चिकन बिरयानी | 1 प्लेट, लगभग 350 ग्राम | 550 kcal |
| मटन बिरयानी | 1 प्लेट, लगभग 350 ग्राम | 650 kcal |
| वेज बिरयानी | 1 प्लेट, लगभग 350 ग्राम | 430 kcal |
| रायता | 1 कटोरी, लगभग 100 ग्राम | 70 kcal |
| सालन या ग्रेवी | 1 कटोरी, लगभग 100 ग्राम | 150 kcal |

## कैलोरी किससे बढ़ती है
- **घी और तेल।** एक बड़ा चम्मच ज़्यादा घी लगभग 120 कैलोरी जोड़ता है।
- **तले हुए प्याज़ (बिरिस्ता) और काजू।**
- **मटन के चर्बी वाले टुकड़े।**
- **बड़ी प्लेट।** रेस्टोरेंट की एक प्लेट अक्सर 500 ग्राम से ज़्यादा होती है।

## इसे हल्का कैसे बनाएँ
- चिकन बिरयानी चुनें और आधी प्लेट लें।
- साथ में खीरा-प्याज़ का सलाद और रायता लें।
- घर पर बनाएँ तो घी कम डालें और तले प्याज़ थोड़े रखें।

## सेकंडों में लॉग करें
हर घर और रेस्टोरेंट की बिरयानी अलग होती है। CalorAI से अपनी प्लेट की फ़ोटो लें; वह आपकी प्लेट की कैलोरी, प्रोटीन, कार्ब्स और फ़ैट का अनुमान लगाता है, और सेव करने से पहले आप पोर्शन बदल सकते हैं।`,
    faq: [
      { q: 'एक प्लेट चिकन बिरयानी में कितनी कैलोरी होती है?', a: 'एक प्लेट चिकन बिरयानी (लगभग 350 ग्राम) में लगभग 550 कैलोरी होती है, साथ में लगभग 28 ग्राम प्रोटीन, 65 ग्राम कार्ब्स और 20 ग्राम फ़ैट।' },
      { q: 'क्या वज़न घटाते समय बिरयानी खा सकते हैं?', a: 'हाँ, कम मात्रा में। आधी प्लेट चिकन बिरयानी को सलाद और रायते के साथ खाएँ; इससे लगभग 250 कैलोरी बचती है।' },
      { q: 'मटन बिरयानी में कितनी कैलोरी होती है?', a: 'एक प्लेट मटन बिरयानी (लगभग 350 ग्राम) में लगभग 650 कैलोरी होती है, क्योंकि मटन में चिकन से ज़्यादा फ़ैट होता है।' },
    ],
  },
  {
    slug: 'doener-kalorien',
    lang: 'de',
    name: 'Döner',
    title: 'Wie viele Kalorien hat ein Döner?',
    description: 'Ein Döner im Brot hat etwa 680 Kalorien. Kalorien für Dürüm, Dönerbox und Soße, was am meisten ausmacht und wie du ihn leichter isst.',
    date, serving: '1 Döner im Brot (etwa 400 g)',
    kcal: 680, protein: 35, carbs: 65, fat: 30,
    body: `Ein Döner im Brot (etwa 400 g) hat **etwa 680 Kalorien**. Die meisten kommen vom Fladenbrot, vom Fleisch und von der Soße. Wie viel es am Ende wird, hängt stark von der Soße und der Portion ab.

## Kalorien nach Art
| Döner | Portion | Kalorien |
|---|---|---|
| Döner im Brot | etwa 400 g | 680 kcal |
| Dürüm (Wrap) | etwa 400 g | 620 kcal |
| Dönerbox mit Pommes | etwa 450 g | 900 kcal |
| Dönerteller mit Salat, ohne Pommes | etwa 400 g | 600 kcal |
| Extra Knoblauchsoße | 2 EL (30 g) | 120 kcal |

## Was am meisten ausmacht
- **Soßen.** Knoblauch- und Kräutersoße basieren meist auf Mayonnaise oder Joghurt mit Öl.
- **Pommes** in der Box oder im Brot.
- **Kalbs- oder Lammfleisch** hat mehr Fett als Hähnchen.
- **Große Portionen.** Viele Läden geben deutlich mehr als 400 g.

## So wird er leichter
- Hähnchendöner wählen und viel Salat dazu.
- Soße nur einmal, oder Joghurt- statt Knoblauchsoße.
- Teller mit Salat statt Box mit Pommes.

## In Sekunden erfasst
Jeder Döner ist anders. Mach mit CalorAI ein Foto und die App schätzt Kalorien, Eiweiß, Kohlenhydrate und Fett für genau deinen Döner; die Portion kannst du vor dem Speichern anpassen.`,
    faq: [
      { q: 'Wie viele Kalorien hat ein Döner im Brot?', a: 'Ein Döner im Brot (etwa 400 g) hat rund 680 Kalorien, mit etwa 35 g Eiweiß, 65 g Kohlenhydraten und 30 g Fett.' },
      { q: 'Hat ein Dürüm weniger Kalorien als ein Döner?', a: 'Etwas weniger: Ein Dürüm hat etwa 620 Kalorien, weil das Yufka-Brot dünner ist als das Fladenbrot.' },
      { q: 'Kann man beim Abnehmen Döner essen?', a: 'Ja, ab und zu. Mit Hähnchen, viel Salat und wenig Soße sparst du leicht 150–250 Kalorien.' },
    ],
  },
  {
    slug: 'paella-calorias',
    lang: 'es',
    name: 'Paella',
    title: '¿Cuántas calorías tiene una paella?',
    description: 'Un plato de paella mixta tiene unas 500 calorías. Calorías de la paella de marisco y valenciana, qué las aumenta y cómo comerla más ligera.',
    date, serving: '1 plato de paella mixta (unos 350 g)',
    kcal: 500, protein: 25, carbs: 65, fat: 15,
    body: `Un plato de paella mixta (unos 350 g) tiene **unas 500 calorías**. La mayoría vienen del arroz y del aceite de oliva; el resto, del pollo, el marisco o la carne. El tamaño del plato es lo que más cambia el resultado.

## Calorías según el tipo de paella
| Paella | Ración | Calorías |
|---|---|---|
| Paella mixta | 1 plato, unos 350 g | 500 kcal |
| Paella de marisco | 1 plato, unos 350 g | 450 kcal |
| Paella valenciana (pollo y conejo) | 1 plato, unos 350 g | 520 kcal |
| Ración grande de paella mixta | unos 500 g | 710 kcal |
| Alioli | 1 cucharada (15 g) | 110 kcal |

## Qué aumenta las calorías
- **El aceite.** Cada cucharada extra suma unas 120 calorías.
- **El chorizo,** que no es tradicional pero aparece en muchas versiones.
- **El alioli** que se sirve al lado.
- **Repetir plato,** muy habitual en comidas familiares.

## Cómo comerla más ligera
- Elige paella de marisco, con menos grasa que la de carne.
- Sirve un plato normal y acompáñalo con ensalada.
- Toma el alioli con moderación.

## Regístrala en segundos
Cada paella es distinta. Haz una foto con CalorAI y la app estima las calorías, proteínas, carbohidratos y grasas de tu plato, y puedes ajustar la ración antes de guardarla.`,
    faq: [
      { q: '¿Cuántas calorías tiene un plato de paella?', a: 'Un plato de paella mixta (unos 350 g) tiene unas 500 calorías, con unos 25 g de proteínas, 65 g de carbohidratos y 15 g de grasas.' },
      { q: '¿Qué paella tiene menos calorías?', a: 'La paella de marisco suele ser la más ligera, con unas 450 calorías por plato de 350 g.' },
      { q: '¿Se puede comer paella a dieta?', a: 'Sí, con una ración normal y ensalada. Evitar repetir y moderar el alioli ahorra fácilmente 200–300 calorías.' },
    ],
  },
];

export const dishesFor = (lang: Locale) => dishes.filter((d) => d.lang === lang);
export const getDish = (lang: Locale, slug: string) => dishes.find((d) => d.lang === lang && d.slug === slug);
