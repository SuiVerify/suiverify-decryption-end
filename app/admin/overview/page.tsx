"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/ui/Sidebar";

// Mock data for decryption history
const mockDecryptionHistory = [
  {
    id: 1,
    entity_name: "govt",
    timestamp: 1732136414611,
    blobid: "DFomEq1h7Vn6K0Lz3ZMI84kTxC6KUtaGVDk1kMPWLvU",
    blob_owned_by: "0xcca6db49f9f75b25b2f98d76db7f505b487bcfd9eeeadfea06b51e2fe126fb9e4",
  },
  {
    id: 2,
    entity_name: "govt",
    timestamp: 1732136415611,
    blobid: "LN5wj6dVBlc4Mmtbpdtsa7vRZo5-fgO9rBuuZ8A1m8I",
    blob_owned_by: "0xabc123def4567890abcdef1234567890abcdef1234567890abcdef1234567890",
  },
  {
    id: 3,
    entity_name: "govt",
    timestamp: 1732136416611,
    blobid: "XYZ9qR4sT7uV8wX5yZ6aB3cD2eF1gH0iJ9kL8mN7oP6qR5sT4uV3wX2yZ1",
    blob_owned_by: "0xdef456abc7890123def456abc7890123def456abc7890123def456abc7890123",
  },
  {
    id: 4,
    entity_name: "govt",
    timestamp: 1732136417611,
    blobid: "MNO3pQ6rS9tU2vW5xY8zA1bC4dE7fG0hI3jK6lM9nO2pP5qR8sT1uV4wX7",
    blob_owned_by: "0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
  },
  {
    id: 5,
    entity_name: "govt",
    timestamp: 1732136418611,
    blobid: "GHI7sT0uV3wX6yZ9aB2cD5eF8gH1iJ4kK7lL0mM3nN6oO9pP2qQ5rR8sS1",
    blob_owned_by: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
  },
  {
    id: 6,
    entity_name: "govt",
    timestamp: 1732136419611,
    blobid: "JKL1tU4vW7xY0zA3bC6dE9fG2hH5iI8jJ1kK4lL7mM0nN3oO6pP9qQ2rR5",
    blob_owned_by: "0x9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba",
  },
  {
    id: 7,
    entity_name: "govt",
    timestamp: 1732136420611,
    blobid: "PQR5vW8xY1zA4bC7dE0fG3hH6iI9jJ2kK5lL8mM1nN4oO7pP0qQ3rR6sS9",
    blob_owned_by: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  },
  {
    id: 8,
    entity_name: "govt",
    timestamp: 1732136421611,
    blobid: "STU9wX2yZ5aB8cD1eF4gG7hH0iI3jJ6kK9lL2mM5nN8oO1pP4qQ7rR0sS3",
    blob_owned_by: "0x5678901234ef5678901234ef5678901234ef5678901234ef5678901234ef5678",
  },
  {
    id: 9,
    entity_name: "govt",
    timestamp: 1732136422611,
    blobid: "VWX3yZ6aB9cD2eF5gG8hH1iI4jJ7kK0lL3mM6nN9oO2pP5qQ8rR1sS4tT7",
    blob_owned_by: "0x3456789012cdef3456789012cdef3456789012cdef3456789012cdef34567890",
  },
  {
    id: 10,
    entity_name: "govt",
    timestamp: 1732136423611,
    blobid: "YZA7aB0cD3eF6gG9hH2iI5jJ8kK1lL4mM7nN0oO3pP6qQ9rR2sS5tT8uU1",
    blob_owned_by: "0x7890123456789012345678901234567890123456789012345678901234567890",
  },
  {
    id: 11,
    entity_name: "govt",
    timestamp: 1732136424611,
    blobid: "BCD1cD4eF7gG0hH3iI6jJ9kK2lL5mM8nN1oO4pP7qQ0rR3sS6tT9uU2vV5",
    blob_owned_by: "0x2345678901bcdef2345678901bcdef2345678901bcdef2345678901bcdef2345",
  },
  {
    id: 12,
    entity_name: "govt",
    timestamp: 1732136425611,
    blobid: "EFG5eF8gG1hH4iI7jJ0kK3lL6mM9nN2oO5pP8qQ1rR4sS7tT0uU3vV6wW9",
    blob_owned_by: "0x4567890123def4567890123def4567890123def4567890123def4567890123",
  },
];

// Format address to show first 6 and last 4 characters
const formatAddress = (address: string) => {
  if (!address) return "";
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Format timestamp to readable date
const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Copy to clipboard function
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default function OverviewPage() {
  const router = useRouter();

  // Check admin authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/adminLogin");
    }
  }, [router]);

  return (
    <div className="flex h-screen bg-gradient-to-tl from-secondary/40 via-ghost-white to-ghost-white outfit overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <main className="max-w-[1920px] mx-auto px-6 py-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-charcoal-text mb-2 sans-bartle">
              Decryption History
            </h1>
            <p className="text-sm text-charcoal-text/70">
              Showing all {mockDecryptionHistory.length} decryption records
            </p>
          </div>

          {/* Full Data Table */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl border-[3px] border-primary/30 shadow-[0.1em_0.1em]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/5 border-b-2 border-primary/20">
                    <th className="text-left py-4 px-6 text-xs font-semibold text-charcoal-text/70 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-charcoal-text/70 uppercase tracking-wider">
                      Entity Name
                    </th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-charcoal-text/70 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-charcoal-text/70 uppercase tracking-wider">
                      Blob ID
                    </th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-charcoal-text/70 uppercase tracking-wider">
                      Blob Owned By
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {mockDecryptionHistory.map((record) => (
                    <tr
                      key={record.id}
                      className="hover:bg-primary/5 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <span className="text-sm font-bold text-charcoal-text">
                          {record.id}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/15 text-primary border border-primary/30">
                          {record.entity_name}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-charcoal-text/70">
                          {formatDate(record.timestamp)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-mono text-primary hover:text-primary-dark cursor-pointer font-semibold">
                            {formatAddress(record.blobid)}
                          </span>
                          <button
                            onClick={() => copyToClipboard(record.blobid)}
                            className="text-charcoal-text/40 hover:text-primary transition-colors"
                            title="Copy Blob ID"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                          <a
                            href={`https://walruscan.com/testnet/blob/${record.blobid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark transition-colors"
                            title="View on Walrus"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-mono text-primary hover:text-primary-dark cursor-pointer font-semibold">
                            {formatAddress(record.blob_owned_by)}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(record.blob_owned_by)
                            }
                            className="text-charcoal-text/40 hover:text-primary transition-colors"
                            title="Copy Address"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
