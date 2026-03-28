"use client";

type ProductQuickOrderProps = {
  productName: string;
  phoneNumber?: string;
};

export default function ProductQuickOrder({
  productName,
  phoneNumber = "9779800000000",
}: ProductQuickOrderProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello Aawase,

I’m interested in this item.

Product: ${productName}

Please share available sizes, availability, and delivery details.`
  )}`;

  return (
    <div className="mt-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-[#7A1F2A] transition hover:text-[#5f1820]"
      >
        Quick Order
      </a>
    </div>
  );
}