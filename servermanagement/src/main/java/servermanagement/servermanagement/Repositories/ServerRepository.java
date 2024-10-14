package servermanagement.servermanagement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import servermanagement.servermanagement.Entity.Server;

public interface ServerRepository extends JpaRepository<Server, Long> {
}