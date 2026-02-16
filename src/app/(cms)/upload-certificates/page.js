"use client"
import UploadCertificates from "@/components/UploadCertificates/UploadCertificates";
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
  return <UploadCertificates />;
}