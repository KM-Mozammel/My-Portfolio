import Navbar from "@/components/public/layout/navbar/Navbar";
import Footer from "@/components/public/layout/Footer";
import MainLayout from "@/components/public/layout/MainLayout";

import { ErrorBoundary } from "@/components/public/ErrorBoundary";
import { ClientErrorListener } from "@/components/public/ClientErrorListener";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      {/* <ClientErrorListener /> */}
      {/* <ErrorBoundary> */}
        {/* <PageTracker />  */}
        <Navbar />
        {children}
        <Footer />
      {/* </ErrorBoundary> */}
    </MainLayout>
  );
}