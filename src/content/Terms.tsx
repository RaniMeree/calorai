import { site } from '@/lib/site';

export const termsUpdated = '2026-10-13';

export default function Terms({ lang }: { lang: string }) {
  const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;
  return (
    <>
      <p>
        These terms apply to the CalorAI app and the website calor-ai.com, provided by {site.company} (&quot;we&quot;).
        By using CalorAI you agree to them. If you do not agree, please do not use the app.
      </p>

      <h2>1. The service</h2>
      <p>
        CalorAI helps you track food, calories, nutrients, workouts and weight, using AI to analyse meal photos and answer
        questions. Features may change over time.
      </p>

      <h2>2. Not medical advice</h2>
      <p>
        All numbers are estimates and may be inaccurate. Health warnings depend on the information you provide and may not
        catch every ingredient. CalorAI is not a medical device and does not replace a doctor, dietitian or the label on a
        product. Talk to a healthcare professional before changing your diet, especially if you are pregnant, have an eating
        disorder, diabetes, allergies or another medical condition.
      </p>

      <h2>3. Your account</h2>
      <ul>
        <li>You must be at least 16 years old to use CalorAI.</li>
        <li>Keep your login safe. You are responsible for activity on your account.</li>
        <li>Give accurate information so your targets and warnings are useful.</li>
        <li>You can delete your account at any time (see <a href={`/${lang}/delete-account/`}>Delete account</a>).</li>
      </ul>

      <h2>4. Subscriptions and purchases</h2>
      <p>
        CalorAI is free to download. Some features need a paid subscription or credits. Purchases are made through Google
        Play or the App Store, and their payment, renewal and refund terms apply. Subscriptions renew automatically until
        you cancel them in your store account settings. Deleting your account does not cancel a subscription.
      </p>

      <h2>5. Ads</h2>
      <p>The free version may show ads, including optional rewarded ads that give you credits.</p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>post illegal, hateful, harassing, sexual or misleading content in the community feature;</li>
        <li>upload content you do not have the rights to;</li>
        <li>try to hack, overload, copy or reverse engineer the service;</li>
        <li>use the service to build a competing product or to scrape data.</li>
      </ul>
      <p>We may remove content or suspend accounts that break these rules.</p>

      <h2>7. Your content</h2>
      <p>
        You own the photos and content you add. You give us permission to store and process them to run the service, and
        to show community posts to other users. You can delete your content and account at any time.
      </p>

      <h2>8. Our rights</h2>
      <p>
        The app, the CalorAI name and logo, designs and software belong to {site.company}. You may not use them without
        our permission.
      </p>

      <h2>9. Liability</h2>
      <p>
        The service is provided &quot;as is&quot;. To the extent allowed by law, we are not liable for indirect losses or
        for decisions you make based on estimates in the app. Nothing in these terms limits rights you have as a consumer
        under the law of your country.
      </p>

      <h2>10. Changes and ending the service</h2>
      <p>
        We may update these terms. If changes are important, we will tell you in the app. We may change or stop parts of
        the service, and will give notice where we reasonably can.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of Sweden, without affecting the mandatory consumer protection rules of the
        country where you live.
      </p>

      <h2>12. Contact</h2>
      <p>Questions about these terms? Email {mail}.</p>
    </>
  );
}
