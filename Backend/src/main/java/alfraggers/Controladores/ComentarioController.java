package alfraggers.Controladores;

import alfraggers.alfraggers.Entidades.Comentario;
import alfraggers.alfraggers.repositorios.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/comentarios")
@CrossOrigin
public class ComentarioController {

    @Autowired
    private ComentarioRepository repo;

    @GetMapping
    public List<Comentario> listar() {
        return repo.findAll();
    }

    @PostMapping
    public ResponseEntity<Comentario> crear(@RequestBody Comentario c) {
        Comentario guardado = repo.save(c);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardado);
    }
}