import React, { useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Logout } from "@mui/icons-material";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";

interface ChargingPoint {
  id: number;
  nome: string;
  endereco: string;
  tipoRecarga: string;
  status: boolean;
  horarioFuncionamento: string;
  responsavelNome: string;
  responsavelContato: string;
  createdAt: string;
  updatedAt: string;
}

const initialFormData = {
  nome: "",
  endereco: "",
  tipoRecarga: "",
  status: false,
  horarioFuncionamento: "",
  responsavelNome: "",
  responsavelContato: "",
};

const getToken = (): string | null => {
  const cookieMatch = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwtToken="));
  if (cookieMatch) {
    return cookieMatch.split("=")[1];
  }
  return sessionStorage.getItem("jwtToken");
};

const AdminPage = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [chargingPoints, setChargingPoints] = useState<ChargingPoint[]>([]);
  const [formData, setFormData] = useState(initialFormData);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const loadChargingPoints = async () => {
    const token = getToken();
    try {
      const response = await fetch("http://localhost:3000/chargingPoints", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) throw new Error("Erro ao buscar pontos de recarga");
      const data = await response.json();
      setChargingPoints(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      (async () => {
        try {
          const response = await fetch("http://localhost:3000/admin/profile", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            setIsLogged(true);
            loadChargingPoints();
          } else {
            setIsLogged(false);
          }
        } catch (error) {
          console.error(error);
          setIsLogged(false);
        }
      })();
    }
  }, []);

  const handleLogin = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    try {
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Login falhou");
      const data = await response.json();
      if (rememberMe) {
        document.cookie = `jwtToken=${data.token}; path=/;`;
      } else {
        sessionStorage.setItem("jwtToken", data.token);
      }
      setIsLogged(true);
      loadChargingPoints();
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { ...formData };
    const token = getToken();

    if (selectedId === null) {
      try {
        const response = await fetch("http://localhost:3000/chargingPoints", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Erro ao cadastrar");
        await response.json();
        loadChargingPoints();
        handleCloseModal();
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await fetch(
          `http://localhost:3000/chargingPoints/${selectedId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify(payload),
          }
        );
        if (!response.ok) throw new Error("Erro ao atualizar");
        await response.json();
        loadChargingPoints();
        handleCloseModal();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDelete = async (id: number) => {
    const token = getToken();
    try {
      const response = await fetch(
        `http://localhost:3000/chargingPoints/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      if (!response.ok) throw new Error("Erro ao deletar");
      loadChargingPoints();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (chargingPoint: ChargingPoint) => {
    setSelectedId(chargingPoint.id);
    setFormData({
      nome: chargingPoint.nome,
      endereco: chargingPoint.endereco,
      tipoRecarga: chargingPoint.tipoRecarga,
      status: chargingPoint.status,
      horarioFuncionamento: chargingPoint.horarioFuncionamento,
      responsavelNome: chargingPoint.responsavelNome,
      responsavelContato: chargingPoint.responsavelContato,
    });
    setOpenFormModal(true);
  };

  const handleOpenModal = () => {
    setSelectedId(null);
    setFormData(initialFormData);
    setOpenFormModal(true);
  };

  const handleCloseModal = () => {
    setOpenFormModal(false);
    setSelectedId(null);
    setFormData(initialFormData);
  };

  if (!isLogged) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#175097" }}>
        <Toolbar className="w-full flex justify-between">
          <div className="flex items-center">
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpenDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Tabelas
            </Typography>
          </div>
          <img
            className="w-44 bg-white rounded-lg"
            src="/logo2.png"
            alt="logo tecsomobi"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{ width: 240, bgcolor: "#175097", height: "100%", color: "#fff" }}
          role="presentation"
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#fff" }}>
                  <ReorderRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Tabelas" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  document.cookie =
                    "jwtToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                  sessionStorage.removeItem("jwtToken");
                  window.location.reload();
                }}
              >
                <ListItemIcon sx={{ color: "#fff" }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF5627",
                color: "#FFFFFF",
                "&:hover": { bgcolor: "#FF7452" },
              }}
              onClick={handleOpenModal}
            >
              Novo Cadastro
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#F0F0F0" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Endereço</TableCell>
                  <TableCell>Tipo de Recarga</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Horário Funcionamento</TableCell>
                  <TableCell>Responsável</TableCell>
                  <TableCell>Contato</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chargingPoints.map((chargingPoint) => (
                  <TableRow key={chargingPoint.id}>
                    <TableCell>{chargingPoint.id}</TableCell>
                    <TableCell>{chargingPoint.nome}</TableCell>
                    <TableCell>{chargingPoint.endereco}</TableCell>
                    <TableCell>{chargingPoint.tipoRecarga}</TableCell>
                    <TableCell>{chargingPoint.status ? "Ativo" : "Inativo"}</TableCell>
                    <TableCell>{chargingPoint.horarioFuncionamento}</TableCell>
                    <TableCell>{chargingPoint.responsavelNome}</TableCell>
                    <TableCell>{chargingPoint.responsavelContato}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleEdit(chargingPoint)}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          onClick={() => handleDelete(chargingPoint.id)}
                        >
                          Deletar
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Dialog
            open={openFormModal}
            onClose={handleCloseModal}
            fullWidth
            maxWidth="md"
          >
            <form onSubmit={handleFormSubmit}>
              <DialogTitle>
                {selectedId
                  ? "Editar Ponto de Recarga"
                  : "Novo Ponto de Recarga"}
              </DialogTitle>
              <DialogContent>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <TextField
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    required
                    sx={{
                      bgcolor: "#F0F0F0",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#84D6DA" },
                        "&:hover fieldset": { borderColor: "#84D6DA" },
                        "&.Mui-focused fieldset": { borderColor: "#84D6DA" },
                      },
                    }}
                  />
                  <TextField
                    label="Endereço"
                    variant="outlined"
                    fullWidth
                    value={formData.endereco}
                    onChange={(e) =>
                      setFormData({ ...formData, endereco: e.target.value })
                    }
                    required
                    sx={{
                      bgcolor: "#F0F0F0",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#84D6DA" },
                        "&:hover fieldset": { borderColor: "#84D6DA" },
                        "&.Mui-focused fieldset": { borderColor: "#84D6DA" },
                      },
                    }}
                  />
                  <TextField
                    label="Tipo de Recarga"
                    variant="outlined"
                    fullWidth
                    value={formData.tipoRecarga}
                    onChange={(e) =>
                      setFormData({ ...formData, tipoRecarga: e.target.value })
                    }
                    required
                    sx={{
                      bgcolor: "#F0F0F0",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#84D6DA" },
                        "&:hover fieldset": { borderColor: "#84D6DA" },
                        "&.Mui-focused fieldset": { borderColor: "#84D6DA" },
                      },
                    }}
                  />
                  <TextField
                    label="Horário Funcionamento"
                    variant="outlined"
                    fullWidth
                    value={formData.horarioFuncionamento}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        horarioFuncionamento: e.target.value,
                      })
                    }
                    required
                    placeholder="08:00 - 18:00"
                    sx={{
                      bgcolor: "#F0F0F0",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#84D6DA" },
                        "&:hover fieldset": { borderColor: "#84D6DA" },
                        "&.Mui-focused fieldset": { borderColor: "#84D6DA" },
                      },
                    }}
                  />
                  <TextField
                    label="Responsável Nome"
                    variant="outlined"
                    fullWidth
                    value={formData.responsavelNome}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        responsavelNome: e.target.value,
                      })
                    }
                    required
                    sx={{
                      bgcolor: "#F0F0F0",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#84D6DA" },
                        "&:hover fieldset": { borderColor: "#84D6DA" },
                        "&.Mui-focused fieldset": { borderColor: "#84D6DA" },
                      },
                    }}
                  />
                  <TextField
                    label="Responsável Contato"
                    variant="outlined"
                    fullWidth
                    value={formData.responsavelContato}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        responsavelContato: e.target.value,
                      })
                    }
                    required
                    sx={{
                      bgcolor: "#F0F0F0",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#84D6DA" },
                        "&:hover fieldset": { borderColor: "#84D6DA" },
                        "&.Mui-focused fieldset": { borderColor: "#84D6DA" },
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.status}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.checked })
                        }
                        color="primary"
                      />
                    }
                    label="Status (Ativo)"
                  />
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleCloseModal}
                  variant="outlined"
                  color="secondary"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#FF5627",
                    color: "#FFFFFF",
                    "&:hover": { bgcolor: "#FF7452" },
                  }}
                >
                  {selectedId ? "Atualizar" : "Cadastrar"}
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};

export default AdminPage;
