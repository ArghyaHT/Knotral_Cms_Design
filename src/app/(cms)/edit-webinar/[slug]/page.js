import EditWebinar from "@/components/EditWebinar/EditWebinar";

export default async function Page({ params }) {
   const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinar-by-slug?slug=${slug}`,
    { cache: "no-store" }
  );


  const data = await res.json();

  const webinar = data.success ? data.response : null;

  return <EditWebinar webinar={webinar} />;
}
