package alfraggers.Entidades;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Data
public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mensaje;

    // Muchos comentarios pertenecen a un Chiste
    @ManyToOne
    @JoinColumn(name = "chiste_id")
    @JsonIgnoreProperties("comentarios")
    private Chiste chiste;
}
