export default async function PaginationPage({
  params,
}: {
  params: Promise<{ pageNo: string }>;
}) {
  const { pageNo } = await params;

  const page = Number(pageNo);
  const startIndex = (page - 1) * 10;
  const endIndex = page * 10 - 1;

  return (
    <div>
      <h2>Pagination Example</h2>
      <p>Page Number: {page}</p>
      <p>Start Index: {startIndex}</p>
      <p>End Index: {endIndex}</p>
    </div>
  );
}
