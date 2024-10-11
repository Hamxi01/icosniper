"use client";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  EditIcon,
  MoreHorizontal,
  TrashIcon,
} from "lucide-react"; // For icons
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"; // Ensure Dialog is imported
import { useToast } from "@/components/global/use-toast"; // Now correctly imported
import { Modal, message } from "antd";

const UsersPage = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { addToast } = useToast(); // For displaying messages

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/users`, {
        params: { page, search },
      });
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (error) {
      addToast({ title: "Error fetching users", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      onOk: async () => {
        try {
          const res = await fetch(`/api/users`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id, // Pass the id in the request body
            }),
          });
          if (res.ok) {
            message.success("User deleted successfully!");
            fetchUsers(); // Refresh the user list
          } else {
            message.error("Failed to delete user.");
          }
        } catch (error) {
          message.error("Failed to delete user.");
        }
      },
    });
  };

  const handleEdit = (user) => {
    setEditUser(user); // Set the user to be edited
  };

  const handleSave = async (updatedUser) => {
    try {
      await axios.put(`/api/users`, updatedUser);
      fetchUsers(); // Refresh the user list
      setEditUser(null); // Close the dialog
      addToast({ title: "User updated successfully." });
    } catch (error) {
      addToast({ title: "Error updating user", description: error.message });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      <div className="mb-6 flex justify-between items-center">
        <Input
          placeholder="Search Users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs"
        />
        <Button onClick={() => router.push("/admin/users/create")}>
          Add User
        </Button>
      </div>

      {loading ? (
        <p className="container mx-auto max-w-[1366px] w-full text-center">
          Loading...
        </p>
      ) : (
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-left">
              <TableHead className="p-2">Name</TableHead>
              <TableHead className="p-2">Email</TableHead>
              <TableHead className="p-2">Role</TableHead>
              <TableHead className="p-2">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length ? (
              users.map((user) => (
                <TableRow key={user.id} className="border-b">
                  <TableCell className="p-2">{user.name}</TableCell>
                  <TableCell className="p-2">{user.email}</TableCell>
                  <TableCell className="p-2">{user.role}</TableCell>
                  <TableCell className="p-2">
                    <Popover>
                      <PopoverTrigger>
                        <Button variant="ghost" className="p-2">
                          <MoreHorizontal />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="end" className="w-32">
                        <ul>
                          <li>
                            <Button
                              variant="ghost"
                              className="w-full text-left"
                              onClick={() => handleEdit(user)}
                            >
                              <EditIcon />
                            </Button>
                          </li>
                          <li>
                            <Button
                              variant="ghost"
                              className="w-full text-left text-red-500"
                              onClick={() => handleDelete(user.id)}
                            >
                              <TrashIcon />
                            </Button>
                          </li>
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="p-4 text-center" colSpan="4">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}

      {/* Pagination */}
      <div className="mt-4 flex justify-between">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <p>
          Page {page} of {totalPages}
        </p>
        <Button
          onClick={() =>
            setPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          disabled={page === totalPages}
        >
          Next
          <ChevronRight />
        </Button>
      </div>

      {/* Edit User Dialog */}
      {editUser && (
        <Dialog open={!!editUser} onOpenChange={() => setEditUser(null)}>
          <DialogContent>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Modify the user details below.
            </DialogDescription>
            <Input
              placeholder="Name"
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              className="mb-4"
            />
            <Input
              placeholder="Email"
              value={editUser.email}
              onChange={(e) =>
                setEditUser({ ...editUser, email: e.target.value })
              }
              className="mb-4"
            />
            <select
              value={editUser.role}
              onChange={(e) =>
                setEditUser({ ...editUser, role: e.target.value })
              }
              className="mb-4"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <div className="flex justify-end">
              <Button onClick={() => handleSave(editUser)}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default UsersPage;
