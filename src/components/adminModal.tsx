import {
    TextField,
    Switch,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material'

const adminModal = () => {
  return (
    <Dialog open={openFormModal} onClose={handleCloseModal} fullWidth maxWidth="md">
    <form onSubmit={handleFormSubmit}>
      <DialogTitle>{selectedId ? "Editar Ponto de Recarga" : "Novo Ponto de Recarga"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
            sx={{
              bgcolor: "#F0F0F0",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#84D6DA" },
                "&:hover fieldset": { borderColor: "#84D6DA" },
                "&.Mui-focused fieldset": { borderColor: "#84D6DA" }
              }
            }}
          />
          <TextField
            label="Endereço"
            variant="outlined"
            fullWidth
            value={formData.endereco}
            onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
            required
            sx={{
              bgcolor: "#F0F0F0",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#84D6DA" },
                "&:hover fieldset": { borderColor: "#84D6DA" },
                "&.Mui-focused fieldset": { borderColor: "#84D6DA" }
              }
            }}
          />
          <TextField
            label="Tipo de Recarga"
            variant="outlined"
            fullWidth
            value={formData.tipoRecarga}
            onChange={(e) => setFormData({ ...formData, tipoRecarga: e.target.value })}
            required
            sx={{
              bgcolor: "#F0F0F0",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#84D6DA" },
                "&:hover fieldset": { borderColor: "#84D6DA" },
                "&.Mui-focused fieldset": { borderColor: "#84D6DA" }
              }
            }}
          />
          <TextField
            label="Horário Funcionamento"
            variant="outlined"
            fullWidth
            value={formData.horarioFuncionamento}
            onChange={(e) => setFormData({ ...formData, horarioFuncionamento: e.target.value })}
            required
            placeholder="08:00 - 18:00"
            sx={{
              bgcolor: "#F0F0F0",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#84D6DA" },
                "&:hover fieldset": { borderColor: "#84D6DA" },
                "&.Mui-focused fieldset": { borderColor: "#84D6DA" }
              }
            }}
          />
          <TextField
            label="Responsável Nome"
            variant="outlined"
            fullWidth
            value={formData.responsavelNome}
            onChange={(e) => setFormData({ ...formData, responsavelNome: e.target.value })}
            required
            sx={{
              bgcolor: "#F0F0F0",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#84D6DA" },
                "&:hover fieldset": { borderColor: "#84D6DA" },
                "&.Mui-focused fieldset": { borderColor: "#84D6DA" }
              }
            }}
          />
          <TextField
            label="Responsável Contato"
            variant="outlined"
            fullWidth
            value={formData.responsavelContato}
            onChange={(e) => setFormData({ ...formData, responsavelContato: e.target.value })}
            required
            sx={{
              bgcolor: "#F0F0F0",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#84D6DA" },
                "&:hover fieldset": { borderColor: "#84D6DA" },
                "&.Mui-focused fieldset": { borderColor: "#84D6DA" }
              }
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                color="primary"
              />
            }
            label="Status (Ativo)"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button type="submit" variant="contained" sx={{ bgcolor: "#FF5627", color: "#FFFFFF", "&:hover": { bgcolor: "#FF7452" } }}>
          {selectedId ? "Atualizar" : "Cadastrar"}
        </Button>
      </DialogActions>
    </form>
  </Dialog>
  )
}

export default adminModal