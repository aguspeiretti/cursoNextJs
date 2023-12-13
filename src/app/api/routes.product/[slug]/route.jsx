import { NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET(request, { params }) {
  const { slug } = params;

  const docRef = doc(db, "products", slug);

  const docSnapshot = await getDoc(docRef);

  return NextResponse.json([]);
}
