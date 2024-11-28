import React from "react";
import { Avatar, Typography, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

interface ProfileHeaderProps {
  name: string;
  email: string;
  avatarUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, email, avatarUrl }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar
        alt={name}
        src={avatarUrl}
        sx={{ width: 150, height: 150, marginBottom: 2 }}
      />
      <Typography variant="h5" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {email}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Edit />}
        sx={{ marginTop: 2, width: "100%" }}
      >
        Editar Perfil
      </Button>
    </div>
  );
};

export default ProfileHeader;
