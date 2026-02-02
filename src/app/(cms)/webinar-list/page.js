import WebinarList from "@/components/WebinarList/WebinarList";

export default async function Page({searchParams}) {
    const params = await searchParams; // if it's a Promise
  const page = parseInt(params.page) || 1;
  const category = params.category || "";
  const type = params.type || "";
  const price = params.price || "";
  const search = params.search || "";
    const sort = params.sort || "dateNew"; // ✅ ADD THIS


  // Build query string safely
  const query = new URLSearchParams({
    page,
    sort, // ✅ pass to API
    ...(category && { category }),
    ...(type && { type }),
    ...(price && { price }),
    ...(search && { search }),
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-all-webinars?${query}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const webinars = data.success ? data.response : [];

  // console.log(webinars)

  const dataPagination = data.success ? data.pagination : {};
  return <WebinarList 
        webinars={webinars}
        pagination={dataPagination}
        filters={{ category, type, price, search, sort }}
        />;
}