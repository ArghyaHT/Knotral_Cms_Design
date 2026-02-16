"use client"
import CertificateList from "@/components/CertificateList/CertificateList";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
   const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminAccessToken");

    if (!token) {
      router.push("/");
    }
  }, []);
  return <CertificateList />;
}