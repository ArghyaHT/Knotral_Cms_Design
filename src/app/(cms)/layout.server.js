import CMSLayout from "./layout.client";

export const dynamic = "force-dynamic";


export default async function CMSLayoutServer({ children }) {
  const res = await fetch(
    "https://knotral-backend.onrender.com/api/webinars/get-webinars",
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <CMSLayout webinars={data?.response || []}>
      {children}
    </CMSLayout>
  );
}
