import { createFileRoute } from "@tanstack/react-router";
import { AssetsPage } from "../components/assets/AssetsPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/assets")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <AssetsPage />
    </ProtectedRoute>
  ),
});
