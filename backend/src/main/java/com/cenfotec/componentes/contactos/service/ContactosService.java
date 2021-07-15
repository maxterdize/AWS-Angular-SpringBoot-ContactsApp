package com.cenfotec.componentes.contactos.service;

import com.cenfotec.componentes.contactos.entity.Contacto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface ContactosService {

    public void save(Contacto contacto);
    public void update(Contacto contacto);
    public Contacto getContactoById(String id);
    public void deleteContacto(String id);
    public List<Contacto> getAllContactos();
}
