package alfraggers.Entidades;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Entity
@Data
public class Chiste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String texto;

    // Muchos chistes pertenecen a una Categoría
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    @JsonIgnoreProperties("chistes")
    private Categoria categoria;

    // Un chiste tiene muchos comentarios
    @OneToMany(mappedBy = "chiste", cascade = CascadeType.ALL)
    private List<Comentario> comentarios;
}
