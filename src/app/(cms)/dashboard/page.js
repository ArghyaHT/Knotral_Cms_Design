import Dashboard from "@/components/Dashboard/Dashboard";

export default async function Page() {
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinars`,
    { cache: "no-store" } // ensures SSR, fresh data
  );
  const data = await res.json();
  const webinars = data.success ? data.response : [];

  return <Dashboard webinars={webinars}/>;
}