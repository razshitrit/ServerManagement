package servermanagement.servermanagement.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import servermanagement.servermanagement.Entity.Server;
import servermanagement.servermanagement.Services.ServerService;

import java.util.List;

@RestController
@RequestMapping("/api/servers")
public class ServerController {

    @Autowired
    private ServerService serverService;

    @PostMapping
    public ResponseEntity<Server> addServer(@RequestBody Server server) {
        Server savedServer = serverService.addServer(server);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedServer);
    }

    @GetMapping
    public ResponseEntity<List<Server>> getAllServers() {
        List<Server> servers = serverService.getAllServers();
        return ResponseEntity.ok(servers);
    }

    @PostMapping("/{id}/toggle-status")
    public ResponseEntity<Server> toggleServerStatus(@PathVariable Long id) {
        Server updatedServer = serverService.toggleServerStatus(id);
        return updatedServer != null ? ResponseEntity.ok(updatedServer) : ResponseEntity.notFound().build();
    }
}
