package alfraggers.Entidades;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    // Una categoría tiene muchos chistes
    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
    private List<Chiste> chistes;
}
