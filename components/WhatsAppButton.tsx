'use client';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.link/akv6mj';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(37,211,102,0.45)] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6 sm:p-4"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-current"
      >
        <path d="M20.52 3.48A11.4 11.4 0 0 0 12.06 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.75 1.74h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.2-1.24-6.2-3.48-8.68ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.74.98 1-3.64-.24-.37A9.87 9.87 0 0 1 2.1 11.93a9.84 9.84 0 0 1 19.67 0c0 5.43-4.42 9.87-9.7 9.87Zm5.43-7.39c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.66.15-.19.3-.73.98-.9 1.18-.17.2-.34.23-.63.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.07 4.48.71.31 1.26.49 1.69.63.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.69.25-1.29.18-1.42-.08-.14-.27-.23-.57-.38Z" />
      </svg>
    </a>
  );
}
