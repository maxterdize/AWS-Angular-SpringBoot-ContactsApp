package com.cenfotec.componentes.contactos.rest;

import com.cenfotec.componentes.contactos.entity.Contacto;
import com.cenfotec.componentes.contactos.service.ContactosService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/contactos")
public class ContactosController {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final ContactosService contactosService;

    @PostMapping
    public ResponseEntity<Contacto> createContacto(@Valid @RequestBody Contacto contacto) {
        logger.info(">>> Recibiendo request para salvar contacto");
        contacto.setId(null);
        contactosService.save(contacto);
        return ResponseEntity.ok(null);
    }

    @PutMapping
    public void upDateContacto(@Valid @RequestBody Contacto contacto) {
        logger.info(">>> Recibiendo request para modificar contacto");
        contactosService.update(contacto);
    }
    @GetMapping
    public ResponseEntity<Contacto> getContactoById(@Valid @RequestParam(value = "id", required = true) String id ){
        Contacto contacto = contactosService.getContactoById(id);
        logger.info(">>> recuperando el contacto con el id " + id);
        return new ResponseEntity<Contacto>(contacto,HttpStatus.OK);
    }
    @GetMapping("/getAll")
    public List<Contacto> getAllContacto(){
        logger.info(">>> Recibiendo request de todos los contactos");
        return contactosService.getAllContactos();
    }
    @DeleteMapping(value = "{id}")
    public void deleteContacto(@Valid @PathVariable("id") String id){
        logger.info(">>> enviado el id del contacto para eliminar de la base de datos");
        contactosService.deleteContacto(id);
    }
}
