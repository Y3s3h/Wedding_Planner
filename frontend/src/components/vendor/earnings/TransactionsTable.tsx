"use client";

const transactions = [
  {
    customer: "Rahul Sharma",
    amount: "₹1,20,000",
    status: "Paid",
  },
  {
    customer: "Sneha Gupta",
    amount: "₹80,000",
    status: "Pending",
  },
  {
    customer: "Aman Verma",
    amount: "₹55,000",
    status: "Paid",
  },
];

export default function TransactionsTable() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-gray-700">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Customer
            </th>

            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Amount
            </th>

            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.customer}
              className="border-t border-slate-100 transition-colors hover:bg-slate-50"
            >
              <td className="px-6 py-5 font-medium text-gray-700">
                {transaction.customer}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {transaction.amount}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    transaction.status === "Paid"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}