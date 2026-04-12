import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const { error } = await supabase.from("signups").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "You're already on the list!" }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { count } = await supabase
    .from("signups")
    .select("*", { count: "exact", head: true });

  return NextResponse.json({ success: true, count: count ?? 0 });
}
