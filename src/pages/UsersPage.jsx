import Card from "../components/UserCard";
import { useCardsQuery } from "../hooks/users/useUsersQuery";

export default function CardsPage() {
  const { data: cards, isLoading, error } = useCardsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <h1>Products</h1>
      </div>
      <div className="grid gap-4 p-5 grid-cols-5">
        {cards.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
