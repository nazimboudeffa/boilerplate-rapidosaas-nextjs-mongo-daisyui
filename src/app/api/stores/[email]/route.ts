import { connect } from "@/utils/config/db";
import Store from "@/utils/models/Store";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET(request: NextRequest, { params } : { params: { email: string } }) {
  try {
    const { email } = params;

    const foundStore = await Store.findOne({ email: email });
    return NextResponse.json({ foundStore }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params } : { params: { email: string } }) {
  try {
    const { email } = params;
    const { formData } = await request.json();
  
    await Store.findOneAndUpdate({ email: email }, formData);
    return NextResponse.json({ message: "Store updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params } : { params: { email: string } }) {
  try {
    const { email } = params;
  
    await Store.findOneAndDelete({ email: email });
    return NextResponse.json({ message: "Store deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}