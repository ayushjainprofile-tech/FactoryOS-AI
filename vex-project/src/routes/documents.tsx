import { createFileRoute } from "@tanstack/react-router";
import { DocumentsPage } from "../components/document/DocumentsPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/documents")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <DocumentsPage />
    </ProtectedRoute>
  ),
});
