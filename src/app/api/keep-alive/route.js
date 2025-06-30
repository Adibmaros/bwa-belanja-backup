import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export async function GET() {
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Lakukan query sederhana untuk menjaga koneksi tetap aktif
    const { data, error } = await supabase
      .from("User") // Menggunakan tabel User dari Prisma schema
      .select("id")
      .limit(1);

    if (error) {
      console.error("Keep-alive error:", error);
      return NextResponse.json(
        {
          status: "error",
          message: error.message,
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: "success",
      message: "Database connection active",
      timestamp: new Date().toISOString(),
      queryResult: data ? "Data found" : "No data",
    });
  } catch (error) {
    console.error("Keep-alive error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
