"use client";
import { MarkdownRenderer } from "@/components";

export default function Privacy() {
  return (
    <div>
      <MarkdownRenderer documentRoute="/documents/legal_terms.md" />
    </div>
  );
}
