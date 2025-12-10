export const fetchCards = async () => {
  const res = await fetch("https://69245b583ad095fb8473e105.mockapi.io/user/cards");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}
