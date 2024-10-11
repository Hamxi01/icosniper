"use client";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  EditIcon,
  EyeIcon,
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
import { Dialog } from "@/components/ui/dialog"; // Ensure Dialog is imported
import { useToast } from "@/components/global/use-toast"; // Now correctly imported
import { Modal, message } from "antd";
import EditCoinComponent from "./_components/EditCoinComponent";
import Link from "next/link";
import { handleFileDelete } from "@/lib/firebaseFileManage";

const CoinsPage = () => {
  const router = useRouter();
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editCoin, setEditCoin] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { addToast } = useToast(); // For displaying messages

  useEffect(() => {
    fetchCoins();
  }, [page, search]);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/coins", {
        params: { page, search },
      });
      setCoins(data.coins);
      setTotalPages(data.totalPages);
      console.log(data);
    } catch (error) {
      addToast({ title: "Error fetching coins", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (coin) => {
    Modal.confirm({
      title: "Are you sure you want to delete this coin?",
      onOk: async () => {
        try {
          const res = await fetch(`/api/coins`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: coin.id }), // Pass the id in the request body
          });
          if (res.ok) {
            // Call the delete function to remove the logo from Firebase
            await handleFileDelete(coin.logo); // Use the logo path to delete the file

            message.success("Coin deleted successfully!");
            fetchCoins(); // Refresh the coin list
          } else {
            message.error("Failed to delete coin.");
          }
        } catch (error) {
          message.error("Failed to delete coin.");
        }
      },
    });
  };

  const handleEdit = (coin) => {
    setEditCoin(coin); // Set the coin to be edited
  };

  const handleSave = async (updatedCoin) => {
    try {
      await axios.put(`/api/coins`, updatedCoin);
      fetchCoins(); // Refresh the coin list
      setEditCoin(null); // Close the dialog
      addToast({ title: "Coin updated successfully." });
    } catch (error) {
      addToast({ title: "Error updating coin", description: error.message });
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Coins</h1>
      <div className="mb-6 flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search coins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Button onClick={() => router.push("/admin/coins/add")}>
          Add Coin
        </Button>
      </div>
      {loading ? (
        <p className="container mx-auto max-w-[1366px] w-full text-center">
          Loading...
        </p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Logo</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Launch Date</TableHead>
                <TableHead>Audit Link</TableHead>
                <TableHead>Is Team Doxxed?</TableHead>
                <TableHead>Softcap</TableHead>
                <TableHead>Hardcap</TableHead>
                <TableHead>Presale Link</TableHead>
                <TableHead>Presale Date</TableHead>
                <TableHead>Whitelist?</TableHead>
                <TableHead>Project Description</TableHead>
                <TableHead>Token Contract Address</TableHead> {/* New field */}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coins.length ? (
                coins.map((coin) => (
                  <TableRow key={coin.id}>
                    <TableCell>{coin.name}</TableCell>
                    <TableCell>
                      <img
                        src={coin.logo}
                        alt={coin.name}
                        className="w-10 h-10"
                      />
                    </TableCell>
                    <TableCell>{coin.symbol}</TableCell>
                    <TableCell>{formatDate(coin.launchDate)}</TableCell>
                    <TableCell>
                      <a
                        href={coin.auditLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {coin.auditLink}
                      </a>
                    </TableCell>
                    <TableCell>{coin.teamDoxxed}</TableCell>
                    <TableCell>{coin.softcap}</TableCell>
                    <TableCell>{coin.hardcap}</TableCell>
                    <TableCell>
                      <a
                        href={coin.presaleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {coin.presaleLink}
                      </a>
                    </TableCell>
                    <TableCell>
                      {coin.presaleDate ? formatDate(coin.presaleDate) : ""}
                    </TableCell>
                    <TableCell>{coin.whitelist ? "Yes" : "No"}</TableCell>
                    <TableCell>{coin.projectDescription}</TableCell>
                    <TableCell>
                      {coin?.tokenContractAddress?.map((address) => (
                        <div className="text-xs flex items-center gap-1 border-b border-b-sky-400">
                          <p>{address.Chain}</p>
                          <p>{address.Address}</p>
                        </div>
                      )) || "N/A"}
                    </TableCell>{" "}
                    {/* Updated to display token contract */}
                    <TableCell>
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
                                asChild
                                variant="ghost"
                                className="w-full text-left"
                              >
                                <Link href={`/coins/${coin?.id}`}>
                                  <EyeIcon />
                                </Link>
                              </Button>
                            </li>
                            <li>
                              <Button
                                variant="ghost"
                                className="w-full text-left"
                                onClick={() => handleEdit(coin)}
                              >
                                <EditIcon />
                              </Button>
                            </li>
                            <li>
                              <Button
                                variant="ghost"
                                className="w-full text-left text-red-500"
                                onClick={() => handleDelete(coin)}
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
                  <TableCell className="p-4 text-center" colSpan="14">
                    No coins found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

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
        </>
      )}

      {/* Edit Coin Dialog */}
      {editCoin && (
        <Dialog open={!!editCoin} onOpenChange={() => setEditCoin(null)}>
          <EditCoinComponent
            coin={editCoin}
            onSave={handleSave}
            onClose={() => setEditCoin(null)}
          />
        </Dialog>
      )}
    </div>
  );
};

export default CoinsPage;
