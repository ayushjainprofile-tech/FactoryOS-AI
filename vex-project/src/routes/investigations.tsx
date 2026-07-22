import { createFileRoute } from "@tanstack/react-router";
import { InvestigationsPage } from "../components/investigations/InvestigationsPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/investigations")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <InvestigationsPage />
    </ProtectedRoute>
  ),
});
