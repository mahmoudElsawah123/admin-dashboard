import Image from "next/image";
import React, { useEffect, useState } from "react";

const DataStatsOne: React.FC = () => {
  const [dataStatsList, setDataStatsList] = useState<any[]>([]);
  const [servicesList, setServicesList] = useState<any[]>([]);
console.log(servicesList)
  useEffect(() => {
    // استرجاع البيانات من localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // حساب عدد المستخدمين بناءً على الدور
      const clientCount = parsedData.Users.filter((user: any) => user.Role === "Client").length;
      const freelancerCount = parsedData.Users.filter((user: any) => user.Role === "Free-lancer").length;
      const adminCount = parsedData.Users.filter((user: any) => user.Role === "Admin").length;

      // إنشاء الإحصائيات
      const stats = [
        { title: "Clients", value: clientCount.toString(), color: "#3FD97F", growthRate: 0.43 },
        { title: "Freelancers", value: freelancerCount.toString(), color: "#FF9C55", growthRate: 4.35 },
        { title: "Admins", value: adminCount.toString(), color: "#8155FF", growthRate: 2.59 },
      ];

      setDataStatsList(stats);

      // جمع جميع الخدمات من المستقلين
      const services = parsedData.Users.filter((user: any) => user.Role === "Free-lancer")
        .flatMap((user: any) =>
          user.Services.map((service: any) => ({
            ...service,
            FreeLanceNom: user.Nom, // إضافة اسم المستقل للخدمة
          }))
        );

      setServicesList(services);
    }
  }, []);

  return (
    <div>
      {/* عرض الإحصائيات */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dataStatsList.map((item, index) => (
          <div key={index} className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
            <div
              className="flex h-14.5 w-14.5 items-center justify-center rounded-full"
              style={{ backgroundColor: item.color }}
            >
              {item.title.charAt(0)} {/* عرض أول حرف كأيقونة */}
            </div>
            <div className="mt-6">
              <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">{item.value} User </h4>
              <h2 className="text-body-lg font-medium">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 قسم عرض جميع الخدمات */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">All Services</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesList.map((service, index) => (
            <div key={index} className="rounded-[10px] bg-white p-4 shadow-md dark:bg-gray-dark transition-transform transform hover:scale-105">
              {/* صورة الخدمة */}
              <Image src="/images/2.jpeg" width={200} height={200} alt={service.Titre} className="w-full h-32 object-cover rounded-md mb-4" />
              
              {/* تفاصيل الخدمة */}
              <h3 className="text-lg font-semibold mb-2">{service.Titre}</h3>
              <p className="text-sm text-gray-500 mb-2">{service.Description}</p>
              
              {/* السعر واسم المستقل */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-500">{service.Prix}</span>
                <span className="text-sm text-gray-400">By: {service.FreeLanceNom}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataStatsOne;
