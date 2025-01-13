export default async function Overview({
  params,
}: {
  params: {
    id: string; // The `id` is passed as a route parameter
  };
}) {
  // Fetch data for the specific item by its `id`
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="mt-4 text-gray-600">{data.description}</p>
      <div className="mt-6">
        <strong>Price:</strong> ${data.price}
      </div>
      <div className="mt-4">
        <img src={data.image} alt={data.title} className="w-64 h-auto" />
      </div>
    </div>
  );
}
