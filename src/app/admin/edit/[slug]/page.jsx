import EditForm from "@/components/admin/EditForm";
import React from "react";

const EditPage = async ({ params }) => {
  const { slug } = params;

  const item = await fetch(
    `http://${process.env.VERCEL_URL}/api/routes.product/${slug}`,
    {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    }
  ).then((r) => r.json());

  return (
    <div className="w-full h-full">
      <EditForm item={item} />
    </div>
  );
};

export default EditPage;
