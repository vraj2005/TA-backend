export default function FeedLayout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {model}
    </div>
  );
}
