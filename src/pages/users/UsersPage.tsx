import React, { useEffect, useState } from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Alert, Avatar, IconButton } from "@mui/material";
import { User } from "../../interfaces/userInterface/userList";
import { fetchUsers } from "../../services/userService/userService"; // Importe a função do seu service
import { Delete, Edit } from "@mui/icons-material";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Função para buscar todos os usuários
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers(); // Usando a função do service
        setUsers(fetchedUsers);
      } catch (err) {
        setError("Erro ao carregar os usuários.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Função de edição (a ser implementada)
  const handleEdit = (userId: number) => {
    console.log(`Editar usuário com ID: ${userId}`);
    // Lógica de edição (ex: abrir modal ou redirecionar para página de edição)
  };

  // Função de exclusão (a ser implementada)
  const handleDelete = (userId: number) => {
    console.log(`Deletar usuário com ID: ${userId}`);
    // Lógica de exclusão (ex: chamada de API para excluir o usuário)
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Usuários
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Endereço</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Ações</TableCell> {/* Coluna de ações */}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Avatar src={user.avatarUrl} alt={user.name} />
                  </TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    {/* Ícones de ação */}
                    <IconButton onClick={() => handleEdit(user.id)} color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(user.id)} color="secondary">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default UserList;
