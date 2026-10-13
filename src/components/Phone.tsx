// App screenshot inside its phone frame (transparent webp from social-graphics/photo-ads/ad4.html?f=phone).
export default function Phone({ screen, alt, priority = false, className = '' }:
  { screen: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <img className={`phone ${className}`} src={`/screens/${screen}.webp`} alt={alt}
      width={420} height={866} loading={priority ? 'eager' : 'lazy'} decoding="async" />
  );
}
