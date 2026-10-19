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
  sv: { section: 'Kalorier i populära rätter', perServing: 'Per portion', kcal: 'kcal', protein: 'Protein', carbs: 'Kolhydrater', fat: 'Fett', estimate: 'Uppskattning för en vanlig portion. Verkliga värden beror på recept, fett och portionsstorlek.', faq: 'Frågor och svar', sources: 'Källor' },
  da: { section: 'Kalorier i populære retter', perServing: 'Pr. portion', kcal: 'kcal', protein: 'Protein', carbs: 'Kulhydrater', fat: 'Fedt', estimate: 'Skøn for en almindelig portion. De faktiske værdier afhænger af opskrift, fedtstof og portionsstørrelse.', faq: 'Spørgsmål og svar', sources: 'Kilder' },
  fi: { section: 'Suosittujen ruokien kalorit', perServing: 'Annosta kohden', kcal: 'kcal', protein: 'Proteiini', carbs: 'Hiilihydraatit', fat: 'Rasva', estimate: 'Arvio tavalliselle annokselle. Todelliset arvot riippuvat reseptistä, rasvasta ja annoskoosta.', faq: 'Kysymyksiä ja vastauksia', sources: 'Lähteet' },
  el: { section: 'Θερμίδες σε δημοφιλή φαγητά', perServing: 'Ανά μερίδα', kcal: 'kcal', protein: 'Πρωτεΐνη', carbs: 'Υδατάνθρακες', fat: 'Λιπαρά', estimate: 'Εκτίμηση για μια συνηθισμένη μερίδα. Οι πραγματικές τιμές εξαρτώνται από τη συνταγή, το λάδι και το μέγεθος της μερίδας.', faq: 'Ερωτήσεις και απαντήσεις', sources: 'Πηγές' },
  fr: { section: 'Calories des plats populaires', perServing: 'Par portion', kcal: 'kcal', protein: 'Protéines', carbs: 'Glucides', fat: 'Lipides', estimate: 'Estimation pour une portion courante. Les valeurs réelles dépendent de la recette, du beurre et de la taille.', faq: 'Questions et réponses', sources: 'Sources' },
  it: { section: 'Calorie dei piatti più amati', perServing: 'Per porzione', kcal: 'kcal', protein: 'Proteine', carbs: 'Carboidrati', fat: 'Grassi', estimate: 'Stima per una porzione tipica. I valori reali dipendono da ricetta, olio e dimensione della porzione.', faq: 'Domande e risposte', sources: 'Fonti' },
  nl: { section: 'Calorieën in populaire gerechten', perServing: 'Per portie', kcal: 'kcal', protein: 'Eiwit', carbs: 'Koolhydraten', fat: 'Vet', estimate: 'Schatting voor een gewone portie. De echte waarden hangen af van recept, boter en portiegrootte.', faq: 'Vragen en antwoorden', sources: 'Bronnen' },
  pt: { section: 'Calorias de pratos populares', perServing: 'Por porção', kcal: 'kcal', protein: 'Proteínas', carbs: 'Carboidratos', fat: 'Gorduras', estimate: 'Estimativa para uma porção comum. Os valores reais dependem da receita e do tamanho.', faq: 'Perguntas e respostas', sources: 'Fontes' },
  ru: { section: 'Калорийность популярных блюд', perServing: 'На порцию', kcal: 'ккал', protein: 'Белки', carbs: 'Углеводы', fat: 'Жиры', estimate: 'Оценка для обычной порции. Реальные значения зависят от рецепта, жирности и размера порции.', faq: 'Вопросы и ответы', sources: 'Источники' },
  ja: { section: '人気料理のカロリー', perServing: '1人前あたり', kcal: 'kcal', protein: 'たんぱく質', carbs: '炭水化物', fat: '脂質', estimate: '一般的な1人前の推定値です。実際の値はレシピ、油、量によって変わります。', faq: 'よくある質問', sources: '出典' },
  ku: { section: 'Kaloriyên xwarinên navdar', perServing: 'Ji bo beşekê', kcal: 'kcal', protein: 'Proteîn', carbs: 'Karbohîdrat', fat: 'Rûn', estimate: 'Texmîn ji bo beşeke asayî. Nirxên rastîn bi reçete, rûn û mezinahiya beşê ve girêdayî ne.', faq: 'Pirs û bersiv', sources: 'Çavkanî' },
};

