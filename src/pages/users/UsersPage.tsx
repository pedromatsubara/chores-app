import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Avatar,
  IconButton,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { User } from "../../interfaces/userInterface/userList";
import { deleteUser, fetchUsers } from "../../services/userService/userService";
import { useNavigate } from "react-router-dom";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        setError("Erro ao carregar os usuários.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleView = (userId: string) => {
    navigate(`/profile/${userId}`);
  };

  const handleEdit = (userId: string) => {
    console.log(`Editar usuário com ID: ${userId}`);
  };

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Erro ao deletar o usuário.");
    }
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
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <UserTableRow key={user.id} user={user} handleEdit={handleEdit} handleView={handleView} handleDelete={handleDelete}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

interface UserTableProps {
  user: User;
  handleView: (userId: string) => void;
  handleEdit: (userId: string) => void;
  handleDelete: (userId: string) => void;
}

const UserTableRow = ({ user, handleView, handleEdit, handleDelete}:UserTableProps) => (
  <TableRow>
    <TableCell>
      <Avatar src={user.avatarUrl} alt={user.name} />
    </TableCell>
    <TableCell>{user.id}</TableCell>
    <TableCell>{user.name}</TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell>{user.address}</TableCell>
    <TableCell>{user.phone}</TableCell>
    <TableCell>
      <IconButton onClick={() => handleView(user.id)} color="primary">
        <Visibility />
      </IconButton>
      <IconButton onClick={() => handleEdit(user.id)} color="primary">
        <Edit />
      </IconButton>
      <IconButton onClick={() => handleDelete(user.id)} color="secondary">
        <Delete />
      </IconButton>
    </TableCell>
  </TableRow>
);

export default UserList;
