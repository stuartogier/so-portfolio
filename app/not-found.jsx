import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ paddingBlock: 'var(--space-24)', textAlign: 'center' }}>
      <div className="container">
        <p style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--text-xs)', color: 'var(--colour-text-muted)', marginBottom: 'var(--space-4)', maxWidth: 'none' }}>404</p>
        <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>Page not found</h1>
        <p style={{ color: 'var(--colour-text-muted)', marginBottom: 'var(--space-8)' }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn btn-primary">Go to homepage</Link>
      </div>
    </div>
  );
}
