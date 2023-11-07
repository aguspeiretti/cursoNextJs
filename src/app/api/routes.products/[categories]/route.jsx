import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET(request, { params }) {
  const { categories } = params;
  console.log("este est tu param", categories);
  const productsRef = collection(db, "products");

  console.log("essteeeeeeeeee es tu :", productsRef.type);

  const q =
    categories === "Todos"
      ? productsRef
      : query(productsRef, where("type", "==", categories));

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}