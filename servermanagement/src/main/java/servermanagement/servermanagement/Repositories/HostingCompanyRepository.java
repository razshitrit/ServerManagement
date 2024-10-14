package servermanagement.servermanagement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import servermanagement.servermanagement.Entity.HostingCompany;

public interface HostingCompanyRepository extends JpaRepository<HostingCompany, Long> {
}