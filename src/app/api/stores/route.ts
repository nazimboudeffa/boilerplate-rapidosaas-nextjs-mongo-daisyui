import { connect } from "@/utils/config/db";
import Store from "@/utils/models/Store";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET() {
  try {
    const stores = await Store.find();

    return NextResponse.json({ stores }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const storeData = body.formData;

    await Store.create(storeData);

    return NextResponse.json({ message: "Store Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}