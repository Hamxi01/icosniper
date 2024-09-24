"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const EditCoinComponent = ({ coin, onSave, onClose }) => {
  const [editedCoin, setEditedCoin] = useState(coin);
  const [tokenContractAddresses, setTokenContractAddresses] = useState(
    editedCoin.tokenContractAddress || [{ Chain: "", Address: "" }]
  );
  const [socials, setSocials] = useState(
    editedCoin.socials || {
      website: "",
      telegram: "",
      twitter: "",
      CoinMarketCap: "",
      CoinGecko: "",
      Reddit: "",
      Discord: "",
      GitHub: "",
      YouTube: "",
      TikTok: "",
      Medium: "",
      Instagram: "",
    }
  );
  const [newLogo, setNewLogo] = useState(null); // State to hold the new logo file

  const handleSave = () => {
    const updatedCoin = {
      ...editedCoin,
      tokenContractAddresses: tokenContractAddresses, // Ensure the key matches what you expect in the API
      socials: socials,
      logo: newLogo ? URL.createObjectURL(newLogo) : editedCoin.logo, // Update logo if a new one is uploaded
    };
    onSave(updatedCoin);
    onClose(); // Close the dialog after saving
  };

  const handleTokenContractAddressChange = (index, field, value) => {
    const newAddresses = [...tokenContractAddresses];
    newAddresses[index][field] = value;
    setTokenContractAddresses(newAddresses);
  };

  const addTokenContractAddress = () => {
    setTokenContractAddresses([
      ...tokenContractAddresses,
      { Chain: "", Address: "" },
    ]);
  };

  const removeTokenContractAddress = (index) => {
    const newAddresses = tokenContractAddresses.filter((_, i) => i !== index);
    setTokenContractAddresses(newAddresses);
  };

  const handleSocialsChange = (field, value) => {
    setSocials({ ...socials, [field]: value });
  };

  return (
    <DialogContent
      className="bg-black text-white p-8 rounded-lg max-w-6xl mx-auto overflow-y-auto"
      style={{ width: "80%", height: "80%" }}
    >
      <DialogTitle className="text-2xl">Edit Coin</DialogTitle>
      <DialogDescription>Modify the coin details below.</DialogDescription>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {/* Name, Symbol, Logo */}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Name"
            value={editedCoin.name}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, name: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="symbol">Symbol</Label>
          <Input
            id="symbol"
            placeholder="Symbol"
            value={editedCoin.symbol}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, symbol: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="logo">Logo URL</Label>
          <Input
            id="logo"
            placeholder="Logo URL"
            value={editedCoin.logo}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, logo: e.target.value })
            }
            className="mb-4"
          />
          <div className="mb-4">
            <Label htmlFor="logoUpload">Upload New Logo</Label>
            <Input
              id="logoUpload"
              type="file"
              accept="image/*"
              onChange={(e) => setNewLogo(e.target.files[0])}
              className="mt-2"
            />
            {newLogo && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(newLogo)}
                  alt="New Logo Preview"
                  className="w-20 h-20 object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Launch Date, Audit Link, Is Team Doxxed */}
        <div>
          <Label htmlFor="launchDate">Launch Date</Label>
          <Input
            id="launchDate"
            placeholder="Launch Date"
            type="date"
            value={
              editedCoin.launchDate ? editedCoin.launchDate.split("T")[0] : ""
            }
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, launchDate: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="auditLink">Audit Link</Label>
          <Input
            id="auditLink"
            placeholder="Audit Link"
            value={editedCoin.auditLink}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, auditLink: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="teamDoxxed">Is Team Doxxed?</Label>
          <Textarea
            id="teamDoxxed"
            placeholder="Team Doxxed Details"
            value={editedCoin.teamDoxxed}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, teamDoxxed: e.target.value })
            }
            className="mb-4"
          />
        </div>

        {/* Contact Details */}
        <div>
          <Label htmlFor="contactEmail">Contact Email</Label>
          <Input
            id="contactEmail"
            placeholder="Contact Email"
            value={editedCoin.contactEmail}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, contactEmail: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="contactTelegram">Contact Telegram</Label>
          <Input
            id="contactTelegram"
            placeholder="Contact Telegram"
            value={editedCoin.contactTelegram}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, contactTelegram: e.target.value })
            }
            className="mb-4"
          />
        </div>

        {/* Softcap, Hardcap, Presale */}
        <div>
          <Label htmlFor="softcap">Softcap</Label>
          <Input
            id="softcap"
            placeholder="Softcap"
            type="number"
            value={editedCoin.softcap}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, softcap: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="hardcap">Hardcap</Label>
          <Input
            id="hardcap"
            placeholder="Hardcap"
            type="number"
            value={editedCoin.hardcap}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, hardcap: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="presaleLink">Presale Link</Label>
          <Input
            id="presaleLink"
            placeholder="Presale Link"
            value={editedCoin.presaleLink}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, presaleLink: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="presaleDate">Presale Date</Label>
          <Input
            id="presaleDate"
            type="date"
            placeholder="Presale Date"
            value={
              editedCoin.presaleDate ? editedCoin.presaleDate.split("T")[0] : ""
            }
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, presaleDate: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="whitelist">Whitelist</Label>
          <Switch
            id="whitelist"
            checked={editedCoin.whitelist}
            onCheckedChange={(checked) =>
              setEditedCoin({ ...editedCoin, whitelist: checked })
            }
          />
        </div>

        {/* Description */}
        <div className="col-span-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Description"
            value={editedCoin.description}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, description: e.target.value })
            }
            className="mb-4"
          />
        </div>

        {/* Token Contract Addresses */}
        <div className="col-span-3">
          <Label>Token Contract Addresses</Label>
          {tokenContractAddresses.map((contract, index) => (
            <div key={index} className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <Label htmlFor={`chain_${index}`}>Chain</Label>
                <Input
                  id={`chain_${index}`}
                  placeholder="Chain"
                  value={contract.Chain}
                  onChange={(e) =>
                    handleTokenContractAddressChange(
                      index,
                      "Chain",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <Label htmlFor={`address_${index}`}>Address</Label>
                <Input
                  id={`address_${index}`}
                  placeholder="Address"
                  value={contract.Address}
                  onChange={(e) =>
                    handleTokenContractAddressChange(
                      index,
                      "Address",
                      e.target.value
                    )
                  }
                />
              </div>
              <Button
                type="button"
                onClick={() => removeTokenContractAddress(index)}
                variant="destructive"
                className="col-span-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={addTokenContractAddress}>
            Add Token Contract Address
          </Button>
        </div>

        {/* Socials */}
        <div className="col-span-3">
          <Label>Socials</Label>
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(socials).map((platform) => (
              <div key={platform}>
                <Label htmlFor={platform}>{platform}</Label>
                <Input
                  id={platform}
                  placeholder={`${platform} URL`}
                  value={socials[platform]}
                  onChange={(e) =>
                    handleSocialsChange(platform, e.target.value)
                  }
                  className="mb-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <Label htmlFor="contactEmail">Contact Email</Label>
          <Input
            id="contactEmail"
            placeholder="Contact Email"
            value={editedCoin.contactEmail}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, contactEmail: e.target.value })
            }
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="contactTelegram">Contact Telegram</Label>
          <Input
            id="contactTelegram"
            placeholder="Contact Telegram"
            value={editedCoin.contactTelegram}
            onChange={(e) =>
              setEditedCoin({ ...editedCoin, contactTelegram: e.target.value })
            }
            className="mb-4"
          />
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <Button onClick={handleSave} className="mt-6">
        Save Changes
      </Button>
    </DialogContent>
  );
};

export default EditCoinComponent;
