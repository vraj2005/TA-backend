export default async function ModalPhoto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div style={{ background: "white", padding: 20, border: "2px solid black" }}>
      <h2>Modal Photo ID: {id}</h2>
      <p>This is intercepting route modal.</p>
    </div>
  );
}
