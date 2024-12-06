import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import { Phone, LocationOn } from "@mui/icons-material";
import ProfileHeader from "../../components/headerInformation/HeaderInformation";
import { fetchUserProfile } from "../../services/userService/userService";
import { UserProfile } from "../../interfaces/userInterface/userProfile";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      if (!id) {
        setError("User ID is required");
        setLoading(false);
        return;
      }
      try {
        const userData = await fetchUserProfile(id);
        setUser(userData);
      } catch (err) {
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, [id]);

  const details = [
    { icon: <Phone />, label: "Phone", value: user?.phone || "-" },
    { icon: <LocationOn />, label: "Address", value: user?.address || "-" },
  ];

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {user && (
              <ProfileHeader
                name={user.name}
                email={user.email}
                avatarUrl={user.avatarUrl}
              />
            )}
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Detalhes do Perfil
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            {details.map((detail, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                marginBottom={2}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginRight={2}
                >
                  {detail.icon}
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    {detail.label}
                  </Typography>
                  <Typography variant="body1">{detail.value}</Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilePage;