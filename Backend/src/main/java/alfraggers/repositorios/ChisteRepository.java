package alfraggers.repositorios;

import alfraggers.Entidades.Chiste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChisteRepository extends JpaRepository<Chiste, Long> {

    List<Chiste> findByCategoriaId(Long categoriaId);

    List<Chiste> findByTextoContainingIgnoreCase(String texto);

    List<Chiste> findAllByOrderByIdDesc();

    @Query("SELECT c FROM Chiste c ORDER BY RANDOM() LIMIT 1")
    Chiste findRandomChiste();
}
