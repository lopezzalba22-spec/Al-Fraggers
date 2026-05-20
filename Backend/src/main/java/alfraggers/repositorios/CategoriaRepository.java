package alfraggers.repositorios;

import alfraggers.Entidades.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    // Buscar categorías por nombre (opcional, pero útil)
    List<Categoria> findByNombreContainingIgnoreCase(String nombre);

}
