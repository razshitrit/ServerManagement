package servermanagement.servermanagement.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.EqualsAndHashCode;
import servermanagement.servermanagement.Emums.CompanyName;

@Entity
@Table(name = "hosting_companies")
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class HostingCompany {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CompanyName name;
}