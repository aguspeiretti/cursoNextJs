import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET(request, { params }) {
  const { categories } = params;

  const productsRef = collection(db, "products");

  const q =
    categories === "Todos"
      ? productsRef
      : query(productsRef, where("type", "==", categories));

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json([]);
}
