package alfraggers.Controladores;

import alfraggers.Entidades.Categoria;
import alfraggers.repositorios.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin // Permite que Angular se conecte sin errores de CORS
public class CategoriaController {

    @Autowired
    private CategoriaRepository repo;

    @GetMapping
    public List<Categoria> listar() {
        return repo.findAll();
    }

    @PostMapping
    public ResponseEntity<Categoria> crear(@RequestBody Categoria c) {
        Categoria guardado = repo.save(c);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardado); // Devuelve 201 Created
    }
}
