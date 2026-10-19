// Blog articles (English). Built from the CalorAI tip posts in "new campaign/14-tip-posts".
// Body format: blocks separated by a blank line. "## " = heading, "- " lines = list,
// "{graphic}" = the post's tip graphic, "| a | b |" lines = table, anything else = paragraph. **bold** is supported.

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: 'Tips' | 'Same calories' | 'Comparisons';
  cover: string;    // public/blog/<cover>.webp
  graphic: string;  // public/blog/<graphic>.webp (the social tip image)
  minutes: number;
  date: string;
  sources: string[];
  body: string;
};

const date = '2026-10-13';

export const posts: Post[] = [
  {
    slug: 'best-ai-calorie-counter-apps',
    title: 'The best AI calorie counter apps in 2026: 6 apps compared',
    description: 'CalorAI, Cal AI, MyFitnessPal, SnapCalorie, MacroFactor and Cronometer compared: photo logging, free plans, prices and languages.',
    category: 'Comparisons', cover: 'best-ai-calorie-apps', graphic: 'best-ai-calorie-apps', minutes: 6, date: '2026-10-19',
    sources: [
      'Official websites and App Store / Google Play listings of each app, checked October 2026.',
      'US prices; they vary by country and change often. Check the store before you subscribe.',
      'Disclosure: this article is published by the team behind CalorAI.',
    ],
    body: `AI calorie counters let you log a meal by taking a photo instead of searching a food database. They save a lot of time, but they are not all the same: some are free, some lock the photo feature behind a subscription, and only a few work well outside English.

We make CalorAI, so we are not neutral. We tried to keep this comparison fair and factual, and we list what each app does best.

## Quick comparison
| App | How you log | Free version | Price (US) | Languages | Best for |
|---|---|---|---|---|---|
| **CalorAI** | Photo, gallery, text, voice | Free to download and start | Pro $9.49/month or $37.99/year | 18, incl. Arabic, Farsi, Kurdish | Non-English users, all-in-one app |
| **Cal AI** | Photo, barcode, text | Scan results need a subscription (3-day trial) | Varies, about $30–70/year | 15 | Fast photo logging, iPhone depth sensor |
| **MyFitnessPal** | Search, barcode*, Meal Scan*, voice* | Yes, basic logging with ads | Premium $19.99/month or $79.99/year | 20, no Arabic or Hindi | Huge food database (*Premium) |
| **SnapCalorie** | Photo, voice | Yes, core features free | Premium $19.99/month or $149/year | English | Free photo logging |
| **MacroFactor** | Search, barcode | Free trial, then paid | Subscription | Not stated | Adaptive targets for serious trackers |
| **Cronometer** | Search, barcode | Yes, detailed free plan | Gold is paid | Not stated | Vitamins and minerals in detail |

## CalorAI
Take a photo, pick one from your gallery, type what you ate or say it out loud, and CalorAI estimates calories, protein, carbs and fat. It also sets daily targets, turns a goal weight into a weekly plan, logs workouts from over 100 exercises, and includes an AI nutrition coach, a meal planner and health warnings for 20+ conditions.

- **Strengths:** 18 languages including right-to-left Arabic, Farsi and Kurdish; four ways to log; lower price than most.
- **Limits:** no barcode scanner; smaller community than the big apps.

## Cal AI
One of the best-known photo calorie apps, with a very high App Store rating. It uses the iPhone depth sensor to estimate portion size and supports barcode scanning.

- **Strengths:** fast and polished; barcode scanning; syncs with Apple Health and Google Fit.
- **Limits:** the App Store listing says food scan results require a subscription.

## MyFitnessPal
The classic calorie counter with the largest food database. Meal Scan (photo), barcode scanning and voice logging are Premium features.

- **Strengths:** database size; huge community; many integrations.
- **Limits:** the free version has ads; photo logging needs Premium.

## SnapCalorie
A photo-first app that keeps its core features free and uses depth data to estimate portions.

- **Strengths:** free photo logging; voice logging.
- **Limits:** fewer extras such as meal planning or detailed coaching.

## MacroFactor
Not a photo app first. It adapts your calorie target each week based on your weight trend.

- **Strengths:** smart, adaptive targets.
- **Limits:** paid after the trial; more manual logging.

## Cronometer
Known for accurate, verified nutrition data and detailed vitamin and mineral tracking.

- **Strengths:** micronutrient detail on the free plan.
- **Limits:** built for careful logging rather than quick photos.

## How to choose
- You want photo logging in your own language (Arabic, Farsi, Turkish, Hindi and more): **CalorAI**.
- You use an iPhone and want barcode plus photo in one polished app: **Cal AI**.
- You want the biggest food database: **MyFitnessPal**.
- You want free photo logging and little else: **SnapCalorie**.
- You weigh yourself daily and want smart, adaptive targets: **MacroFactor**.
- You care most about vitamins and minerals: **Cronometer**.

## A note on accuracy
Every AI calorie counter gives an estimate. Simple meals are easier to recognise than mixed dishes, sauces and oils. Pick an app that lets you correct the portion before you save, and the numbers will be close enough to guide your choices.`,
  },
  {
    slug: 'calorai-vs-cal-ai',
    title: 'CalorAI vs Cal AI: which AI calorie counter is right for you?',
    description: 'Two AI calorie counters with similar names. How they compare on logging, free use, price, languages and features.',
    category: 'Comparisons', cover: 'calorai-vs-cal-ai', graphic: 'calorai-vs-cal-ai', minutes: 4, date: '2026-10-19',
    sources: [
      'CalorAI and Cal AI listings on the App Store and Google Play, and calai.app, checked October 2026.',
      'US prices; they vary by country and change often.',
      'Disclosure: this article is published by the team behind CalorAI.',
    ],
    body: `CalorAI and Cal AI have similar names and the same basic idea: take a photo of your meal and get the calories. They are separate apps from different companies. CalorAI is made by Intellivation AB in Sweden; Cal AI is made by Viral Development LLC.

We make CalorAI, so here are the facts side by side, including where Cal AI is stronger.

## Side by side
| | CalorAI | Cal AI |
|---|---|---|
| Photo logging | Yes, camera or gallery | Yes |
| Type what you ate | Yes | Yes |
| Voice logging | Yes | Not mentioned |
| Barcode scanner | No | Yes |
| Free use | Free to download and start | Scan results need a subscription (3-day trial) |
| Price (US) | $9.49/month or $37.99/year | Varies, about $30–70/year |
| Languages | 18, incl. Arabic, Farsi, Kurdish, Turkish, Hindi | 15, incl. Arabic, Hindi, Russian |
| Workouts | 100+ exercises logged in the app, added to your daily target | Syncs with Apple Health and Google Fit |
| Weight goal plan | Yes, weekly pace and milestones | Weight tracking |
| AI nutrition coach (chat) | Yes | Not mentioned |
| Platforms | Android, iPhone, iPad | Android, iPhone |
| Company | Intellivation AB, Sweden | Viral Development LLC, USA |

## Where Cal AI is stronger
- **Barcode scanning** for packaged food.
- **Portion estimates with the iPhone depth sensor.**
- **A much larger user base** and a very high App Store rating.

## Where CalorAI is stronger
- **More languages**, with full right-to-left support for Arabic, Farsi and Kurdish, plus Danish, Finnish, Greek, Swedish and Turkish.
- **Voice logging:** just say "grilled chicken with rice, 200 grams".
- **Workouts inside the app:** pick from 100+ exercises and the burned calories are added to your day.
- **AI nutrition coach, meal planner and health warnings** for 20+ conditions.
- **Lower yearly price**, and you can start without a subscription.

## Which one should you pick?
If you mostly eat packaged food and want barcode scanning on an iPhone, Cal AI is a strong choice. If you want to log in your own language, by voice or photo, and track workouts and goals in one place, try CalorAI. Both are free to download, so the easiest way to decide is to log a day of meals in each.`,
  },
  {
    slug: 'calorai-vs-myfitnesspal',
    title: 'CalorAI vs MyFitnessPal: photo-first or database-first?',
    description: 'MyFitnessPal has the biggest food database; CalorAI logs a meal from one photo, text or voice in 18 languages. How they compare on features, price and languages.',
    category: 'Comparisons', cover: 'calorai-vs-myfitnesspal', graphic: 'calorai-vs-myfitnesspal', minutes: 4, date: '2026-10-19',
    sources: [
      'MyFitnessPal and CalorAI listings on the App Store and Google Play, checked October 2026.',
      'US prices; they vary by country, with frequent discounts. Check the store before you subscribe.',
      'Disclosure: this article is published by the team behind CalorAI.',
    ],
    body: `MyFitnessPal is the best-known calorie counter in the world, with a food database of more than 20 million items. CalorAI is a newer app built around AI: you take a photo of your plate, type what you ate or say it, and it estimates the calories and macros.

They solve the same problem in different ways. We make CalorAI, so here is an honest side-by-side.

## Side by side
| | CalorAI | MyFitnessPal |
|---|---|---|
| Main way to log | Photo, typed description, voice | Search the food database |
| Photo logging (AI) | Yes | Meal Scan, Premium only |
| Voice logging | Yes | Premium only |
| Barcode scanner | No | Premium only |
| Food database | AI estimate per meal | 20.5 million+ foods |
| Free version | Free to download and start | Basic logging with ads |
| Paid plan (US) | Pro $9.49/month or $37.99/year | Premium $19.99/month or $79.99/year |
| Meal planner | Yes, AI meal planner | Premium+ |
| Workouts | 100+ exercises, burned calories added to your day | Exercise logging and many device integrations |
| AI nutrition coach | Yes, chat | Not included |
| Languages | 18, incl. Arabic, Farsi, Kurdish, Hindi, Greek | 20, no Arabic, Farsi, Hindi or Greek |
| Rating (App Store, US) | Smaller, newer app | 4.7 from 2.4 million ratings |

## Where MyFitnessPal is stronger
- **The food database.** If you like to pick the exact product or brand, nothing beats 20 million items.
- **Barcode scanning** for packaged food (Premium).
- **Community and integrations:** years of history, recipes and connections to many fitness devices.

## Where CalorAI is stronger
- **Speed.** One photo instead of searching and adding every ingredient.
- **AI features included in Pro:** photo, voice, AI coach and meal planner, at about half the price of MyFitnessPal Premium.
- **Languages.** Full Arabic, Farsi and Kurdish with right-to-left layout, plus Hindi and Greek, which MyFitnessPal does not offer.
- **Workouts that change your target:** log a run and the burned calories are added to what you can eat today.

## Which one should you pick?
Choose MyFitnessPal if you want to weigh food and log exact products from a huge database. Choose CalorAI if you want logging to take seconds, in your own language, with an AI coach that knows your day. Many people who quit MyFitnessPal because logging took too long find photo logging easier to keep up.`,
  },
  {
    slug: 'calorai-vs-snapcalorie',
    title: 'CalorAI vs SnapCalorie: two photo calorie counters compared',
    description: 'Both apps count calories from a photo of your meal. How CalorAI and SnapCalorie differ on price, languages, voice logging and extra features.',
    category: 'Comparisons', cover: 'calorai-vs-snapcalorie', graphic: 'calorai-vs-snapcalorie', minutes: 4, date: '2026-10-19',
    sources: [
      'SnapCalorie website and App Store listing, CalorAI store listings, checked October 2026.',
      'US prices; they vary by country, with frequent discounts.',
      'Disclosure: this article is published by the team behind CalorAI.',
    ],
    body: `CalorAI and SnapCalorie are both photo-first calorie counters: point your camera at a meal and the AI estimates calories, protein, carbs and fat. They are made by different companies, SnapCalorie by Perception Labs in the US and CalorAI by Intellivation AB in Sweden.

We make CalorAI, so here are the facts side by side, including where SnapCalorie is stronger.

## Side by side
| | CalorAI | SnapCalorie |
|---|---|---|
| Photo logging | Yes, camera or gallery | Yes |
| Voice logging | Yes | Yes |
| Type what you ate | Yes | Yes |
| Portion size | AI estimate, adjustable before saving | Uses the depth sensor (LiDAR) on iPhone Pro |
| Nutrition label scanning | No | Yes |
| Free version | Free to download and start | Core features free |
| Paid plan (US) | Pro $9.49/month or $37.99/year | Premium $19.99/month or $149/year |
| Languages | 18, incl. Arabic, Farsi, Kurdish, Turkish, Hindi | English |
| Workouts | 100+ exercises, added to your daily target | Not a focus |
| Weight goal plan | Yes, weekly pace and milestones | Calorie and macro goals |
| AI meal planner | Yes | Not mentioned |
| Health warnings | 20+ conditions | Not mentioned |
| Platforms | Android, iPhone, iPad | Android, iPhone |

## Where SnapCalorie is stronger
- **Portion size on iPhone Pro:** the depth sensor measures the volume of food on the plate.
- **Nutrition label scanning** for packaged food.
- **A generous free tier** for core photo logging.

## Where CalorAI is stronger
- **Your language:** 18 languages with full right-to-left support for Arabic, Farsi and Kurdish. SnapCalorie is in English only.
- **Price:** Pro costs about a quarter of SnapCalorie Premium per year.
- **More than logging:** workouts that raise your daily target, a weight goal plan with milestones, an AI coach, a meal planner and health warnings.
- **Works the same on any phone,** without needing a depth sensor.

## Which one should you pick?
If you use an iPhone Pro, read English and mainly want very fast photo logging, SnapCalorie is a good choice. If you want the app in your own language, at a lower price, with workouts, goals and coaching in the same place, try CalorAI. Both are free to download, so log one day of meals in each and keep the one that feels easier.`,
  },
  {
    slug: 'sleep-and-weight-loss',
    title: 'Sleep is part of your diet: why rest matters for fat loss',
    description: 'Dieters who slept 5.5 hours instead of 8.5 lost 55% less fat on the same calories. Here is why sleep matters and how to get more of it.',
    category: 'Tips', cover: 'sleep', graphic: 'tip-04-sleep', minutes: 4, date,
    sources: ['Nedeltcheva AV et al. Insufficient sleep undermines dietary efforts to reduce adiposity. Annals of Internal Medicine, 2010.'],
    body: `Most people think weight loss is only about food and exercise. But the hours you spend asleep may matter just as much.

## What the research found
In a well-known study, adults followed the same reduced-calorie diet twice: once while sleeping 8.5 hours a night and once while sleeping 5.5 hours. They lost a similar amount of weight, but with short sleep, **55% less of that weight came from fat**. More of it came from muscle and other lean tissue instead.

{graphic}

## Why short sleep works against you
- You feel hungrier. Short sleep shifts the hormones that control appetite, so cravings go up.
- You reach for quick energy. Tired brains prefer sugary and fatty snacks.
- You move less. Low energy means fewer steps and weaker workouts.
- Late nights mean more time to eat.

## How to sleep better tonight
- Aim for 7–9 hours, at roughly the same time every day.
- Stop eating 2–3 hours before bed.
- Keep caffeine to the morning.
- Dim screens and lights in the last hour.
- Keep your bedroom cool, dark and quiet.

## The takeaway
If you are eating well but progress is slow, look at your sleep before cutting more calories. Better rest makes every other healthy habit easier.`,
  },
  {
    slug: 'protein-breakfast',
    title: 'Start your day with protein: an easy breakfast upgrade',
    description: 'Two eggs and a Greek yogurt get you past 25 g of protein before lunch. Here is why a protein breakfast helps and simple ideas to try.',
    category: 'Tips', cover: 'egg', graphic: 'tip-01-protein-breakfast', minutes: 3, date,
    sources: ['USDA FoodData Central.'],
    body: `Many breakfasts are mostly carbs: toast, cereal, pastries, juice. They taste good, but you are often hungry again by mid-morning. Adding protein is one of the simplest ways to fix that.

{graphic}

## Why protein in the morning helps
- Protein keeps you full for longer, so you snack less before lunch.
- It helps you keep muscle while losing weight.
- It makes your daily protein goal much easier to reach.

## How much is in a good protein breakfast?
One large egg has about **6 g of protein**. Two eggs plus a pot of Greek yogurt get you past **25 g** before lunch.

## Easy ideas
- Scrambled eggs on wholegrain toast
- Greek yogurt with berries and a handful of nuts
- Cottage cheese with fruit
- An omelette with vegetables and a little cheese
- Overnight oats made with milk and a scoop of yogurt

## Track it in seconds
Snap your breakfast with CalorAI and see the protein right away. The app shows how much is left for the rest of the day.`,
  },
  {
    slug: 'same-calories-pizza-vs-full-day',
    title: 'Same 2,000 calories: one pizza or a full day of meals?',
    description: 'A large pizza can have as many calories as a full day of balanced meals. See how the same number can look very different.',
    category: 'Same calories', cover: 'pizza', graphic: 'same-calories-1-pizza-vs-day', minutes: 4, date,
    sources: ['USDA FoodData Central. Values are approximate; your needs depend on age, size and activity.'],
    body: `Calories are a useful number, but they don't tell the whole story. Two choices with the same calories can leave you feeling completely different.

{graphic}

## Option 1: one large pizza (about 2,000 kcal)
A whole large pizza is easy to finish in one sitting. It is low in protein and fibre and high in salt and saturated fat. You will probably feel hungry again a few hours later.

## Option 2: a full day of meals (about 2,000 kcal)
- Breakfast: eggs on toast, about 420 kcal
- Lunch: chicken rice bowl, about 620 kcal, plus a 210 kcal snack
- Dinner: salmon with vegetables, about 740 kcal

That is three meals and a snack, with protein, vegetables and fibre spread over the day.

## Why this matters
Protein and fibre keep you full. Spreading food across the day keeps your energy steady. When you know what your meals cost in calories, you can still enjoy pizza, just as part of a day you planned for.

## See it for yourself
Snap your meals with CalorAI and you will quickly learn which foods give you the most for your calories.`,
  },
  {
    slug: 'water-before-meals',
    title: 'Drink a glass of water before meals',
    description: 'In a 12-week study, adults who drank 500 ml of water before each meal lost about 2 kg more. A simple habit worth trying.',
    category: 'Tips', cover: 'water', graphic: 'tip-05-water-before-meals', minutes: 3, date,
    sources: ['Dennis EA et al. Water consumption increases weight loss during a hypocaloric diet intervention in middle-aged and older adults. Obesity, 2010.'],
    body: `Some of the best habits are also the simplest. Drinking water before you eat is one of them.

{graphic}

## What the study showed
Adults on a reduced-calorie diet were split into two groups. One group drank **500 ml of water before each main meal**. After 12 weeks, they had lost **about 2 kg more** than the group that didn't.

## Why it may work
- Water takes up space in your stomach, so you may eat a little less.
- Thirst is easy to mistake for hunger.
- Choosing water instead of a sugary drink saves calories too.

## How to make it a habit
- Keep a bottle on your desk or in your bag.
- Drink a glass while you wait for food to cook or arrive.
- Add lemon, cucumber or mint if plain water feels boring.

Note: if you have a heart or kidney condition, ask your doctor how much fluid is right for you.`,
  },
  {
    slug: 'single-patty-smart-swap',
    title: 'Smart swap: pick a single patty and save 200–300 calories',
    description: 'Choosing a single burger instead of a double can save 200–300 calories with the same taste. Small swaps add up.',
    category: 'Tips', cover: 'burger', graphic: 'tip-02-single-patty', minutes: 3, date,
    sources: ['USDA FoodData Central.'],
    body: `You don't need to give up burgers to lose weight. A few smart swaps can make a big difference.

{graphic}

## The single-patty swap
A second beef patty with cheese often adds **200–300 calories**. Choosing a single gives you the same flavour for a much smaller number.

## More easy fast-food swaps
- Small fries instead of large, or share them.
- Water, sparkling water or a zero-sugar drink instead of a regular soda.
- Skip the extra sauce or ask for it on the side.
- Grilled instead of crispy chicken.
- Add a side salad to fill up.

## Why small swaps work
One swap might save 250 calories. Do that three times a week and it adds up to about 750 calories a week, without feeling like a diet.

## Know before you order
Not sure what fits your day? Snap your meal with CalorAI, or ask the AI coach what to order before you go.`,
  },
  {
    slug: 'same-calories-milkshake-vs-lunch',
    title: '800 calories: one milkshake or a full lunch and dessert?',
    description: 'A large milkshake can have as many calories as a full lunch plus dessert. Here is what 800 calories can look like.',
    category: 'Same calories', cover: 'milkshake', graphic: 'same-calories-2-milkshake-vs-lunch', minutes: 3, date,
    sources: ['USDA FoodData Central. Values are approximate.'],
    body: `Drinks are one of the easiest places for calories to hide. A large milkshake can match a full meal.

{graphic}

## Option 1: one large milkshake (about 800 kcal)
It is gone in ten minutes. It is mostly sugar and fat, and you will probably feel hungry again soon.

## Option 2: lunch plus dessert (about 800 kcal)
- Chicken rice bowl, about 620 kcal
- Fruit and yogurt, about 180 kcal

That is real food with protein and fibre that keeps you full all afternoon.

## What to do instead
- Have a small shake as a treat, not a drink with your meal.
- Choose water, tea or black coffee with food.
- If you want something sweet, fruit with yogurt gives you more for less.

Snap your drink with CalorAI and you might be surprised by the number.`,
  },
  {
    slug: 'walk-150-minutes-a-week',
    title: 'Walk 150 minutes a week: the easiest workout there is',
    description: 'Just 30 minutes of brisk walking, 5 days a week, meets the WHO minimum for adults. Here is how to make it stick.',
    category: 'Tips', cover: 'walking', graphic: 'tip-06-walk-150', minutes: 3, date,
    sources: ['World Health Organization. Guidelines on physical activity and sedentary behaviour, 2020.'],
    body: `You don't need a gym membership to get healthier. A brisk walk is enough to start.

{graphic}

## The 150-minute target
The World Health Organization recommends that adults do at least **150 minutes of moderate activity per week**. That is just **30 minutes of brisk walking, 5 days a week**.

## Why walking works
- It burns calories and adds to your daily energy budget.
- It is easy on your joints.
- It helps your heart, mood and sleep.
- You can do it anywhere, for free.

## How to fit it in
- Walk to work, the shop or the station.
- Take a 15-minute walk after lunch and after dinner.
- Make phone calls on the move.
- Take the stairs instead of the lift.

## Count it in CalorAI
Log your walk in CalorAI and the burned calories are added to your daily target automatically.`,
  },
  {
    slug: 'drinks-have-calories-too',
    title: 'Drinks have calories too: the hidden calories in your glass',
    description: 'A large fast-food milkshake can have 800+ calories. Learn where drink calories hide and what to choose instead.',
    category: 'Tips', cover: 'milkshake', graphic: 'tip-07-drinks-calories', minutes: 3, date,
    sources: ['USDA FoodData Central.'],
    body: `When we count calories, we usually think about food. But drinks can add hundreds of calories a day without filling you up.

{graphic}

## Where drink calories hide
- Milkshakes and frappés: a large one can have **800+ calories**.
- Regular soda and energy drinks: lots of sugar.
- Fruit juice and smoothies: healthy-sounding but high in sugar.
- Coffee drinks with syrup, cream and whole milk.
- Alcohol: beer, wine and cocktails all count.

## Why drinks are different
Liquid calories don't make you feel as full as food. So you usually eat the same amount on top of them.

## Better choices
Water, sparkling water, tea and black coffee have almost no calories. If you want flavour, try zero-sugar drinks or water with fruit.

## Track your drinks
Snap or log your drinks in CalorAI too. It is often the quickest win.`,
  },
  {
    slug: 'half-plate-vegetables',
    title: 'Fill half your plate with vegetables',
    description: 'Vegetables add volume, fibre and nutrients for very few calories. The half-plate rule makes healthy eating simple.',
    category: 'Tips', cover: 'salad', graphic: 'tip-03-half-plate-vegetables', minutes: 3, date,
    sources: ['Harvard T.H. Chan School of Public Health. The Healthy Eating Plate.'],
    body: `You don't need complicated rules to eat well. One simple picture can guide every meal.

{graphic}

## The healthy plate
- **Half** your plate: vegetables and fruit.
- **A quarter**: protein, such as fish, chicken, beans, eggs or tofu.
- **A quarter**: whole grains, such as brown rice, wholegrain bread or potatoes.

## Why vegetables help with weight loss
Vegetables are full of water and fibre. They take up space on your plate and in your stomach, so you feel full on fewer calories.

## Easy ways to add more
- Start dinner with a side salad.
- Add frozen vegetables to pasta, rice and soups.
- Keep cut carrots, cucumber or peppers ready for snacks.
- Swap half the rice or pasta for vegetables.

Snap your plate with CalorAI to see how your meal adds up.`,
  },
  {
    slug: 'lose-weight-slowly',
    title: 'Lose slowly. Keep it off.',
    description: 'Aim for about 0.5–1 kg a week. People who lose weight gradually are more likely to keep it off.',
    category: 'Tips', cover: 'goal', graphic: 'tip-08-lose-slowly', minutes: 3, date,
    sources: ['U.S. Centers for Disease Control and Prevention (CDC). Losing weight.'],
    body: `Fast results are tempting. But when it comes to weight, slow and steady usually wins.

{graphic}

## What is a healthy pace?
For most adults, about **0.5–1 kg (1–2 lb) per week** is a realistic and healthy pace. The CDC notes that people who lose weight gradually are more likely to keep it off.

## Why crash diets backfire
- Very low calories make you hungry and tired.
- You can lose muscle along with fat.
- The diet is hard to keep up, so weight often comes back.

## How to lose at a steady pace
- Eat a moderate calorie deficit, not an extreme one.
- Get enough protein to protect your muscles.
- Move more every day.
- Track your progress weekly, not daily. Weight goes up and down.

## Let CalorAI plan it
Set your target weight in CalorAI and the app builds a realistic weekly plan, with milestones to celebrate.`,
  },
  {
    slug: 'log-food-as-you-eat',
    title: 'Log it as you eat: the tracking habit that works',
    description: 'In a 6-month study, people who logged their food most often lost the most weight. Frequency mattered more than time spent.',
    category: 'Tips', cover: 'womanbowl', graphic: 'tip-09-log-as-you-eat', minutes: 3, date,
    sources: ['Harvey J et al. Log often, lose more: electronic dietary self-monitoring for weight loss. Obesity, 2019.'],
    body: `Food tracking works best when it is quick and frequent, not perfect.

{graphic}

## What the research found
In a 6-month weight-loss study, the people who logged their food **most often** lost the most weight. How often they logged mattered more than how much time they spent doing it.

## Why logging right away helps
- You don't forget snacks and drinks.
- Portions are fresh in your mind.
- Seeing the numbers helps you make the next choice.

## Make it fast
- Log before or right after you eat, not at the end of the day.
- Don't chase perfect numbers. A good estimate is enough.
- Save meals you eat often.

## One photo is enough
With CalorAI, logging a meal takes a few seconds: snap a photo, check the result and save.`,
  },
  {
    slug: 'plan-your-meals',
    title: 'Plan your week of meals',
    description: 'People who plan meals ahead eat a more varied, healthier diet. Decide before you are hungry.',
    category: 'Tips', cover: 'planner', graphic: 'tip-10-plan-meals', minutes: 3, date,
    sources: ['Ducrot P et al. Meal planning is associated with food variety, diet quality and body weight status. Int J Behav Nutr Phys Act, 2017.'],
    body: `The hardest time to make a healthy choice is when you are already hungry. Planning ahead solves that.

{graphic}

## What the research found
A large study found that people who plan their meals ahead tend to eat a **more varied and healthier diet**, and were less likely to be obese.

## Why planning works
- You decide when you are calm, not hungry.
- You shop for what you need, so healthy food is at home.
- You waste less food and money.

## A simple way to start
- Pick 3–4 dinners for the week.
- Cook double and keep leftovers for lunch.
- Write a shopping list from your plan.
- Leave one night free for eating out.

## Let AI plan it for you
CalorAI can create a full week of breakfasts, lunches and dinners that fit your calorie target.`,
  },
  {
    slug: 'same-calories-chips-vs-dinner',
    title: '1,050 calories: one bag of chips or dinner and dessert?',
    description: 'A large bag of chips can have as many calories as a full dinner plus dessert. Here is the comparison.',
    category: 'Same calories', cover: 'chips', graphic: 'same-calories-3-chips-vs-dinner', minutes: 3, date,
    sources: ['USDA FoodData Central. Values are approximate.'],
    body: `Snacks eaten in front of the TV are easy to forget, but the calories still count.

{graphic}

## Option 1: one large bag of chips (about 1,050 kcal)
A 200 g bag is easy to finish on the sofa without noticing. It fills you up for a short time and has little protein or fibre.

## Option 2: dinner plus dessert (about 1,050 kcal)
- Salmon dinner with vegetables, about 700 kcal
- Fruit and yogurt bowl, about 350 kcal

A full plate and a sweet bowl, for the same calories as one bag.

## Snack smarter
- Put a portion in a bowl instead of eating from the bag.
- Choose popcorn, nuts in small portions or fruit.
- Don't keep big bags at home.

Snap your snack in CalorAI to see what it costs your day.`,
  },
  {
    slug: 'watch-your-weekends',
    title: 'Watch your weekends',
    description: 'Adults tend to eat more on Saturdays and Sundays, which can quietly slow weight loss. Plan one treat, not two days.',
    category: 'Tips', cover: 'burger2', graphic: 'tip-11-weekends', minutes: 3, date,
    sources: ['Racette SB et al. Influence of weekend lifestyle patterns on body weight. Obesity, 2008.'],
    body: `Many people eat well from Monday to Friday, then lose track at the weekend.

{graphic}

## What the research found
Research shows that adults tend to **eat more on Saturdays and Sundays**. Over time, this weekend pattern can quietly slow down or stop weight loss.

## Why weekends are harder
- More social meals, takeaways and drinks.
- Less routine and later nights.
- The "I'll start again on Monday" feeling.

## Enjoy the weekend and stay on track
- Plan one treat meal instead of two free days.
- Keep breakfast and lunch normal.
- Go for a long walk or do something active.
- Choose drinks carefully. Alcohol adds up fast.

## Spot your pattern
The CalorAI calendar colors every day green, yellow or red, so you can see if weekends are your weak spot.`,
  },
  {
    slug: 'add-fibre-stay-full',
    title: 'Add fibre, stay full longer',
    description: 'Fruit, oats, beans and vegetables are rich in fibre, which slows digestion and keeps you satisfied.',
    category: 'Tips', cover: 'fruitbowl', graphic: 'tip-12-fibre', minutes: 3, date,
    sources: ['Harvard T.H. Chan School of Public Health. Fiber.'],
    body: `If you always feel hungry when you cut calories, fibre might be the missing piece.

{graphic}

## What fibre does
Fibre is the part of plant foods your body can't fully digest. It **slows digestion and keeps you satisfied**, so you feel full for longer. It also supports healthy digestion.

## Foods high in fibre
- Oats and wholegrain bread
- Beans, lentils and chickpeas
- Berries, apples and pears
- Vegetables like broccoli, carrots and peas
- Nuts and seeds

## Easy ways to eat more
- Add berries or seeds to your breakfast.
- Choose wholegrain instead of white bread, rice and pasta.
- Add beans to soups, salads and stews.
- Snack on fruit.

Increase fibre slowly and drink enough water to avoid stomach discomfort.`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
