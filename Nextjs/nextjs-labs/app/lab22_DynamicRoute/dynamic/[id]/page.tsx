export default async function IdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <h1>ID is: {id}</h1>;
}


// import { useParams } from "next/navigation";

// export default function IdPage() {
//   const params = useParams();
//   return <h1>ID is: {params.id}</h1>;
// }
