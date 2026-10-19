import type { Post } from '@/content/posts';

// **bold** -> <b>
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : part);
}

// Renders the simple block format described in content/posts.ts.
export default function PostBody({ post }: { post: Pick<Post, 'body' | 'title'> & { graphic?: string } }) {
  return (
    <>
      {post.body.split(/\n\s*\n/).map((block, i) => {
        const b = block.trim();
        if (b === '{graphic}') {
          return (
            <figure key={i} className="post-graphic">
              <img src={`/blog/${post.graphic}.webp`} alt={post.title} width={720} height={900} loading="lazy" />
            </figure>
          );
        }
        if (b.startsWith('## ')) {
          const [head, ...rest] = b.split('\n');
          return (
            <div key={i}>
              <h2>{head.slice(3)}</h2>
              {rest.length > 0 && <Block text={rest.join('\n')} />}
            </div>
          );
        }
        return <Block key={i} text={b} />;
      })}
    </>
  );
}

function Block({ text }: { text: string }) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  // "| a | b |" lines = table; the first row is the header, "|---|" rows are skipped.
  if (lines.every((l) => l.startsWith('|'))) {
    const rows = lines.filter((l) => !/^\|(\s*:?-+:?\s*\|)+$/.test(l))
      .map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
    const [head, ...body] = rows;
    return (
      <div className="post-table">
        <table>
          <thead><tr>{head.map((c, i) => <th key={i}>{inline(c)}</th>)}</tr></thead>
          <tbody>{body.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{inline(c)}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  if (lines.every((l) => l.startsWith('- '))) {
    return <ul>{lines.map((l) => <li key={l}>{inline(l.slice(2))}</li>)}</ul>;
  }
  return <p>{inline(lines.join(' '))}</p>;
}
