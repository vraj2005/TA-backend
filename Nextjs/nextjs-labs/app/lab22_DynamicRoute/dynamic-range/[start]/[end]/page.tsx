function isPrime(num: number) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export default async function PrimePage({
  params,
}: {
  params: Promise<{ start: string; end: string }>;
}) {
  const { start, end } = await params;

  const s = Number(start);
  const e = Number(end);

  const primes: number[] = [];
  for (let i = s; i <= e; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return (
    <div>
      <h2>Prime Numbers</h2>
      <p>{primes.join(", ")}</p>
    </div>
  );
}
