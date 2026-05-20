package alfraggers.Controladores;

import alfraggers.Entidades.Chiste;
import alfraggers.repositorios.ChisteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/chistes")
@CrossOrigin
public class ChisteController {

    @Autowired
    private ChisteRepository repo;

    @GetMapping
    public List<Chiste> listar() {
        return repo.findAll();
    }

    @PostMapping
    public ResponseEntity<Chiste> crear(@RequestBody Chiste c) {
        Chiste guardado = repo.save(c);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardado);
    }

    // REQUISITO OBLIGATORIO: Consultar relación entre entidad principal e hija
    // Obtiene todos los chistes de una categoría pasando su ID (ej: /chistes/categoria/1)
    @GetMapping("/categoria/{categoriaId}")
    public List<Chiste> listarPorCategoria(@PathVariable Long categoriaId) {
        return repo.findByCategoriaId(categoriaId);
    }
}
