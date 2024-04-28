export default function Error({ error }: { error: string }) {
  return (
    <>
      <img
        src="/icons/browser.svg"
        alt="Error icon"
        className="block mx-auto"
      />
      <p className="italic font-semibold text-center text-red-600">{error}</p>
    </>
  );
}
