export default function Name({ params }: { params: { name: string } }) {
  return (
    <main>
      <h1>Hello world from {`${params.name}`}</h1>
    </main>
  );
}
