"use client";

import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/footer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Instagram, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TeamRecord } from "@/lib/types"
import TeamMemberCard from "./TeamMemberCard";

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [members, setMembers] = useState<TeamRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/team', { cache: 'no-store' });
        if (!res.ok) throw new Error(`API fetch failed: ${res.status}`);
        const data = await res.json();
        if (!mounted) return;
        setMembers(data as TeamRecord[]);
      } catch (e: any) {
        if (!mounted) return;
        setErr(e?.message ?? String(e));
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const years = useMemo(() => {
    const set = new Set<string>();
    members.forEach(m => {
      const y = m.graduation_year ? String(m.graduation_year) : "";
      if (y) set.add(y);
    });
    return Array.from(set).sort();
  }, [members]);

  const filteredMembers = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    let result = members.filter(m => {
      const matchesSearch =
        !q ||
        m.name?.toLowerCase().includes(q) ||
        (m.role || "").toLowerCase().includes(q) ||
        (m.major || "").toLowerCase().includes(q) ||
        (m.description || "").toLowerCase().includes(q);

      const matchesYear =
        selectedYear === "all" ||
        String(m.graduation_year || "") === selectedYear;

      return matchesSearch && matchesYear;
    });

    return result;
  }, [members, searchTerm, selectedYear]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team page pic.JPEG?height=800&width=1920&text=Team+Photo"
            alt="Team Photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-primary-700/40"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Our Amazing
            <span className="block bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                placeholder="Search by name, role, major, interests"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-50">
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Graduating Years</SelectItem>
                {years.map(y => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          {loading && (
            <div className="flex justify-center py-12">
              <div className="text-lg text-gray-600">Loading team members...</div>
            </div>
          )}
          {err && (
            <div className="flex justify-center py-12">
              <div className="text-lg text-red-600">Error: {err}</div>
            </div>
          )}
          {!loading && !err && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map(m => (
                <TeamMemberCard key={m.id} member={m} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
