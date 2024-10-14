package servermanagement.servermanagement.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import servermanagement.servermanagement.Emums.Status;
import servermanagement.servermanagement.Entity.Server;
import servermanagement.servermanagement.Repositories.ServerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ServerService {

    @Autowired
    private ServerRepository serverRepository;

    public Server addServer(Server server) {
        return serverRepository.save(server);
    }

    public List<Server> getAllServers() {
        return serverRepository.findAll();
    }

    public Optional<Server> getServerById(Long id) {
        return serverRepository.findById(id);
    }

    public Server toggleServerStatus(Long id) {
        Optional<Server> serverOpt = serverRepository.findById(id);
        if (serverOpt.isPresent()) {
            Server server = serverOpt.get();
            server.setStatus(server.getStatus() == Status.ONLINE ? Status.OFFLINE : Status.ONLINE);
            return serverRepository.save(server);
        }
        return null;
    }
}