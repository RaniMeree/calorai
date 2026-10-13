import { site } from '@/lib/site';

// English only for now. Based on what the app actually uses (FullStack/PROJECT_MAP.md):
// FastAPI on Render, MySQL on DigitalOcean, Gemini (food photos), OpenAI (coach), AdMob,
// RevenueCat, PostHog, Firebase Analytics (Android), Expo push, Google/Apple sign-in.
export const privacyUpdated = '2026-10-13';

export default function Privacy({ lang }: { lang: string }) {
  const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;
  return (
    <>
      <p>
        This policy explains what personal data {site.company} (&quot;we&quot;) collects when you use the CalorAI app
        and the website calor-ai.com, why we collect it, and the choices you have. Questions? Email {mail}.
      </p>

      <h2>1. Data we collect</h2>
      <h3>Data you give us</h3>
      <ul>
        <li><b>Account:</b> email address and name, or the details shared by Google or Apple when you sign in with them. You can also start as a guest.</li>
        <li><b>Profile:</b> age, gender, height, weight, activity level, goals and units.</li>
        <li><b>Health information you choose to add:</b> allergies, intolerances and health conditions, used only to warn you about foods.</li>
        <li><b>Food diary:</b> meal photos, foods, portions, nutrition values, recipes and meal plans.</li>
        <li><b>Workouts and weight history.</b></li>
        <li><b>AI coach conversations,</b> typed or spoken. Voice is converted to text on your device.</li>
        <li><b>Community content:</b> posts, comments, likes and profile picture if you use the community feature.</li>
        <li><b>Messages you send us</b> by email.</li>
      </ul>
      <h3>Data collected automatically</h3>
      <ul>
        <li><b>Device and usage data:</b> app version, device type, operating system, language, screens used and crash information.</li>
        <li><b>Advertising identifier</b> for ads in the free version, subject to your device settings and consent.</li>
        <li><b>Push notification token,</b> if you allow notifications.</li>
        <li><b>Purchase records:</b> subscription status from Google Play or the App Store. We never see your card details.</li>
      </ul>

      <h2>2. How we use your data</h2>
      <ul>
        <li>To provide the app: analyse meal photos, calculate calories and macros, create meal and weight plans and answer coach questions.</li>
        <li>To show health warnings based on the conditions you add.</li>
        <li>To keep your account, diary and progress in sync across devices.</li>
        <li>To manage subscriptions and credits.</li>
        <li>To send reminders and notifications you allowed.</li>
        <li>To show ads in the free version.</li>
        <li>To understand how the app is used, fix bugs and improve features.</li>
        <li>To answer your messages and keep the service safe.</li>
      </ul>
      <p>
        <b>Legal bases (EU/EEA and UK):</b> performance of our contract with you; your explicit consent for health
        information and, where required, for ads and analytics; and our legitimate interest in keeping the service secure
        and improving it. You can withdraw consent at any time.
      </p>

      <h2>3. AI processing</h2>
      <p>
        Meal photos are sent to Google&apos;s Gemini AI to recognise food. Coach questions, together with the context
        needed to answer them (such as your goals and today&apos;s intake), are sent to OpenAI. These providers process the
        data on our behalf to return a result. We do not sell your data and do not allow these providers to use it for
        advertising.
      </p>

      <h2>4. Who we share data with</h2>
      <p>We share data only with service providers that help us run CalorAI:</p>
      <ul>
        <li><b>Hosting and storage:</b> Render and DigitalOcean.</li>
        <li><b>AI:</b> Google (Gemini) and OpenAI.</li>
        <li><b>Sign-in:</b> Google and Apple.</li>
        <li><b>Payments:</b> Google Play, Apple App Store and RevenueCat.</li>
        <li><b>Ads:</b> Google AdMob.</li>
        <li><b>Analytics and diagnostics:</b> PostHog and Google Firebase Analytics.</li>
        <li><b>Notifications:</b> Expo push service.</li>
      </ul>
      <p>
        We may also disclose data if required by law. Community posts are visible to other CalorAI users. We do not sell
        personal data.
      </p>

      <h2>5. International transfers</h2>
      <p>
        Some providers are located outside the EU/EEA, for example in the United States. Where this happens, we rely on
        safeguards such as the EU Standard Contractual Clauses or the EU–US Data Privacy Framework.
      </p>

      <h2>6. How long we keep data</h2>
      <p>
        We keep your data while your account is active. When you delete your account, your data is permanently removed
        from our databases. Backups are overwritten within a limited period. Some records may be kept longer where the
        law requires it, for example purchase records.
      </p>

      <h2>7. Your rights and choices</h2>
      <ul>
        <li>Access, correct or download your data.</li>
        <li>Delete your account and data at any time: in the app under More → Delete account, or see <a href={`/${lang}/delete-account/`}>how to delete your account</a>.</li>
        <li>Object to or restrict some processing, and withdraw consent.</li>
        <li>Turn off notifications and limit ad tracking in your device settings.</li>
        <li>Complain to your local data protection authority.</li>
      </ul>
      <p>To use these rights, email {mail}.</p>

      <h2>8. Children</h2>
      <p>
        CalorAI is not intended for children under 16. We do not knowingly collect data from children. If you believe a
        child has given us data, contact us and we will delete it.
      </p>

      <h2>9. Security</h2>
      <p>
        We use encrypted connections, access controls and tokens to protect your data. No system is completely secure, but
        we work to protect your information and fix issues quickly.
      </p>

      <h2>10. Health disclaimer</h2>
      <p>
        CalorAI gives estimates for general information. It is not a medical device and does not give medical advice.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update this policy. We will change the date at the top and, for important changes, tell you in the app.
      </p>
    </>
  );
}
