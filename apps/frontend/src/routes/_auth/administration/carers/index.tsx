import { createFileRoute, Link } from "@tanstack/react-router";
import { $api } from "../../../../stores/api";
import { Button, ColorSwatch, Table } from "@quassel/ui";
import { $session } from "../../../../stores/session";
import { useStore } from "@nanostores/react";

function AdministrationCarersIndex() {
  const sessionStore = useStore($session);
  const carers = $api.useSuspenseQuery("get", "/carers");
  const deleteCarerMutation = $api.useMutation("delete", "/carers/{id}", {
    onSuccess: () => carers.refetch(),
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Id</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Color</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {carers.data?.map((c) => (
          <Table.Tr key={c.id}>
            <Table.Td>{c.id}</Table.Td>
            <Table.Td>{c.name}</Table.Td>
            <Table.Td>{c.color && <ColorSwatch color={c.color} />}</Table.Td>
            <Table.Td>
              <Button variant="default" renderRoot={(props) => <Link to={`/administration/carers/edit/${c.id}`} {...props} />}>
                Edit
              </Button>
              {sessionStore.role === "ADMIN" && (
                <Button
                  variant="default"
                  onClick={() =>
                    deleteCarerMutation.mutate({
                      params: { path: { id: c.id.toString() } },
                    })
                  }
                >
                  Delete
                </Button>
              )}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export const Route = createFileRoute("/_auth/administration/carers/")({
  beforeLoad: () => ({
    actions: [
      <Button key="new-carer" variant="default" renderRoot={(props) => <Link to="/administration/carers/new" {...props} />}>
        New carer
      </Button>,
    ],
  }),
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData($api.queryOptions("get", "/carers")),
  component: () => <AdministrationCarersIndex />,
});
