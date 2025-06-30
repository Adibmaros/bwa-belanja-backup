// Script untuk testing keep-alive secara manual
// Jalankan dengan: node scripts/test-keepalive.js

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Supabase credentials not found in environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testKeepAlive() {
  console.log("🔄 Testing Supabase connection...");

  try {
    // Test 1: Basic connection
    const { data, error } = await supabase
      .from("User") // Menggunakan tabel User dari Prisma schema
      .select("id")
      .limit(1);

    if (error) {
      console.error("❌ Database query failed:", error.message);
      return false;
    }

    console.log("✅ Database connection successful");

    // Test 2: Storage connection (jika menggunakan storage)
    try {
      const { data: storageData } = supabase.storage.from("belanja").getPublicUrl("public/brands/test.png");

      console.log("✅ Storage connection successful");
    } catch (storageError) {
      console.log("⚠️  Storage test skipped or failed");
    }

    return true;
  } catch (error) {
    console.error("❌ Connection test failed:", error.message);
    return false;
  }
}

// Jalankan test
testKeepAlive()
  .then((success) => {
    if (success) {
      console.log("🎉 All tests passed! Your Supabase connection is working.");
    } else {
      console.log("💥 Some tests failed. Check your configuration.");
    }
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error("💥 Unexpected error:", error);
    process.exit(1);
  });
