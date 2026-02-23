export async function fetchCoins() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Network error");
    }

    return await response.json();
}