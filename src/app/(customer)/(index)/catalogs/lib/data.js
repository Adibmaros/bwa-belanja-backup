export async function fetchProducts(body) {
    try {

        const res = await fetch("/api/catalog", {
            method: "POST",
            body: JSON.stringify(body ?? {})
        });


        if (!res.ok) {
            const errorText = await res.text();
            console.error("Error response:", errorText);
            throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
        }

        const data = await res.json();

        return data ?? [];
    } catch (error) {
        console.error("Fetch error details:", error);
        return { status: false, message: error.message || "Error fetching data" };
    }
}