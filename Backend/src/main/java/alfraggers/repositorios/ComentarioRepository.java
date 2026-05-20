package alfraggers.repositorios;

import alfraggers.Entidades.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {

    // Obtener comentarios por id de chiste
    List<Comentario> findByChisteId(Long chisteId);

}
