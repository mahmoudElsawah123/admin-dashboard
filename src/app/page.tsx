"use client"
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React, { useEffect } from "react";
import ProfileBox from "@/components/ProfileBox";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

 const data = {
    "Users": [
      {
        "Role": "Client",
        "Email": "client@example.com",
        "ProfileImage": "client_image_url.jpg",
        "Nom": "John Doe"
      },
      {
        "Role": "Free-lancer",
        "Email": "freelancer@example.com",
        "ProfileImage": "freelancer_image_url.jpg",
        "Nom": "Jane Smith",
        "Services": [
          {
            "Titre": "Développement Web",
            "Description": "Création de sites web professionnels et réactifs.",
            "Prix": "500€",
            "Images": ["web_dev1.jpg", "web_dev2.jpg"],
            "FreeLanceNom": "Jane Smith"
          },
          {
            "Titre": "Design Graphique",
            "Description": "Designs modernes et créatifs pour vos projets.",
            "Prix": "300€",
            "Images": ["", ""],
            "FreeLanceNom": "Jane Smith"
          }
        ]
      },
      {
        "Role": "Admin",
        "Email": "admin@example.com",
        "ProfileImage": "admin_image_url.jpg",
        "Nom": "Admin User"
      }
    ]
  };

export default function Home() {
useEffect(()=>{
  localStorage.setItem('userData', JSON.stringify(data));

},[])  
  return (
    <>
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Profile" />

        <ProfileBox />
      </div>
    </DefaultLayout>
    </>
  );
}
