// Small inline icon set (24x24, stroke). Keeps the site free of icon-font requests.
const paths: Record<string, string> = {
  camera: 'M4 8h3l2-3h6l2 3h3v11H4z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  chat: 'M4 5h16v11H9l-5 4z M8 10h8 M8 13h5',
  calendar: 'M4 6h16v14H4z M4 10h16 M8 3v5 M16 3v5 M8 14h3',
  run: 'M13 4a2 2 0 1 0 0 .01 M9 21l3-6 3 3v3 M6 12l4-4 4 2 3 4 M12 15l-2-4',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M12 8v5 M12 16v.01',
  chart: 'M4 20V4 M4 20h16 M8 16l4-5 3 3 5-6',
  grid: 'M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3c2.5 3 2.5 15 0 18 M12 3c-2.5 3-2.5 15 0 18',
  check: 'M5 12l5 5 9-10',
  menu: 'M4 7h16 M4 12h16 M4 17h16',
  close: 'M6 6l12 12 M18 6L6 18',
  mail: 'M3 6h18v12H3z M3 6l9 7 9-7',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
  trash: 'M4 7h16 M9 7V4h6v3 M6 7l1 13h10l1-13',
};

export default function Icon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name] ?? paths.sparkle} />
    </svg>
  );
}
