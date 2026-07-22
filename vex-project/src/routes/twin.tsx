import { createFileRoute } from "@tanstack/react-router";
import { TwinPage } from "../components/twin/TwinPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/twin")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <TwinPage />
    </ProtectedRoute>
  ),
});
