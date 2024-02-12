import React from "react";
import Card from "./components/Card";

function App() {
  const plans = [
    {
      id: "Free",
      price: "$0/month",
      no_of_users: "Single user",
      storage: "50 GB storage",
      no_of_projects: "Unlimited Public Projects",
      access: "community access",
      projects: "text-muted",
      project_class: "fa-solid fa-xmark",
      phone: "text-muted",
      phone_class: "fa-solid fa-xmark",
      subdomain_class: "fa-solid fa-xmark",
      subdomain: "text-muted",
      reports: "text-muted",
      reports_class: "fa-solid fa-xmark",
    },
    {
      id: "Plus",
      price: "$9/month",
      no_of_users: "5 users",
      storage: "50 GB storage",
      no_of_projects: "Unlimited Public Projects",
      access: "community access",
      projects: "text",
      project_class: "fa-solid fa-check",
      phone: "text",
      phone_class: "fa-solid fa-check",
      subdomain_class: "fa-solid fa-check",
      subdomain: "text",
      reports: "text-muted",
      reports_class: "fa-solid fa-xmark",
    },
    {
      id: "Pro",
      price: "$49/month",
      no_of_users: "Unlimited users",
      storage: "50 GB storage",
      no_of_projects: "Unlimited Public Projects",
      access: "community access",
      projects: "text",
      project_class: "fa-solid fa-check",
      phone: "text",
      phone_class: "fa-solid fa-check",
      subdomain_class: "fa-solid fa-check",
      subdomain: "text",
      reports: "text",
      reports_class: "fa-solid fa-check",
    },
  ];
  return (
    <>
      <div>
        <Card plans={plans} />
      </div>
    </>
  );
}

export default App;
