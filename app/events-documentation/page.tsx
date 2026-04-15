"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Calendar, SlidersHorizontal, Loader2 } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmwSAv_nZ-vIGVZzSRHaoLkdj8seRgFmTOh57FuIPh8331A3iD0h9YeWojibnKp1Wuf2QblLyCoiXO/pub?gid=0&single=true&output=csv";

interface EventEntry {
  name: string;
  monthYear: string; // "MM/YYYY" or "M/YYYY"
  gdriveUrl: string;
}

function parseCsvRow(row: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (inQuotes) {
      if (ch === '"' && row[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      fields.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

async function fetchEvents(): Promise<EventEntry[]> {
  const res = await fetch(SHEET_CSV_URL);
  if (!res.ok) throw new Error(`Failed to fetch spreadsheet: ${res.status}`);
  const text = await res.text();
  const lines = text.split("\n").filter((l) => l.trim().length > 0);

  // Skip the header row
  return lines.slice(1).map((line) => {
    const cols = parseCsvRow(line);
    return {
      name: cols[0] || "",
      monthYear: cols[1] || "",
      gdriveUrl: cols[2] || "",
    };
  });
}

function parseMonthYear(my: string): { month: number; year: number } {
  const [m, y] = my.split("/");
  return { month: parseInt(m, 10), year: parseInt(y, 10) };
}

function formatDate(my: string): string {
  const { month, year } = parseMonthYear(my);
  const date = new Date(year, month - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function toSortValue(my: string): number {
  const { month, year } = parseMonthYear(my);
  return year * 100 + month;
}

export default function EventsDocumentationPage() {
  const [events, setEvents] = useState<EventEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetchEvents()
      .then((data) => {
        if (!cancelled) setEvents(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message ?? String(err));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const monthOptions = useMemo(() => {
    const all = events.map((e) => e.monthYear);
    const unique = Array.from(new Set(all));
    unique.sort((a, b) => toSortValue(a) - toSortValue(b));
    return unique.map((my) => ({ value: my, label: formatDate(my) }));
  }, [events]);

  const filteredEvents = useMemo(() => {
    const reversed = [...events].reverse();

    return reversed.filter((event) => {
      if (search && !event.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }

      const eventSort = toSortValue(event.monthYear);

      if (startDate) {
        const startSort = toSortValue(startDate);
        if (eventSort < startSort) return false;
      }

      if (endDate) {
        const endSort = toSortValue(endDate);
        if (eventSort > endSort) return false;
      }

      return true;
    });
  }, [events, search, startDate, endDate]);

  const hasActiveFilters = search || startDate || endDate;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/asmaralokacrowd.JPEG?height=800&width=1920&text=Events+Documentation"
            alt="PERMIAS SDIA Events Documentation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-primary-700/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-6 bg-secondary-400 px-4 py-2 text-sm font-medium text-secondary-900 hover:bg-secondary-500">
            PERMIAS SDIA Archive
          </Badge>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Events
            <span className="block bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-200 md:text-2xl">
            Browse photos and media from all our past events.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="border-b bg-white px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
            />
          </div>

          {/* Date Range Filters */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filter by date:</span>
            </div>
            <div className="flex flex-1 flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2">
                <label htmlFor="start-date" className="text-sm text-gray-500">
                  From
                </label>
                <select
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="">All</option>
                  {monthOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="end-date" className="text-sm text-gray-500">
                  To
                </label>
                <select
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="">All</option>
                  {monthOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSearch("");
                  setStartDate("");
                  setEndDate("");
                }}
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">
              All Events
            </h2>
            {!loading && !error && (
              <p className="text-gray-500">
                {filteredEvents.length}{" "}
                {filteredEvents.length === 1 ? "event" : "events"} found
              </p>
            )}
          </div>

          {loading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-6 w-6 animate-spin text-primary-600" />
              <span className="ml-3 text-gray-500">Loading events…</span>
            </div>
          )}

          {error && (
            <p className="py-16 text-center text-red-600">Error: {error}</p>
          )}

          {!loading && !error && filteredEvents.length > 0 ? (
            <div className="space-y-4">
              {filteredEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-primary-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-primary-600">
                      {event.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{formatDate(event.monthYear)}</span>
                    </div>
                  </div>
                  <a
                    href={event.gdriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:shadow-md"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Photos
                  </a>
                </div>
              ))}
            </div>
          ) : !loading && !error ? (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-400">
                No events match your search.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </div>
  );
}
