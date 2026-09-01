import { redirect } from "next/navigation";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi2";
interface PageProps {
  searchParams: Promise<{
    order_id?: string;
    status_code?: string;
    transaction_status?: string;
  }>;
}

const PaymentSuccess = async ({ searchParams }: PageProps) => {
  const { order_id, transaction_status } = await searchParams;

  if (transaction_status === "pending") {
    redirect(`/payment/pending?order_id=${order_id}`);
  }

  if (
    transaction_status === "deny" ||
    transaction_status === "cancel" ||
    transaction_status === "expire" ||
    transaction_status === "failure"
  ) {
    redirect(`/payment/failure?order_id=${order_id}`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-sm">
        <HiCheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Payment Successful
        </h1>
        <p className="mb-6 text-gray-600">
          Terima kasih, pembayaran Anda telah berhasil diproses.
        </p>

        {order_id && (
          <div className="mb-6 rounded-md bg-gray-50 p-3 text-sm text-gray-700">
            <span className="text-gray-500">Order ID</span>
            <p className="font-medium">{order_id}</p>
          </div>
        )}

        <Link
          href="/myreservation"
          className="inline-block w-full rounded-md bg-orange-400 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-500"
        >
          Lihat Reservasi Saya
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
