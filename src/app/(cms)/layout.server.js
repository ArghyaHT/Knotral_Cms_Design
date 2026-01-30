import CMSLayout from "./layout";

export default async function CMSLayoutServer({ children }) {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

   const res = await fetch(
    // `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinars`,
    "https://knotral-backend-1.onrender.com/api/webinars/get-webinars",
    { cache: "no-store" }
  );

  const data = await res.json();
  console.log("RAW RESPONSE:", data);

  const webinars = data.success ? data.response : [];

  console.log(webinars)

  return (
    <CMSLayout webinars={webinars}>
      {children}
    </CMSLayout>
  );
}
