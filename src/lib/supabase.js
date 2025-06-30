import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

// Keep-alive function untuk mencegah auto-pause
export const keepDatabaseAlive = async () => {
  try {
    const { data, error } = await supabase
      .from("User") // Menggunakan tabel User dari Prisma schema
      .select("id")
      .limit(1);

    if (error) {
      console.error("Keep-alive failed:", error);
      return false;
    }

    console.log("Database keep-alive successful");
    return true;
  } catch (error) {
    console.error("Keep-alive error:", error);
    return false;
  }
};

export const getImageUrl = (name, path = "brands") => {
  const { data } = supabase.storage.from("belanja").getPublicUrl(`public/${path}/${name}`);
  return data.publicUrl;
};

export const uploadBrandLogo = async (file, path = "brands") => {
  const fileType = file.type.split("/")[1];
  const fileName = `${path}-${Date.now()}.${fileType}`;

  await supabase.storage.from("belanja").upload(`public/${path}/${fileName}`, file, {
    cacheControl: "3600",
    upsert: false,
  });
  return fileName;
};

export const deleteFile = async (fileName, path = "brands") => {
  await supabase.storage.from("belanja").remove([`public/${path}/${fileName}`]);
};

export default supabase;
