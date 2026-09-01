import Link from "next/link";
import { HiXCircle } from "react-icons/hi2";

interface PageProps {
  searchParams: Promise<{
    order_id?: string;
    status_code?: string;
    transaction_status?: string;
  }>;
}

const PaymentFailure = async ({ searchParams }: PageProps) => {
  const { order_id, transaction_status } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-sm">
        <HiXCircle className="mx-auto mb-4 h-16 w-16 text-red-500" />
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Payment Failed
        </h1>
        <p className="mb-6 text-gray-600">
          Maaf, pembayaran Anda gagal atau dibatalkan. Silakan coba lagi atau
          hubungi kami jika masalah berlanjut.
        </p>

        {order_id && (
          <div className="mb-6 rounded-md bg-gray-50 p-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Order ID</span>
              <span className="font-medium">{order_id}</span>
            </div>
            {transaction_status && (
              <div className="mt-1 flex items-center justify-between">
                <span className="text-gray-500">Status</span>
                <span className="font-medium capitalize">
                  {transaction_status}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Link
            href="/myreservation"
            className="inline-block w-full rounded-md bg-orange-400 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-500"
          >
            Coba Bayar Lagi
          </Link>
          <Link
            href="/"
            className="inline-block w-full rounded-md border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
