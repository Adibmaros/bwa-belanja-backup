import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

class SupabaseKeepAlive {
  constructor() {
    this.supabase = createClient(supabaseUrl, supabaseKey);
    this.isEnabled = process.env.NODE_ENV === "production";
    this.intervalId = null;
  }

  // Fungsi untuk melakukan ping ke database
  async ping() {
    try {
      const { data, error } = await this.supabase
        .from("User") // Menggunakan tabel User dari Prisma schema
        .select("id")
        .limit(1);

      if (error) {
        console.error("Keep-alive ping failed:", error);
        return false;
      }

      console.log("Keep-alive ping successful:", new Date().toISOString());
      return true;
    } catch (error) {
      console.error("Keep-alive ping error:", error);
      return false;
    }
  }

  // Mulai keep-alive otomatis (hanya di production)
  start() {
    if (!this.isEnabled) {
      console.log("Keep-alive disabled in development mode");
      return;
    }

    if (this.intervalId) {
      console.log("Keep-alive already running");
      return;
    }

    // Ping setiap 4 jam (14400000 ms)
    this.intervalId = setInterval(() => {
      this.ping();
    }, 4 * 60 * 60 * 1000);

    console.log("Keep-alive started - will ping every 4 hours");
  }

  // Hentikan keep-alive
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("Keep-alive stopped");
    }
  }

  // Ping manual
  async manualPing() {
    console.log("Manual keep-alive ping...");
    return await this.ping();
  }
}

// Export singleton instance
const keepAlive = new SupabaseKeepAlive();

export default keepAlive;

// Export utility functions
export const startKeepAlive = () => keepAlive.start();
export const stopKeepAlive = () => keepAlive.stop();
export const pingDatabase = () => keepAlive.manualPing();
