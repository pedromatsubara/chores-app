import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import { Phone, LocationOn } from "@mui/icons-material";
import ProfileHeader from "../components/headerInformation/HeaderInformation"; // Importar o novo componente

const ProfilePage: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatarUrl:
      "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-1/414975897_6991792270934323_7196383844971583079_n.jpg?stp=c0.79.1152.1152a_dst-jpg_s160x160&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=stWztmW2Lr0Q7kNvgE4ofjg&_nc_zt=24&_nc_ht=scontent.fudi1-1.fna&_nc_gid=A2e-G1zyINDza3VFoLnK3zX&oh=00_AYB1jTLHtFc_X0OuMHxNLuyH8fQKiWN8I1zZnaF-UDfh9g&oe=674E0F18",
    phone: "+123456789",
    address: "123 Main St, Springfield, USA",
  };

  const details = [
    { icon: <Phone />, label: "Phone", value: user.phone },
    { icon: <LocationOn />, label: "Address", value: user.address },
  ];

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
            <ProfileHeader
              name={user.name}
              email={user.email}
              avatarUrl={user.avatarUrl}
            />
          </Grid>

          {/* Painel Direito */}
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
