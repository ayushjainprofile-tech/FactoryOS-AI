import { createFileRoute } from "@tanstack/react-router";
import { MaintenanceCenterPage } from "../components/maintenance/MaintenanceCenterPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/maintenance")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <MaintenanceCenterPage />
    </ProtectedRoute>
  ),
});
