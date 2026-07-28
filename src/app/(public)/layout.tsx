import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import MainLayout from "@/components/layout/MainLayout";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ClientErrorListener } from "@/components/ClientErrorListener";

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