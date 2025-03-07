export const metadata = {
  title: "My Website", // ตั้งค่า Title หลักของเว็บ
  description: "This is my awesome website using Next.js",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}