export const dishSources: Partial<Record<Locale, string[]>> = {
  en: ['Estimates built from USDA FoodData Central ingredient data and typical recipes and portions, rounded.', 'Disclosure: this page is published by the team behind CalorAI.'],
  ar: ['تقديرات مبنية على بيانات المكونات من USDA FoodData Central ووصفات وحصص معتادة، مع التقريب.', 'إفصاح: هذه الصفحة منشورة من فريق CalorAI.'],
  fa: ['تخمین‌ها بر اساس داده‌های مواد غذایی USDA FoodData Central و دستور پخت‌ها و وعده‌های معمول، گرد شده.', 'افشا: این صفحه را تیم CalorAI منتشر کرده است.'],
  tr: ['Tahminler USDA FoodData Central malzeme verileri ile yaygın tarif ve porsiyonlardan hesaplanmış ve yuvarlanmıştır.', 'Açıklama: Bu sayfa CalorAI ekibi tarafından yayımlanmıştır.'],
  hi: ['अनुमान USDA FoodData Central के सामग्री डेटा और आम रेसिपी व पोर्शन से निकाले गए हैं, गोल किए गए।', 'खुलासा: यह पेज CalorAI की टीम ने प्रकाशित किया है।'],
  de: ['Schätzungen auf Basis von Zutatendaten aus USDA FoodData Central sowie typischer Rezepte und Portionen, gerundet.', 'Hinweis: Diese Seite wird vom Team hinter CalorAI veröffentlicht.'],
  es: ['Estimaciones basadas en datos de ingredientes de USDA FoodData Central y en recetas y raciones habituales, redondeadas.', 'Aviso: esta página la publica el equipo de CalorAI.'],
  sv: ['Uppskattningar baserade på ingrediensdata från USDA FoodData Central samt vanliga recept och portioner, avrundade.', 'Information: sidan publiceras av teamet bakom CalorAI.'],
  da: ['Skøn baseret på ingrediensdata fra USDA FoodData Central og almindelige opskrifter og portioner, afrundet.', 'Oplysning: siden er udgivet af holdet bag CalorAI.'],
  fi: ['Arviot perustuvat USDA FoodData Centralin raaka-ainetietoihin sekä tavallisiin resepteihin ja annoksiin, pyöristetty.', 'Tiedoksi: sivun julkaisee CalorAI:n tiimi.'],
  el: ['Εκτιμήσεις με βάση δεδομένα συστατικών από το USDA FoodData Central και συνηθισμένες συνταγές και μερίδες, στρογγυλεμένες.', 'Γνωστοποίηση: τη σελίδα δημοσιεύει η ομάδα του CalorAI.'],
  fr: ['Estimations établies à partir des données d\'ingrédients de l\'USDA FoodData Central et de recettes et portions courantes, arrondies.', 'Transparence : cette page est publiée par l\'équipe de CalorAI.'],
  it: ['Stime basate sui dati degli ingredienti di USDA FoodData Central e su ricette e porzioni comuni, arrotondate.', 'Nota: questa pagina è pubblicata dal team di CalorAI.'],
  nl: ['Schattingen op basis van ingrediëntgegevens uit USDA FoodData Central en gangbare recepten en porties, afgerond.', 'Let op: deze pagina is gepubliceerd door het team achter CalorAI.'],
  pt: ['Estimativas baseadas em dados de ingredientes do USDA FoodData Central e em receitas e porções comuns, arredondadas.', 'Aviso: esta página é publicada pela equipe do CalorAI.'],
  ru: ['Оценки по данным об ингредиентах из USDA FoodData Central и типичным рецептам и порциям, с округлением.', 'Раскрытие: страницу публикует команда CalorAI.'],
  ja: ['USDA FoodData Centralの食材データと一般的なレシピ・量をもとにした推定値（四捨五入）です。', '開示：このページはCalorAIのチームが公開しています。'],
  ku: ['Texmîn li ser daneyên pêkhateyan ên USDA FoodData Central û reçete û beşên asayî hatine çêkirin, gilover kirî.', 'Agahdarî: ev rûpel ji aliyê tîma CalorAI ve hatiye weşandin.'],
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
  {
    slug: 'kottbullar-kalorier',
    lang: 'sv',
    name: 'Köttbullar',
    title: 'Hur många kalorier har köttbullar?',
    description: 'Tio köttbullar har cirka 330 kalorier. Se kalorierna för en hel tallrik med potatis, gräddsås och lingonsylt, och hur du gör den lättare.',
    date, serving: '10 köttbullar (cirka 150 g)',
    kcal: 330, protein: 22, carbs: 12, fat: 22,
    body: `Tio vanliga köttbullar (cirka 150 g) har **cirka 330 kalorier**. Med potatis, gräddsås och lingonsylt blir det en tallrik på ungefär 650 kalorier. Det är tillbehören, inte bara köttbullarna, som avgör.

## Kalorier i köttbullar och tillbehör
| Mat | Mängd | Kalorier |
|---|---|---|
| Köttbullar | 10 st, cirka 150 g | 330 kcal |
| Kokt potatis | 200 g | 150 kcal |
| Gräddsås | 1 dl | 120 kcal |
| Lingonsylt | 2 msk (30 g) | 50 kcal |
| Hel tallrik med allt ovan | cirka 480 g | 650 kcal |

## Det här höjer kalorierna
- **Gräddsåsen.** Med vispgrädde i stället för matlagningsgrädde blir den betydligt fetare.
- **Smör eller olja i stekpannan.**
- **Potatismos med smör och grädde** i stället för kokt potatis.
- **Fetare färs,** till exempel blandfärs med hög fetthalt.

## Så gör du tallriken lättare
- Välj kokt potatis och ta lite mindre sås.
- Lägg till gurka eller en grön sallad.
- Gör köttbullarna på mager nötfärs eller kycklingfärs.

## Logga på några sekunder
Alla köttbullar är olika. Fota tallriken med CalorAI så uppskattar appen kalorier, protein, kolhydrater och fett för just din portion, och du kan justera mängden innan du sparar.`,
    faq: [
      { q: 'Hur många kalorier har en köttbulle?', a: 'En vanlig köttbulle på cirka 15 g har ungefär 33 kalorier. Tio köttbullar har cirka 330 kalorier.' },
      { q: 'Hur många kalorier har köttbullar med potatis och sås?', a: 'En tallrik med 10 köttbullar, 200 g kokt potatis, 1 dl gräddsås och lingonsylt har ungefär 650 kalorier.' },
      { q: 'Kan man äta köttbullar när man går ner i vikt?', a: 'Ja. Köttbullar ger mycket protein. Ta mindre sås, kokt potatis i stället för mos och mycket grönsaker.' },
    ],
  },
  {
    slug: 'smorrebrod-kalorier',
    lang: 'da',
    name: 'Smørrebrød',
    title: 'Hvor mange kalorier er der i smørrebrød?',
    description: 'Et stykke smørrebrød med leverpostej har cirka 250 kalorier. Se kalorierne for æg og rejer, frikadeller og laks, og hvordan du gør frokosten lettere.',
    date, serving: '1 stykke smørrebrød med leverpostej',
    kcal: 250, protein: 8, carbs: 22, fat: 14,
    body: `Et stykke smørrebrød med leverpostej har **cirka 250 kalorier**. Rugbrødet giver omkring 110, resten kommer fra smør og pålæg. De fleste spiser to eller tre stykker, så frokosten lander typisk på 500–900 kalorier.

## Kalorier i smørrebrød
| Smørrebrød | Mængde | Kalorier |
|---|---|---|
| Leverpostej med agurk | 1 stk | 250 kcal |
| Æg og rejer med mayonnaise | 1 stk | 300 kcal |
| Frikadelle med rødkål | 1 stk | 320 kcal |
| Røget laks | 1 stk | 230 kcal |
| Rugbrød alene | 1 skive (50 g) | 110 kcal |

## Det giver flest kalorier
- **Smør under pålægget.** En tyk klat smør er nemt 50–70 kalorier.
- **Mayonnaise og remoulade.** En spiseskefuld er omkring 100 kalorier.
- **Fede pålæg** som frikadeller, flæskesteg og spegepølse.

## Sådan bliver frokosten lettere
- Spring smørret over, når pålægget er fedt i sig selv.
- Vælg fisk, kylling eller æg uden mayonnaise.
- Spis to stykker og tilføj en salat i stedet for det tredje.

## Log det på få sekunder
Intet smørrebrød er ens. Tag et billede med CalorAI, så skønner appen kalorier, protein, kulhydrater og fedt for netop dit stykke, og du kan justere portionen, før du gemmer.`,
    faq: [
      { q: 'Hvor mange kalorier er der i et stykke rugbrød med leverpostej?', a: 'Omkring 250 kalorier med smør og agurk, med cirka 8 g protein, 22 g kulhydrater og 14 g fedt.' },
      { q: 'Hvor mange kalorier er der i en skive rugbrød?', a: 'En skive rugbrød på cirka 50 g har omkring 110 kalorier.' },
      { q: 'Hvilket smørrebrød har færrest kalorier?', a: 'Smørrebrød med røget laks, kylling eller æg uden mayonnaise ligger typisk på 200–250 kalorier pr. stykke.' },
    ],
  },
  {
    slug: 'karjalanpiirakka-kalorit',
    lang: 'fi',
    name: 'Karjalanpiirakka',
    title: 'Montako kaloria on karjalanpiirakassa?',
    description: 'Yhdessä karjalanpiirakassa on noin 140 kaloria ja munavoin kanssa noin 230. Katso, mistä kalorit tulevat ja miten piirakoista saa kevyemmät.',
    date, serving: '1 karjalanpiirakka (noin 65 g)',
    kcal: 140, protein: 4, carbs: 24, fat: 3,
    body: `Yhdessä riisikarjalanpiirakassa (noin 65 g) on **noin 140 kaloria**. Piirakka itsessään on melko kevyt. Kaloreita tulee eniten munavoista ja siitä, montako piirakkaa syö.

## Karjalanpiirakan kalorit
| Ruoka | Määrä | Kalorit |
|---|---|---|
| Karjalanpiirakka | 1 kpl, noin 65 g | 140 kcal |
| Munavoi | 1 rkl, noin 20 g | 90 kcal |
| Piirakka munavoilla | 1 kpl | 230 kcal |
| Kolme piirakkaa munavoilla | 3 kpl | 690 kcal |
| Perunapiirakka | 1 kpl, noin 65 g | 130 kcal |

## Mikä lisää kaloreita
- **Munavoi.** Siinä on voita, joten pieni lisäys nostaa kaloreita paljon.
- **Voisula piirakan päällä** paistamisen jälkeen.
- **Juusto ja kinkku** täytteenä munavoin lisäksi.

## Kevyemmät piirakat
- Ota munavoita ohuelti tai korvaa se kananmunaviipaleilla.
- Lisää päälle kurkkua tai tomaattia.
- Syö kaksi piirakkaa ja lisää rinnalle salaattia.

## Kirjaa sekunneissa
Piirakat ovat eri kokoisia. Ota kuva CalorAI:lla, niin sovellus arvioi juuri sinun annoksesi kalorit, proteiinit, hiilihydraatit ja rasvat, ja voit korjata määrää ennen tallennusta.`,
    faq: [
      { q: 'Montako kaloria on yhdessä karjalanpiirakassa?', a: 'Tavallisessa riisipiirakassa (noin 65 g) on noin 140 kaloria: noin 4 g proteiinia, 24 g hiilihydraatteja ja 3 g rasvaa.' },
      { q: 'Montako kaloria munavoissa on?', a: 'Ruokalusikallisessa munavoita (noin 20 g) on noin 90 kaloria.' },
      { q: 'Sopiiko karjalanpiirakka laihduttajalle?', a: 'Sopii. Piirakka on melko kevyt; pidä munavoin määrä pienenä ja syö kasviksia rinnalla.' },
    ],
  },
  {
    slug: 'souvlaki-thermides',
    lang: 'el',
    name: 'Σουβλάκι',
    title: 'Πόσες θερμίδες έχει ένα σουβλάκι;',
    description: 'Μια πίτα σουβλάκι χοιρινό έχει περίπου 480 θερμίδες. Δες τις θερμίδες για καλαμάκι, γύρο και μερίδα, και πώς να το κάνεις πιο ελαφρύ.',
    date, serving: '1 πίτα σουβλάκι χοιρινό (περίπου 250 g)',
    kcal: 480, protein: 28, carbs: 45, fat: 20,
    body: `Μια πίτα σουβλάκι χοιρινό (περίπου 250 g) έχει **περίπου 480 θερμίδες**. Οι περισσότερες έρχονται από την πίτα, το κρέας και τις πατάτες που μπαίνουν μέσα. Ένα σκέτο καλαμάκι είναι πολύ πιο ελαφρύ.

## Θερμίδες ανά είδος
| Φαγητό | Ποσότητα | Θερμίδες |
|---|---|---|
| Καλαμάκι χοιρινό | 1 τεμάχιο, περίπου 80 g | 170 kcal |
| Πίτα σουβλάκι χοιρινό | περίπου 250 g | 480 kcal |
| Πίτα γύρος | περίπου 280 g | 580 kcal |
| Μερίδα σουβλάκι με πατάτες και πίτα | περίπου 450 g | 900 kcal |
| Τζατζίκι | 2 κουταλιές (30 g) | 35 kcal |

## Τι ανεβάζει τις θερμίδες
- **Οι πατάτες μέσα στην πίτα.** Μια χούφτα προσθέτει περίπου 150 θερμίδες.
- **Ο γύρος,** που έχει περισσότερο λίπος από το καλαμάκι.
- **Η πίτα αλειμμένη με λάδι** στη σχάρα.
- **Οι σάλτσες με μαγιονέζα** αντί για τζατζίκι.

## Πώς να το κάνεις πιο ελαφρύ
- Πάρε καλαμάκι κοτόπουλο ή χοιρινό αντί για γύρο.
- Ζήτα την πίτα χωρίς πατάτες, με ντομάτα, κρεμμύδι και τζατζίκι.
- Στη μερίδα, βάλε σαλάτα στη θέση των πατατών.

## Κατέγραψέ το σε δευτερόλεπτα
Κάθε σουβλατζίδικο είναι διαφορετικό. Φωτογράφισε το φαγητό σου με το CalorAI και η εφαρμογή εκτιμά θερμίδες, πρωτεΐνες, υδατάνθρακες και λιπαρά για τη δική σου μερίδα, και μπορείς να διορθώσεις την ποσότητα πριν την αποθήκευση.`,
    faq: [
      { q: 'Πόσες θερμίδες έχει μια πίτα σουβλάκι;', a: 'Μια πίτα σουβλάκι χοιρινό (περίπου 250 g) έχει περίπου 480 θερμίδες, με περίπου 28 g πρωτεΐνη, 45 g υδατάνθρακες και 20 g λιπαρά.' },
      { q: 'Πόσες θερμίδες έχει ένα καλαμάκι;', a: 'Ένα καλαμάκι χοιρινό (περίπου 80 g) έχει περίπου 170 θερμίδες.' },
      { q: 'Τρώγεται το σουβλάκι σε δίαιτα;', a: 'Ναι. Το καλαμάκι δίνει πολλή πρωτεΐνη. Απόφυγε τις πατάτες στην πίτα και διάλεξε τζατζίκι αντί για σάλτσες με μαγιονέζα.' },
    ],
  },
  {
    slug: 'croissant-calories',
    lang: 'fr',
    name: 'Croissant',
    title: 'Combien de calories dans un croissant ?',
    description: 'Un croissant au beurre contient environ 250 calories. Calories du pain au chocolat, du croissant aux amandes et des mini-viennoiseries, et comment alléger le petit-déjeuner.',
    date, serving: '1 croissant au beurre (environ 60 g)',
    kcal: 250, protein: 5, carbs: 27, fat: 13,
    body: `Un croissant au beurre de boulangerie (environ 60 g) contient **environ 250 calories**. Près de la moitié viennent du beurre de la pâte feuilletée. Ce que l'on ajoute à côté, comme le beurre, la confiture ou une boisson sucrée, fait vite monter le total.

## Calories des viennoiseries
| Viennoiserie | Portion | Calories |
|---|---|---|
| Croissant au beurre | 1 pièce, environ 60 g | 250 kcal |
| Pain au chocolat | 1 pièce, environ 70 g | 290 kcal |
| Croissant aux amandes | 1 pièce, environ 100 g | 430 kcal |
| Mini croissant | 1 pièce, environ 25 g | 105 kcal |
| Beurre et confiture en plus | 10 g de beurre + 1 c. à soupe | 120 kcal |

## Ce qui fait grimper les calories
- **Le croissant aux amandes,** fourré à la crème d'amande et sucré.
- **Le beurre et la confiture** tartinés en plus.
- **Le chocolat chaud ou le café au lait sucré** à côté.

## Comment alléger son petit-déjeuner
- Choisissez un croissant nature plutôt qu'aux amandes.
- Mangez-le sans beurre ajouté.
- Ajoutez un yaourt nature ou un fruit pour tenir plus longtemps.

## Notez-le en quelques secondes
La taille varie d'une boulangerie à l'autre. Prenez une photo avec CalorAI : l'app estime les calories, protéines, glucides et lipides de votre viennoiserie, et vous pouvez ajuster la portion avant d'enregistrer.`,
    faq: [
      { q: 'Combien de calories dans un croissant ?', a: 'Un croissant au beurre d\'environ 60 g contient environ 250 calories : environ 5 g de protéines, 27 g de glucides et 13 g de lipides.' },
      { q: 'Croissant ou pain au chocolat, lequel est le plus calorique ?', a: 'Le pain au chocolat, avec environ 290 calories, contre environ 250 pour un croissant au beurre.' },
      { q: 'Peut-on manger un croissant au régime ?', a: 'Oui, de temps en temps. Un croissant nature sans beurre ajouté, avec un fruit ou un yaourt, reste un petit-déjeuner raisonnable.' },
    ],
  },
  {
    slug: 'pizza-margherita-calorie',
    lang: 'it',
    name: 'Pizza Margherita',
    title: 'Quante calorie ha una pizza Margherita?',
    description: 'Una pizza Margherita intera ha circa 800 calorie. Calorie per fetta, della diavola, della quattro formaggi e della pizza al taglio, e come renderla più leggera.',
    date, serving: '1 pizza Margherita intera (circa 330 g)',
    kcal: 800, protein: 33, carbs: 105, fat: 27,
    body: `Una pizza Margherita intera da pizzeria (circa 330 g) ha **circa 800 calorie**. Gran parte arriva dall'impasto, il resto da mozzarella e olio. Ingredienti come salame e formaggi in più alzano il conto rapidamente.

## Calorie della pizza
| Pizza | Porzione | Calorie |
|---|---|---|
| Margherita intera | circa 330 g | 800 kcal |
| Una fetta di Margherita | 1/6 di pizza | 135 kcal |
| Diavola intera | circa 350 g | 950 kcal |
| Quattro formaggi intera | circa 350 g | 1000 kcal |
| Pizza al taglio | 100 g | 260 kcal |

## Cosa fa salire le calorie
- **I formaggi in più,** come nella quattro formaggi.
- **Salame piccante, salsiccia e würstel.**
- **L'olio aggiunto** a fine cottura.
- **Il bordo alto e ripieno.**

## Come renderla più leggera
- Scegli Margherita, marinara o una pizza con verdure grigliate.
- Dividi la pizza e aggiungi un'insalata.
- Evita l'olio piccante in più sopra.

## Registrala in pochi secondi
Ogni pizzeria fa la pizza a modo suo. Scatta una foto con CalorAI: l'app stima calorie, proteine, carboidrati e grassi della tua pizza e puoi modificare la porzione prima di salvare.`,
    faq: [
      { q: 'Quante calorie ha una pizza Margherita?', a: 'Una Margherita intera da pizzeria (circa 330 g) ha circa 800 calorie, con circa 33 g di proteine, 105 g di carboidrati e 27 g di grassi.' },
      { q: 'Quante calorie ha una fetta di pizza?', a: 'Una fetta di Margherita (un sesto della pizza) ha circa 135 calorie.' },
      { q: 'Si può mangiare la pizza a dieta?', a: 'Sì, con moderazione. Scegli una Margherita o una pizza con verdure, mangiane metà o accompagnala con un\'insalata.' },
    ],
  },
  {
    slug: 'stamppot-calorieen',
    lang: 'nl',
    name: 'Stamppot',
    title: 'Hoeveel calorieën zitten er in stamppot?',
    description: 'Een bord boerenkoolstamppot met een halve rookworst heeft ongeveer 560 calorieën. Bekijk calorieën van hutspot en zuurkool en hoe je stamppot lichter maakt.',
    date, serving: '1 bord boerenkoolstamppot met halve rookworst (ongeveer 400 g)',
    kcal: 560, protein: 21, carbs: 42, fat: 34,
    body: `Een bord boerenkoolstamppot met een halve rookworst heeft **ongeveer 560 calorieën**. De stamppot zelf is niet zo zwaar, ongeveer 270 calorieën voor 300 gram. De rookworst, jus en spekjes maken het verschil.

## Calorieën in stamppot
| Gerecht | Portie | Calorieën |
|---|---|---|
| Boerenkoolstamppot | 300 g | 270 kcal |
| Hutspot | 300 g | 250 kcal |
| Zuurkoolstamppot | 300 g | 260 kcal |
| Halve rookworst | ongeveer 100 g | 290 kcal |
| Boerenkool met halve rookworst | ongeveer 400 g | 560 kcal |

## Wat de meeste calorieën toevoegt
- **Rookworst en spekjes.** Die bevatten veel vet.
- **Boter en volle melk** in de puree.
- **Een kuiltje jus** bovenop.

## Zo maak je het lichter
- Neem een kleiner stuk rookworst of kies mager rundergehakt of kip.
- Gebruik halfvolle melk en weinig boter.
- Doe meer groente en minder aardappel in de stamppot.

## Log het in een paar seconden
Elke stamppot is anders. Maak een foto met CalorAI en de app schat de calorieën, eiwitten, koolhydraten en vetten van jouw bord, en je kunt de portie aanpassen voordat je opslaat.`,
    faq: [
      { q: 'Hoeveel calorieën heeft boerenkoolstamppot?', a: 'Ongeveer 270 calorieën voor 300 gram zonder worst. Met een halve rookworst is het ongeveer 560 calorieën.' },
      { q: 'Hoeveel calorieën heeft een rookworst?', a: 'Een halve rookworst van ongeveer 100 gram heeft rond de 290 calorieën.' },
      { q: 'Is stamppot geschikt om af te vallen?', a: 'Ja, de stamppot zelf is redelijk licht. Neem minder rookworst en spekjes, en gebruik weinig boter.' },
    ],
  },
  {
    slug: 'pao-de-queijo-calorias',
    lang: 'pt',
    name: 'Pão de queijo',
    title: 'Quantas calorias tem um pão de queijo?',
    description: 'Um pão de queijo médio tem cerca de 85 calorias. Veja as calorias por tamanho e recheio e como incluir no café da manhã sem exagerar.',
    date, serving: '4 pães de queijo médios (cerca de 100 g)',
    kcal: 340, protein: 7, carbs: 40, fat: 17,
    body: `Um pão de queijo médio (cerca de 25 g) tem **cerca de 85 calorias**. O problema é que ninguém come um só: quatro unidades médias já somam umas 340 calorias. O polvilho dá os carboidratos e o queijo e o óleo, a gordura.

## Calorias do pão de queijo
| Pão de queijo | Quantidade | Calorias |
|---|---|---|
| Pequeno (coquetel) | 1 unidade, cerca de 15 g | 50 kcal |
| Médio | 1 unidade, cerca de 25 g | 85 kcal |
| Grande | 1 unidade, cerca de 50 g | 170 kcal |
| Porção de 4 médios | cerca de 100 g | 340 kcal |
| Médio recheado com requeijão | 1 unidade | 120 kcal |

## O que aumenta as calorias
- **Recheios** de requeijão, catupiry ou goiabada.
- **Tamanho grande** de padaria ou lanchonete.
- **Café com leite e açúcar** junto.

## Como comer sem exagerar
- Escolha dois pães médios em vez de um saco de pequenos.
- Acompanhe com fruta ou ovo para ter mais proteína e saciedade.
- Prefira café sem açúcar.

## Registre em segundos
O tamanho muda muito de um lugar para outro. Tire uma foto com o CalorAI e o app estima calorias, proteínas, carboidratos e gorduras do seu prato, e você pode ajustar a porção antes de salvar.`,
    faq: [
      { q: 'Quantas calorias tem um pão de queijo?', a: 'Um pão de queijo médio (cerca de 25 g) tem cerca de 85 calorias. Um grande de padaria (50 g) tem cerca de 170.' },
      { q: 'Quantas calorias têm 100 g de pão de queijo?', a: 'Cerca de 340 calorias, com aproximadamente 7 g de proteínas, 40 g de carboidratos e 17 g de gorduras.' },
      { q: 'Pão de queijo engorda?', a: 'Não por si só. O cuidado é com a quantidade: duas unidades médias com uma fruta são um lanche equilibrado.' },
    ],
  },
  {
    slug: 'borsch-kalorii',
    lang: 'ru',
    name: 'Борщ',
    title: 'Сколько калорий в борще?',
    description: 'Тарелка борща с говядиной и сметаной — около 210 калорий. Калорийность постного борща, сметаны и хлеба и как сделать борщ легче.',
    date, serving: '1 тарелка борща с говядиной (300 г) и 1 ст. л. сметаны',
    kcal: 210, protein: 11, carbs: 18, fat: 10,
    body: `Тарелка борща с говядиной (300 г) с ложкой сметаны — это **около 210 калорий**. Сам борщ лёгкий: в основном свёкла, капуста, картофель и бульон. Калории добавляют жирное мясо, сметана и хлеб к нему.

## Калорийность борща
| Блюдо | Порция | Калории |
|---|---|---|
| Постный борщ | тарелка, 300 г | 120 ккал |
| Борщ с говядиной | тарелка, 300 г | 170 ккал |
| Сметана 20% | 1 ст. л. (20 г) | 40 ккал |
| Борщ с говядиной и сметаной | тарелка | 210 ккал |
| Ломтик ржаного хлеба | 30 г | 65 ккал |

## Что добавляет калории
- **Жирная свинина** вместо говядины.
- **Обжарка на масле или сале** для зажарки.
- **Много сметаны** и пампушки с чесноком.

## Как сделать борщ легче
- Варите на постной говядине или курице и снимайте жир с бульона.
- Обжаривайте овощи на минимуме масла.
- Берите сметану 10% и одну ложку.

## Записывайте за секунды
У каждого свой рецепт борща. Сфотографируйте тарелку в CalorAI, и приложение оценит калории, белки, углеводы и жиры именно вашей порции; перед сохранением её можно поправить.`,
    faq: [
      { q: 'Сколько калорий в тарелке борща?', a: 'Тарелка борща с говядиной (300 г) — около 170 калорий, со столовой ложкой сметаны — около 210.' },
      { q: 'Можно ли есть борщ на диете?', a: 'Да, борщ — лёгкое блюдо с большим количеством овощей. Выбирайте постное мясо и немного сметаны.' },
      { q: 'Сколько калорий в постном борще?', a: 'Тарелка постного борща (300 г) — около 120 калорий.' },
    ],
  },
  {
    slug: 'ramen-calories',
    lang: 'ja',
    name: 'ラーメン',
    title: 'ラーメン1杯のカロリーは？',
    description: '醤油ラーメン1杯は約550kcal。塩・味噌・とんこつのカロリーの違い、カロリーを増やす要素、軽くするコツを紹介します。',
    date, serving: '醤油ラーメン 1杯（スープを含めて約600g）',
    kcal: 550, protein: 25, carbs: 70, fat: 18,
    body: `醤油ラーメン1杯は**約550kcal**です。カロリーの多くは麺から、残りはスープの脂とチャーシューから来ます。とんこつや味噌のように脂の多いスープでは、さらに高くなります。

## ラーメンの種類別カロリー
| ラーメン | 量 | カロリー |
|---|---|---|
| 醤油ラーメン | 1杯 | 550 kcal |
| 塩ラーメン | 1杯 | 500 kcal |
| 味噌ラーメン | 1杯 | 650 kcal |
| とんこつラーメン | 1杯 | 800 kcal |
| 替え玉 | 1玉 | 250 kcal |

## カロリーを増やすもの
- **スープを全部飲むこと。** スープの脂だけで100〜200kcalになることがあります。
- **背脂、チャーシュー増し、バター。**
- **替え玉、ライス、餃子のセット。**

## 軽くするコツ
- 醤油や塩を選び、スープは半分残す。
- チャーシューを増やすより、もやしやねぎを増やす。
- 替え玉やライスはやめておく。

## 数秒で記録
ラーメンはお店によって大きく違います。CalorAIで写真を撮れば、目の前の1杯のカロリー、たんぱく質、炭水化物、脂質を推定し、保存前に量を調整できます。`,
    faq: [
      { q: 'ラーメン1杯のカロリーは？', a: '醤油ラーメン1杯で約550kcal、とんこつラーメンでは約800kcalです。' },
      { q: 'スープを残すとどれくらい減りますか？', a: 'スープを半分残すと、種類によって約100〜200kcal減らせます。' },
      { q: 'ダイエット中でもラーメンを食べていいですか？', a: 'はい。醤油や塩を選び、スープを残し、替え玉やライスを控えれば、1食に収まりやすくなります。' },
    ],
  },
  {
    slug: 'dolma-kalori',
    lang: 'ku',
    name: 'Dolme',
    title: 'Di dolmeyê de çend kalorî hene?',
    description: 'Plateke dolmeyê bi goşt nêzîkî 450 kalorî ye. Kaloriyên pelekî, dolmeya bê goşt û mastê bibîne, û fêr bibe ka çawa siviktir bixwî.',
    date, serving: 'Plateke dolmeyê bi goşt (nêzîkî 300 g)',
    kcal: 450, protein: 15, carbs: 50, fat: 21,
    body: `Plateke dolmeyê bi goşt (nêzîkî 300 g) **nêzîkî 450 kalorî** ye. Piraniya kaloriyan ji birinc û rûnê tê, yên din ji goştê. Pelên tirî, pîvaz, bacanê reş û îsotê bi xwe gelek sivik in.

## Kaloriyên dolmeyê
| Xwarin | Mîqdar | Kalorî |
|---|---|---|
| Pelekî tirî bi goşt | 1 dane, nêzîkî 30 g | 50 kcal |
| Plateke dolmeyê bi goşt | nêzîkî 300 g | 450 kcal |
| Dolmeya bê goşt bi rûnê zeytûnê | nêzîkî 300 g | 420 kcal |
| Mast | nîv tas, nêzîkî 100 g | 60 kcal |

## Çi kaloriyan zêde dike
- **Rûn.** Her kevçiyek rûnê zêde nêzîkî 120 kalorî ye.
- **Goştê bi rûn** û dûvê pez.
- **Plateke mezin.** Di şahî û mêvandariyê de plate pir caran ji 300 g mezintir e.

## Çawa sivik bixwî
- Kêmtir rûn bi kar bîne û goştê bê rûn hilbijêre.
- Bi mast û selete bixwe.
- Plateke biçûktir bigire û hêdî bixwe.

## Di çend saniyeyan de tomar bike
Dolmeya her malê cuda ye. Bi CalorAI wêneyê plateya xwe bikişîne; ew kalorî, proteîn, karbohîdrat û rûnê beşa te texmîn dike, û tu dikarî berî tomarkirinê mîqdarê biguherînî.`,
    faq: [
      { q: 'Di plateke dolmeyê de çend kalorî hene?', a: 'Plateke dolmeyê bi goşt (nêzîkî 300 g) nêzîkî 450 kalorî ye, bi qasî 15 g proteîn, 50 g karbohîdrat û 21 g rûn.' },
      { q: 'Pelekî dolmeyê çend kalorî ye?', a: 'Pelekî tirî yê bi goşt û birinc (nêzîkî 30 g) nêzîkî 50 kalorî ye.' },
      { q: 'Ma dolme ji bo rejîmê baş e?', a: 'Erê, heke bi rûnê kêm were çêkirin. Plateke biçûk bi mast û selete bixwe.' },
    ],
  },
];

export const dishesFor = (lang: Locale) => dishes.filter((d) => d.lang === lang);
export const getDish = (lang: Locale, slug: string) => dishes.find((d) => d.lang === lang && d.slug === slug);
